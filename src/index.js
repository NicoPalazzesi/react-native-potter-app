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
import Houses from './screens/houses';
import House from './screens/house';
import Spells from './screens/spells';
import Spell from './screens/spell';

export type TScreens = "Login" | "Home" | "Houses" | "House" | "Spells" | "Spell";

function App() {

  const ScreensStack = createStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <ScreensStack.Navigator headerMode="none">
            <ScreensStack.Screen name="Login" component={Login} />
            <ScreensStack.Screen name="Home" component={Home} />
            <ScreensStack.Screen name="Houses" component={Houses} />
            <ScreensStack.Screen name="House" component={House} />
            <ScreensStack.Screen name="Spells" component={Spells} />
            <ScreensStack.Screen name="Spell" component={Spell} />
          </ScreensStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;