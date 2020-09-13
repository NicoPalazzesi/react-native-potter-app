// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../../components/button';
import Navigation from '../../navigation';
import Style from '../../stylesheet';
import { houseId, type THouseId } from '../../api/houses';

function Options(): React$Element<typeof View> {
  
  function goToHouse(houseId: THouseId): void {
    Navigation.push('House', { houseId });
  }

  return (
    <View>
      <Button
        text="GRYFFINDOR"
        textColor={Style.gryffindorYellowColor}
        backgroundColor={Style.gryffindorRedColor}
        onPress={() => goToHouse(houseId.GRYFFINDOR)} 
        style={styles.button} />
      <Button
        text="RAVENCLAW"
        textColor={Style.ravenclawYellowColor}
        backgroundColor={Style.ravenclawBlueColor}
        onPress={() => goToHouse(houseId.RAVENCLAW)}
        style={styles.button} />
      <Button
        text="SLYTHERIN"
        textColor={Style.slytherinGrayColor}
        backgroundColor={Style.slytherinGreenColor}
        onPress={() => goToHouse(houseId.SLYTHERIN)}
        style={styles.button} />
      <Button
        text="HUFFLEPUFF"
        textColor={Style.hafflepuffBlackColor}
        backgroundColor={Style.hafflepuffYellowColor}
        onPress={() => goToHouse(houseId.HUFFLEPUFF)}
        style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 5
  }
});

export default Options;