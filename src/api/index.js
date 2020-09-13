// @flow

import Config from 'react-native-config';

const WS_TIMEOUT = 30000;

const error = TypeError('Timeout');

export type TPayload = Object;

const host = Config.POTTER_API_HOST;
const apiKey = Config.POTTER_API_KEY;

export interface IAPI {
  buildUrl(...segments: Array<string>): string;
  buildPayload(
    method: 'GET' | 'HEAD' | 'PUT' | 'PATCH' | 'POST' | 'DELETE',
    token?: string,
    data?: Object, 
    isFormData?: bool
  ): TPayload;
  getPayload(Object): TPayload;
  get(url: string, token?: string): Promise<any>;
  post(url: string, data: Object, token?: string): Promise<any>;
  put(url: string, token?: string, data?: Object): Promise<any>;
  fetch(url: string, payloadBody?: Object): Promise<any>;
  delete(url: string, token?: string, data?: Object): Promise<any>;
}

export default class API implements IAPI {

  buildUrl(...segments: Array<string>) {
    return `${host}/${segments.join('/')}?key=${apiKey}`;
  }
  
  buildPayload(
    method: 'GET' | 'HEAD' | 'PUT' | 'PATCH' | 'POST' | 'DELETE',
    token?: string,
    data?: Object, 
    isFormData?: bool
  ): TPayload {
    return {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': isFormData ? 
            'multipart/form-data'
          :
            'application/json',
        'Authorization': token ? `Bearer ${token}` : null
      },
      body: data ? JSON.stringify(data) : undefined
    };
  }

  getPayload(payloadBody: Object): TPayload {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payloadBody),
    };
  }

  async get(url: string, token?: string) {
    const payload = token ? this.buildPayload('GET', token) : this.buildPayload('GET');
    console.log(url, payload);
    const response = await Promise.race([
      fetch(url, payload),
      new Promise (
        (resolve,reject) => {
          setTimeout(() => {
            reject(error);
          }, WS_TIMEOUT);
        }
      )
    ]);
    if(!response.ok) {
      throw response;
    }
    const json = await response.json();
    return json;
  }

  async post(url: string, token?: string, data: Object) {
    const payload = this.buildPayload('POST', token, data);
    console.log(url, payload);
    const response = await Promise.race([
      fetch(url, payload),
      new Promise (
        (resolve,reject) => {
          setTimeout(() => {
            reject(error);
          }, WS_TIMEOUT);
        }
      )
    ]);
    if(!response.ok) {
      throw response;
    }
    const json = await response.json();
    return json;
  }

  async put(url: string, token?: string, data?: Object) {
    const payload = this.buildPayload('PUT', token, data);
    console.log(url, payload);
    const response = await Promise.race([
      fetch(url, payload),
      new Promise (
        (resolve,reject) => {
          setTimeout(() => {
            reject(error);
          }, WS_TIMEOUT);
        }
      )
    ]);
    if(!response.ok) {
      throw response;
    }
    const json = await response.json();
    return json;
  }

  async fetch(url: string, payloadBody?: Object): Promise<any> {
    const payload = (
      typeof payloadBody !== 'undefined' ?
        this.getPayload(payloadBody)
      :
        undefined
    );
    console.log(url, payload);
    const response = await Promise.race([
      fetch(url, payload),
      new Promise (
        (resolve,reject) => {
          setTimeout(() => {
            reject(error);
          }, 30000);
        }
      )
    ]);
    if(!response.ok) {
      throw response;
    }
    const json = await response.json();
    return json;
  }

  async delete(url: string, token?: string, data?: Object) {
    const payload = this.buildPayload('DELETE', token, data);
    console.log(url, payload);
    const response = await Promise.race([
      fetch(url, payload),
      new Promise (
        (resolve,reject) => {
          setTimeout(() => {
            reject(error);
          }, WS_TIMEOUT);
        }
      )
    ]);
    if(!response.ok) {
      throw response;
    }
    const json = await response.json();
    return json;
  }
}