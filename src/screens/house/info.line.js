// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Style from '../../stylesheet';

type Props = {
  title: string,
  value: string
};

function InfoLine(props: Props): React$Element<typeof View>{
  const { title, value } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4
  },
  title: {
    color: Style.grayColor,
    fontWeight: 'bold'
  }
});

export default InfoLine;