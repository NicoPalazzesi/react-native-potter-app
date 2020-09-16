// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Style from '../../stylesheet';

import { type THouseInfo } from '../../api/houses';

type Props = {
  values: $PropertyType<THouseInfo,'values'>
};

function InfoValues(props: Props): React$Element<typeof View>{
  const { values } = props;

  const renderValue = (value: string): React$Element<typeof Text> => {
    return (
      <Text key={value} style={styles.value}>{value}</Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valores</Text>
      {values.map(renderValue)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4
  },
  title: {
    color: Style.grayColor
  },
  value: {
    fontWeight: 'bold'
  }
});

export default InfoValues;