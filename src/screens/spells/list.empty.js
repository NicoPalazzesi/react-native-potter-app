// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Style from '../../stylesheet';

export const listEmpty = (): React$Element<typeof View> => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Style.goldDarkBgColor,
      marginVertical: 18,
      height: 100,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: Style.brownColor
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No hay hechizos</Text>
    </View>
  );
}