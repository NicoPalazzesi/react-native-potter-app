// @flow

import { Alert } from 'react-native';

import DefaultAlert from '../../components/alert';
import { housesError, type THousesError } from '../../store/actions/houses';

const title = "Error al cargar información";

function housesFailure(error: THousesError): void {
  switch (error) {
    case housesError.INCORRECT_HOUSES_DATA:
      incorrectHousesData();
      break;
    case housesError.NETWORK:
      DefaultAlert.networkError();
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
}

export default {
  housesFailure
};