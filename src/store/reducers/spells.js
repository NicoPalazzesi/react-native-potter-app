// @flow

import { type TSpells } from '../../api/spells';
import {type TSpellsActions, type TSpellsError } from '../actions/spells';

export type TSpellsStore = {
  spellsState: string | null,
  error: TSpellsError | null,
  spells: TSpells | null
};

export const spellsInitialState = {
  spellsState: null,
  error: null,
  spells: null
};

export const spellsReducer = (
  state: TSpellsStore = spellsInitialState,
  action: TSpellsActions
) => {
  switch(action.type){
    case 'SPELLS/START':
      return {
        ...state,
        spellsState: 'START',
        error: null,
        spells: null
      }
    case 'SPELLS/GET_SPELLS_SUCCESS':
      const { spells } = action.payload;
      return {
        ...state,
        spellsState: 'GET_SPELLS_SUCCESS',
        spells
      }
    case 'SPELLS/GET_SPELLS_FAILURE':
      const { error } = action.payload;
      return {
        ...state,
        spellsState: 'GET_SPELLS_FAILURE',
        error
      }
    case 'SPELLS/CLEAR':
      return {
        ...spellsInitialState
      }
    default:
      return {
        ...state
      }
  }
}