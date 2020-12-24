/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet, Text, View
} from 'react-native';
import Menu from './components/Menu.js';
import Properties from './components/Properties.js'
import ModelView from './components/ModelView.js'

AppRegistry.registerComponent('main', () => App);
AppRegistry.registerComponent('properties', () => Properties);
AppRegistry.registerComponent('modelview', () => ModelView);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
        <Stack.Screen name="Properties" component={Properties} />
        <Stack.Screen name="ModelView" component={ModelView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App