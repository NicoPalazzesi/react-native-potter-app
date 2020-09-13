// @flow

import Api from './index';

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

export type THouseInfo = {
  name: string,
  mascot: string,
  headOfHouse: string,
  houseGhost: string,
  founder: string,
  values: Array<string>
}

export type TGetHouseResponse = {
  success: boolean,
  houseInfo?: THouseInfo
};

//bad house id
type TGetHouseBadHouseIdResponse = { message: string };

// bad api key
type TGetHouseBadApiKeyResponse = { error: string };

export type TgetHouseRawResponse = TGetHouseResponse | null;

async function getHouse(houseId: THouseId): Promise<TgetHouseRawResponse>{
  const url = api.buildUrl('houses', houseId);
  
  try{
    const response = await api.get(url);
    if(!response.message && !response.error){
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