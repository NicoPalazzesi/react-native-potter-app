// @flow

import { Alert } from 'react-native';

import DefaultAlert from '../../components/alert';
import { spellsError, type TSpellsError } from '../../store/actions/spells';

const title = "Error al cargar información";

function spellsFailure(error: TSpellsError): void {
  switch (error) {
    case spellsError.BAD_SPELLS_RESPONSE:
      badSpellsResponse();
      break;
    case spellsError.NETWORK:
      DefaultAlert.networkError();
      break;
    default:
      break;
  };

  function badSpellsResponse(): void {
    Alert.alert(
      title,
      'Se ha producido un error interno. Por favor, intente más tarde.',
      [{ text: 'Aceptar' }]
    );
  };
}

export default {
  spellsFailure
};