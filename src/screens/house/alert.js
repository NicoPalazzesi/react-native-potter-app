// @flow

import { Alert } from 'react-native';

import { housesError, type THousesError } from '../../store/actions/houses';

const title = "Error al cargar información";

function housesFailure(error: THousesError): void {
  switch (error) {
    case housesError.INCORRECT_HOUSES_DATA:
      incorrectHousesData();
      break;
    case housesError.NETWORK:
      newtworkError();
      break;
    default:
      break;
  };

  function incorrectHousesData(): void {
    Alert.alert(
      title,
      'Se ha producido un error interno. Por favor, intente más tarde.',
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
  housesFailure
};