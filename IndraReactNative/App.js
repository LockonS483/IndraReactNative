/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import {
  StyleSheet, Text, View
} from 'react-native';
import List from './List.js'

AppRegistry.registerComponent('main', () => App);

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <List />
    </View>
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

export default App;
