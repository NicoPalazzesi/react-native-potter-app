// @flow

import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function Index(): React$Element<typeof SafeAreaView> {

  return (
    <SafeAreaView style={styles.container}>
      <Text>React Native Potter App</Text>
    </SafeAreaView>
  );
}

export default Index;