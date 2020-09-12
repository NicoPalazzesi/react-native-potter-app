// @flow

import { type TSendLoginResponse } from '../../api/login';
import {type TLoginActions, type TLoginError } from '../actions/login';
import { act } from 'react-test-renderer';

export type TLoginStore = {
  jwt: $PropertyType<TSendLoginResponse,'jwt'> | null,
  start: boolean,
  loginState: string,
  error: TLoginError | null
};

export const loginInitialState = {
  jwt: null,
  start: false,
  loginState: '',
  error: null
};

export const loginReducer = (
  state: TLoginStore = loginInitialState,
  action: TLoginActions
) => {
  switch(action.type){
    case 'LOGIN/START':
      return {
        ...state,
        loginState: 'START',
        error: null
      }
    case 'LOGIN/LOGIN_SUCCESS':
      const { jwt } = action.payload;
      return {
        ...state,
        loginState: 'LOGIN_SUCCESS',
        jwt
      }
    case 'LOGIN/LOGIN_FAILURE':
      const { error } = action.payload;
      return {
        ...state,
        loginState: 'LOGIN_FAILURE',
        error
      }
    default:
      return {
        ...state
      }
  }
}