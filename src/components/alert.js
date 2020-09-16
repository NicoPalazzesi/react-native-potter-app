// @flow

import { Alert } from 'react-native';

function networkError(): void {
  Alert.alert(
    "Error al cargar información",
    'Se produjo un error de conexión. Por favor, intente más tarde.',
    [{ text: 'Aceptar' }]
  );
};

export default {
  networkError
};