// @flow

import Api from './index';

const api = new Api();

export type TSpell = {
  _id: string,
  spell: string,
  type: string,
  effect: string
};

export type TSpells = Array<TSpell>;

export type TGetSpellsResponse = {
  success: boolean,
  spells?: TSpells
} | null;

export type TBadApiKeyResponse = { error: string };

async function getSpells(): Promise<TGetSpellsResponse> {
  const url = api.buildUrl('spells');
  
  try{
    const response: TSpells | TBadApiKeyResponse = await api.get(url);
    if(response.error === undefined){
      return {
        success: true,
        spells: response
      }
    }
    else {
      return { success: false };
    }
  }catch(e){
    console.error('fail Spells.getSpells',e.status);
    return null;
  }
}

export default {
  getSpells
};