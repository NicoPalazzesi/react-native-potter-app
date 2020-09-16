// @flow

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Style from '../../stylesheet';

type Props = {
  imageSource: number,
  children: Object,
  style?: Object
}

function Card(props: Props): React$Element<typeof View> {
  const { imageSource, children, style } = props;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.childrenContainer}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Style.whiteColor,
    width: '85%',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: Style.blackColor,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 10
  },
  imageContainer: {
    padding: 10,
    backgroundColor: '#DBD2D2'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  childrenContainer: {
    padding: 10
  }
});

export default Card;