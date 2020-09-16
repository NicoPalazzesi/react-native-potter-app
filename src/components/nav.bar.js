// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Style from '../stylesheet';

type Props = {
  title: string
};

function NavBar(props: Props): React$Element<typeof View> {
  const { title } = props;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: Style.goldDarkColor,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: Style.fontSizeBig
  }
});

export default NavBar;