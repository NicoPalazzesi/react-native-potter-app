// @flow

import { Alert } from 'react-native';

const title = "Cerrar sesión";

function confirmLogout( onConfirmLogout: () => void ): void {
  Alert.alert(
    title,
    '¿Está seguro que desea cerrar sesión?',
    [
      { text: 'No' },
      { text: 'Si', onPress: onConfirmLogout }
    ]
  );
}

export default {
  confirmLogout
};