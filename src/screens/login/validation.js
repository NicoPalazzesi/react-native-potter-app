// @flow

import {Alert} from 'react-native';

import Validator from '../../helpers/validation';

export function validLoginInputData(loginInputData: Object): boolean {
  const { username, password } = loginInputData;
  //Username
  if(Validator.isEmpty(username)) {
    Alert.alert(
      'Error al iniciar sesión',
      'Por favor, ingrese un usuario.',
      [{ text: 'Aceptar' }]
    );
    return false;
  }
  //Password
  if(Validator.isEmpty(password)) {
    Alert.alert(
      'Error al iniciar sesión',
      'Por favor, ingrese una contraseña.',
      [{ text: 'Aceptar' }]
    );
    return false;
  }
  return true;
}