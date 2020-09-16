//@flow

import { combineReducers } from 'redux';

import {loginReducer, loginInitialState} from './login';
import {housesReducer, housesInitialState} from './houses';
import {spellsReducer, spellsInitialState} from './spells';

export default combineReducers(
  { 
    login: loginReducer,
    houses: housesReducer,
    spells: spellsReducer
  }, 
  { 
    loginReducer: loginInitialState,
    housesReducer: housesInitialState,
    spellsReducer: spellsInitialState
  }
)