// @flow

import Config from 'react-native-config';

const WS_TIMEOUT = 30000;

const error = TypeError('Timeout');

const host = Config.POTTER_API_HOST;
const apiKey = Config.POTTER_API_KEY;

export const WSErrors = {
  BAD_REQUEST: 400,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_ERROR: 500
};

function buildUrl(...segments: Array<string>) {
  return `${host}/${segments.join('/')}?key=${apiKey}`;
}

function buildPayload(
  method: 'GET' | 'HEAD' | 'PUT' | 'PATCH' | 'POST' | 'DELETE',
  token?: string,
  data?: Object
){
  return {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token ? token : ''}`,
    },
    body: typeof data !== 'undefined' ? JSON.stringify(data) : undefined,
  };
}

function getPayload(payloadBody: Object) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payloadBody),
  };
}

async function get(url: string, token?: string) {
  const payload = buildPayload('GET', token);
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

async function post(url: string, token?: string, data: Object) {
  const payload = buildPayload('POST', token, data);
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

async function put(url: string, token?: string, data?: Object) {
  const payload = buildPayload('PUT', token, data);
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

async function fetch(url: string, payloadBody?: Object): Promise<any> {
  const payload = (
    typeof payloadBody !== 'undefined' ?
      getPayload(payloadBody)
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

async function remove(url: string, token?: string, data?: Object) {
  const payload = buildPayload('DELETE', token, data);
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

export default {
  buildUrl,
  get,
  post,
  put,
  fetch,
  remove
};