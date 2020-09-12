// @flow

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import { store } from './store';

/** screens */
import Login from './screens/login';
import Home from './screens/home';

function App() {

  const ScreensStack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreensStack.Navigator headerMode="none">
          <ScreensStack.Screen name="Login" component={Login} />
          <ScreensStack.Screen name="Home" component={Home} />
        </ScreensStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;