// @flow

import Api from './index';

import { type TBadApiKeyResponse, type TBadParamsResponse } from './errors';

const api = new Api();

export type THouseId = 
    "5a05e2b252f721a3cf2ea33f" // Gryffindor ID
  | "5a05da69d45bd0a11bd5e06f" // Ravenclaw ID
  | "5a05dc8cd45bd0a11bd5e071" // Slytherin ID
  | "5a05dc58d45bd0a11bd5e070" // Hufflepuff ID

export const houseId = {
  GRYFFINDOR: "5a05e2b252f721a3cf2ea33f",
  RAVENCLAW: "5a05da69d45bd0a11bd5e06f",
  SLYTHERIN: "5a05dc8cd45bd0a11bd5e071",
  HUFFLEPUFF: "5a05dc58d45bd0a11bd5e070"
};

export type THouse = {
  name: string,
  mascot: string,
  headOfHouse: string,
  houseGhost: string,
  founder: string,
  values: Array<string>
}

export type THouses = Array<THouse>

export type TGetHouseResponse = {
  success: boolean,
  houseInfo?: THouse
} | null;

async function getHouse(houseId: THouseId): Promise<TGetHouseResponse>{
  const url = api.buildUrl('houses', houseId);
  
  try{
    const response: THouses | TBadParamsResponse | TBadApiKeyResponse = await api.get(url);
    if(response.message === undefined && response.error === undefined){
      return {
        success: true,
        houseInfo: response[0]
      }
    }
    else {
      return { success: false };
    }
  }catch(e){
    console.error('fail Houses.getHouse',e.status);
    return null;
  }
}

export default {
  getHouse
};