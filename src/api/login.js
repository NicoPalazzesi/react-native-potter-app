// @flow

import Config from 'react-native-config';

export type TLoginData = {
  username: string,
  password: string
};

export type TSendLoginResponse = {
  success: string,
  jwt?: string
};

export type TSendLoginRawResponse = TSendLoginResponse | null;

export default {
  async sendLogin(loginData: TLoginData): Promise<TSendLoginRawResponse>{
    /** mock login */
    await wait(2000);

    if(loginData.username === Config.USERNAME_DEV &&
      loginData.password === Config.PASSWORD_DEV
    ){
      return require('./login.success.response.json');
    }
    else{
      return require('./login.failure.response.json');
    }
  }
}

async function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}