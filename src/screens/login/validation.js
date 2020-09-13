// @flow

import Validator from '../../helpers/validation';
import Alert from './alert';

export function validLoginInputData(loginInputData: Object): boolean {
  const { username, password } = loginInputData;
  //Username
  if(Validator.isEmpty(username)) {
    Alert.emptyUsername();
    return false;
  }
  //Password
  if(Validator.isEmpty(password)) {
    Alert.emptyPassword();
    return false;
  }
  return true;
}