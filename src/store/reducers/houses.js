// @flow

import { type THouse } from '../../api/houses';
import {type THousesActions, type THousesError } from '../actions/houses';

export type THousesStore = {
  start: boolean,
  housesState: string | null,
  error: THousesError | null,
  houseInfo: THouse | null
};

export const housesInitialState = {
  start: false,
  housesState: null,
  error: null,
  houseInfo: null
};

export const housesReducer = (
  state: THousesStore = housesInitialState,
  action: THousesActions
) => {
  switch(action.type){
    case 'HOUSES/START':
      return {
        ...state,
        housesState: 'START',
        error: null,
        houseInfo: null
      }
    case 'HOUSES/GET_HOUSE_SUCCESS':
      const { houseInfo } = action.payload;
      return {
        ...state,
        housesState: 'GET_HOUSE_SUCCESS',
        houseInfo
      }
    case 'HOUSES/GET_HOUSE_FAILURE':
      const { error } = action.payload;
      return {
        ...state,
        housesState: 'GET_HOUSE_FAILURE',
        error
      }
    case 'HOUSES/CLEAR':
      return {
        ...housesInitialState
      }
    default:
      return {
        ...state
      }
  }
}