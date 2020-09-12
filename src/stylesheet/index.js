// @flow

import { StyleSheet } from 'react-native';

const whiteColor = '#fff';
const grayColor = '#939393';
const blackColor = '#000';
const redColor = '#e46f66';
const greenColor = '#3cc7a4';
const blueColor = '#002366';
const yellowColor = '#ffcc00';
const goldDarkColor = '#e6c00e';
const brownColor = '#6e573d';
const loadingBgColor = 'rgba(0,0,0,0.5)';
const fontSizeTiny = 9;
const fontSizeSmall = 11;
const fontSize = 14;
const fontSizeBig = 18;
const fontSizeHuge = 22;

const classes = StyleSheet.create({
  input:{
    height: 50,
    marginBottom: 5,
  },
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 18
  }
});

export default {
  whiteColor,
  grayColor,
  blackColor,
  redColor,
  greenColor,
  blueColor,
  yellowColor,
  goldDarkColor,
  brownColor,
  loadingBgColor,
  fontSizeTiny,
  fontSizeSmall,
  fontSize,
  fontSizeBig,
  fontSizeHuge,
  classes
};