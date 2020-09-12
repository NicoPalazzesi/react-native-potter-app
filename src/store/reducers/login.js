// @flow

export type TLoginStore = {
  start: boolean,
  isLogged: boolean,
  sendLoginSuccess: boolean,
  sendLoginFailure: boolean
};

import {type TLoginActions } from '../actions/login';

export const loginInitialState = {
  start: false,
  isLogged: false,
  sendLoginSuccess: false,
  sendLoginFailure: false
};

export const loginReducer = (
  state: TLoginStore = loginInitialState,
  action: TLoginActions
) => {
  switch(action.type){
    case 'LOGIN/START':
      return {
        ...state,
        start: true,
        sendLoginSuccess: false,
        sendLoginFailure: false
      }
    case 'LOGIN/LOGIN_SUCCESS':
      return {
        ...state,
        start: false,
        isLogged: true
      }
    case 'LOGIN/LOGIN_FAILURE':
      return {
        ...state,
        start: false,
        sendLoginFailure: true
      }
    default:
      return {
        ...state
      }
  }
}