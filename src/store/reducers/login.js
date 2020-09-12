// @flow

import { type TSendLoginResponse } from '../../api/login';
import {type TLoginActions, type TLoginError } from '../actions/login';

export type TLoginStore = {
  jwt: $PropertyType<TSendLoginResponse,'jwt'> | null,
  start: boolean,
  loginState: string | null,
  error: TLoginError | null
};

export const loginInitialState = {
  jwt: null,
  start: false,
  loginState: null,
  error: null
};

const _loginReducer = (
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
    case 'LOGIN/LOGOUT':
      return {
        ...state,
        loginState: null,
        jwt: null
      }
    default:
      return {
        ...state
      }
  }
}

import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const loginPersistConfig = {
  key: 'login',
  storage: AsyncStorage,
  whitelist: [ 'jwt' ]
};

export const loginReducer = persistReducer<TLoginStore, any>(
  loginPersistConfig, _loginReducer
);