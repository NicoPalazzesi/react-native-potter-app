//@flow

import { combineReducers } from 'redux';

import {loginReducer, loginInitialState} from './login';
import {housesReducer, housesInitialState} from './houses';

export default combineReducers(
  { 
    login: loginReducer,
    houses: housesReducer
  }, 
  { 
    loginReducer: loginInitialState,
    housesReducer: housesInitialState
  }
)