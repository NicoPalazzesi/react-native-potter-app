// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Style from '../stylesheet';

type Props = {
  title: string,
  value: string,
  valueSize?: number,
  centerText?: boolean
};

function InfoLine(props: Props): React$Element<typeof View>{
  const { title, centerText, value, valueSize } = props;

  const styles = StyleSheet.create({
    container: {
      marginVertical: 4,
      alignItems: centerText ? 'center' : undefined
    },
    title: {
      color: Style.grayColor
    },
    value: {
      fontWeight: 'bold',
      fontSize: valueSize ? valueSize : undefined
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export default InfoLine;