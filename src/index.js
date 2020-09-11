// @flow

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';

function App() {
  const ScreensStack = createStackNavigator();

  return (
    <NavigationContainer>
      <ScreensStack.Navigator headerMode="none">
        <ScreensStack.Screen name="Home" component={Home} />
      </ScreensStack.Navigator>
    </NavigationContainer>
  );
}

export default App;