// @flow

import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Style from '../../stylesheet';

type Props = {
  text: string,
  textColor?: string,
  onPress: () => void,
  style?: Object,
  backgroundColor?: string
};

function Button(props: Props){
  const { text, textColor, onPress, style, backgroundColor } = props;
  
  const styles = StyleSheet.create({
    container:{
      paddingVertical: 12,
      backgroundColor: backgroundColor ? backgroundColor : Style.goldDarkColor,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: Style.blackColor,
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 5
    },
    text:{
      color: textColor ? textColor : Style.whiteColor
    }
  });

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

export default Button;