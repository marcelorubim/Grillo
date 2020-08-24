/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './app/screens/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import SingUpScreen from './app/screens/SingUpScreen';
import RecoverPasswordScreen from './app/screens/RecoverPasswordScreen';
import {TranslationContext} from './app/context/TranslationContext';
import i18n from 'i18n-js';
import TabNavigator from './app/routes/TabNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TranslationContext.Provider
        value={{
          translation: (key: string) => i18n.t(key),
        }}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RegisterAccount"
            component={SingUpScreen}
            options={{headerTitle: ''}}
          />
          <Stack.Screen
            name="RecoverPassword"
            component={RecoverPasswordScreen}
            options={{headerTitle: ''}}
          />
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </TranslationContext.Provider>
    </NavigationContainer>
  );
};
export default App;
