// @flow

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './store';

/** screens */
import Login from './screens/login';
import Home from './screens/home';

export type TScreens = "Login" | "Home";

function App() {

  const ScreensStack = createStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <ScreensStack.Navigator headerMode="none">
            <ScreensStack.Screen name="Login" component={Login} />
            <ScreensStack.Screen name="Home" component={Home} />
          </ScreensStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;