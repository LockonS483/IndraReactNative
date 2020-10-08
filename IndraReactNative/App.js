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

AppRegistry.registerComponent('main', () => App);

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>-Hello Indra-</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
