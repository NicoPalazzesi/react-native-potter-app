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
const gryffindorRedColor = '#7f0909';
const gryffindorYellowColor = '#ffc500';
const slytherinGreenColor = '#0d6217';
const slytherinGrayColor = '#aaaaaa';
const ravenclawBlueColor = '#000a90';
const ravenclawYellowColor = '#946b2d';
const hafflepuffBlackColor = '#000000';
const hafflepuffYellowColor = '#eee117';
const loadingBgColor = 'rgba(0,0,0,0.5)';
const goldDarkBgColor = 'rgba(255,215,0, 0.5)';
const whiteBgColor = "#e8e8e8";
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
    flex: 1,
    backgroundColor: whiteBgColor
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 18
  },
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: grayColor
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
  gryffindorRedColor,
  gryffindorYellowColor,
  slytherinGreenColor,
  slytherinGrayColor,
  ravenclawBlueColor,
  ravenclawYellowColor,
  hafflepuffBlackColor,
  hafflepuffYellowColor,
  loadingBgColor,
  goldDarkBgColor,
  whiteBgColor,
  fontSizeTiny,
  fontSizeSmall,
  fontSize,
  fontSizeBig,
  fontSizeHuge,
  classes
};