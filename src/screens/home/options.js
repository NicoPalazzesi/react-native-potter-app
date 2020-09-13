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

  return (
    <View>
      <Button
        text="Casas de Hogwarts"
        textColor={Style.brownColor}
        onPress={goToHouses} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow'
  }
});

export default Options;