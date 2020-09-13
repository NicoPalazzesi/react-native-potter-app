// @flow

import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import Style from '../stylesheet';

function Loading(): React$Element<typeof ActivityIndicator> {
  const styles = StyleSheet.create({
    loadIndicator:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: Style.loadingBgColor
    }
  });
  
  return (
    <ActivityIndicator 
    style={styles.loadIndicator} 
    color={Style.goldDarkColor}
    size="large"/>
  );
}

export default Loading;