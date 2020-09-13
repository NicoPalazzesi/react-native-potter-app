// @flow

import { Dispatch } from 'redux';
import
  LoginApi,
  { type TLoginData, type TSendLoginResponse, type TSendLoginRawResponse }
from '../../api/login';

export type TLoginDispatchers = {
  sendLogin: (loginData: TLoginData) => void,
  logout: () => void
}

export type TLoginActions = 
  | { type: 'LOGIN/START' }
  | {
      type: 'LOGIN/LOGIN_SUCCESS',
      payload: { jwt: $PropertyType<TSendLoginResponse,'jwt'> }
    }
  | { 
      type: 'LOGIN/LOGIN_FAILURE',
      payload: { error: TLoginError }
    }
  | { type: 'LOGIN/LOGOUT' }

export type TLoginError = 1 | 2

export const loginError = {
  NETWORK: 1,
  INCORRECT_LOGIN_DATA: 2
}

export default {
  sendLogin(loginData: TLoginData){
    return async function(dispatch: typeof Dispatch) {
      // start
      dispatch({ type: 'LOGIN/START' });

      const response: TSendLoginRawResponse = await LoginApi.sendLogin(loginData);
      if(response){
        // success
        if(response.success){
          dispatch({
            type: 'LOGIN/LOGIN_SUCCESS',
            payload: { jwt: response.jwt }
          });
        }
        // failure
        else {
          dispatch({
            type: 'LOGIN/LOGIN_FAILURE',
            payload: { error: loginError.INCORRECT_LOGIN_DATA }
          });
        }
      }
      else{
        dispatch({
          type: 'LOGIN/LOGIN_FAILURE',
          payload: { error: loginError.NETWORK }
        });
      }
    }
  },

  logout(){
    return async function(dispatch: typeof Dispatch) {
      dispatch({ type: 'LOGIN/LOGOUT' });
    }
  }
}