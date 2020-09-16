// @flow

import { Dispatch } from 'redux';

import 
  SpellsApi,
  { type TSpells, type TGetSpellsResponse }
from '../../api/spells';

export type TSpellsDispatchers = {
  getSpells: () => void
}

export type TSpellsActions = 
  | { type: 'SPELLS/START' }
  | {
      type: 'SPELLS/GET_SPELLS_SUCCESS',
      payload: { spells: TSpells }
    }
  | { 
      type: 'SPELLS/GET_SPELLS_FAILURE',
      payload: { error: TSpellsError }
    }

export type TSpellsError = 1

export const spellsError = {
  NETWORK: 1,
  BAD_SPELLS_RESPONSE: 2
}

export default {
  getSpells(){
    return async function(dispatch: typeof Dispatch) {
      // start
      dispatch({ type: 'SPELLS/START' });
      const response: TGetSpellsResponse = await SpellsApi.getSpells();
      if(response){
        // success
        if(response.success){
          dispatch({
            type: 'SPELLS/GET_SPELLS_SUCCESS',
            payload: { spells: response.spells }
          });
        }
        // failure
        else {
          dispatch({
            type: 'SPELLS/GET_SPELLS_FAILURE',
            payload: { error: spellsError.BAD_SPELLS_RESPONSE }
          });
        }
      }
      else{
        dispatch({
          type: 'SPELLS/GET_SPELLS_FAILURE',
          payload: { error: spellsError.NETWORK }
        });
      }
    }
  }
}