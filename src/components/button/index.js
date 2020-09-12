// @flow

import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Style from '../../stylesheet';

type Props = {
  text: string,
  onPress: () => void,
  style?: Object
};

function Button(props: Props){
  const { text, onPress, style } = props;
  
  return(
    <TouchableOpacity 
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 12,
    backgroundColor: Style.blueColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color: Style.whiteColor
  }
});

export default Button;