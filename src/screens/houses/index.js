// @flow

import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import Style from '../../stylesheet';
import NavBar from '../../components/nav.bar';
import Navigation from '../../navigation';
import Options from './options';

function Index(): React$Element<typeof SafeAreaView> {

  return (
    <SafeAreaView style={styles.container}>
      <NavBar title="Casas de Hogwarts" />
      <View style={[Style.classes.contentContainer, styles.contentContainer]}>
        <Options />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 18,
    marginVertical: 5
  }
});

export default Index;