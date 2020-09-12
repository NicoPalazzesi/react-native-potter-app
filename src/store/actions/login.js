// @flow

export type TLoginActions = 
  | { type: 'LOGIN/START' }
  | { type: 'LOGIN/LOGIN_SUCCESS' }
  | { type: 'LOGIN/LOGIN_FAILURE' }
