// @flow

import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { houseId as houseIdEnum, type THouseId } from '../../api/houses';
import stylesheet from '../../stylesheet';

const GRYFFINDOR_IMAGE = require('../../assets/gryffindor-logo.png');
const RAVENCLAW_IMAGE = require('../../assets/ravenclaw-logo.png');
const SLYTHERIN_IMAGE = require('../../assets/slytherin-logo.png');
const HUFFLEPUFF_IMAGE = require('../../assets/hufflepuff-logo.png');

type Props = {
  houseId: THouseId
};

function Logo(props: Props): React$Element<typeof Image>{
  const { houseId } = props;
  let source;

  switch(houseId){
    case houseIdEnum.GRYFFINDOR:
      source = GRYFFINDOR_IMAGE
      break;
    case houseIdEnum.RAVENCLAW:
      source = RAVENCLAW_IMAGE
      break;
    case houseIdEnum.SLYTHERIN:
      source = SLYTHERIN_IMAGE
      break;
    case houseIdEnum.HUFFLEPUFF:
      source = HUFFLEPUFF_IMAGE
      break;
  }

  return (
    <Image source={source} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
    marginVertical: 18
  }
});

export default Logo;