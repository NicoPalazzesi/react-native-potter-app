// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../../components/button';
import Navigation from '../../navigation';
import Style from '../../stylesheet';

function Options(): React$Element<typeof View> {
  
  const goToHouses = (): void => {
    Navigation.push('Houses');
  }

  const goToSpells = (): void => {
    Navigation.push('Spells');
  }

  return (
    <View>
      <Button
        text="Casas de Hogwarts"
        textColor={Style.brownColor}
        onPress={goToHouses} 
        style={styles.button} />
      <Button
        text="Hechizos"
        textColor={Style.brownColor}
        onPress={goToSpells}
        style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10
  }
});

export default Options;