// @flow

import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';

import Navigation from '../../navigation';
import Form from './form';

const IMAGE = require('../../assets/hogwarts-logo.png');

function Index(): React$Element<typeof SafeAreaView> {

  Navigation.init();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={IMAGE} style={styles.image} />
        <KeyboardAvoidingView behavior="padding">
          <Form />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 18
  },
  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
    marginVertical: 50
  }
});

export default Index;