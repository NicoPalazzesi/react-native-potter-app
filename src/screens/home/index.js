import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function Index() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>React Native Potter App</Text>
    </SafeAreaView>
  );
}

export default Index;