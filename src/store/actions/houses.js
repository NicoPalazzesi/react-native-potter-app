// @flow

import { Dispatch } from 'redux';
import
  HouseApi,
  { type THouseId, type TGetHouseResponse, type THouse }
from '../../api/houses';

export type THousesDispatchers = {
  getHouse: (houseId: THouseId) => void,
  clear: () => void
}

export type THousesActions = 
  | { type: 'HOUSES/START' }
  | {
      type: 'HOUSES/GET_HOUSE_SUCCESS',
      payload: { houseInfo: THouse }
    }
  | { 
      type: 'HOUSES/GET_HOUSE_FAILURE',
      payload: { error: THousesError }
    }
  | { type: 'HOUSES/CLEAR' }

export type THousesError = 1 | 2

export const housesError = {
  NETWORK: 1,
  INCORRECT_HOUSES_DATA: 2
}

export default {
  getHouse(houseId: THouseId){
    return async function(dispatch: typeof Dispatch) {
      // start
      dispatch({ type: 'HOUSES/START' });
      const response: TGetHouseResponse = await HouseApi.getHouse(houseId);
      if(response){
        // success
        if(response.success){
          dispatch({
            type: 'HOUSES/GET_HOUSE_SUCCESS',
            payload: { houseInfo: response.houseInfo }
          });
        }
        // failure
        else {
          dispatch({
            type: 'HOUSES/GET_HOUSE_FAILURE',
            payload: { error: housesError.INCORRECT_HOUSES_DATA }
          });
        }
      }
      else{
        dispatch({
          type: 'HOUSES/GET_HOUSE_FAILURE',
          payload: { error: housesError.NETWORK }
        });
      }
    }
  },

  clear(){
    return async function(dispatch: typeof Dispatch) {
      dispatch({ type: 'HOUSES/CLEAR' });
    }
  }
}