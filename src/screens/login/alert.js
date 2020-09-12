// @flow

import { Alert } from 'react-native';

import { loginError, type TLoginError } from '../../store/actions/login';

const title = "Error al iniciar sesión";

function emptyUsername(): void {
  Alert.alert(
    title,
    'Por favor, ingrese un usuario.',
    [{ text: 'Aceptar' }]
  );
}

function emptyPassword(): void {
  Alert.alert(
    title,
    'Por favor, ingrese un contraseña.',
    [{ text: 'Aceptar' }]
  );
}

function loginFailure(error: TLoginError): void {
  switch (error) {
    case loginError.INCORRECT_LOGIN_DATA:
      incorrectLoginData();
      break;
    case loginError.NETWORK:
      newtworkError();
      break;
    default:
      break;
  };

  function incorrectLoginData(): void {
    Alert.alert(
      title,
      'Usuario y/o contraseña incorrectos.',
      [{ text: 'Aceptar' }]
    );
  };

  function newtworkError(): void {
    Alert.alert(
      title,
      'Se produjo un error de conexión. Por favor, intente más tarde.',
      [{ text: 'Aceptar' }]
    );
  };

}

export default {
  emptyUsername,
  emptyPassword,
  loginFailure
};