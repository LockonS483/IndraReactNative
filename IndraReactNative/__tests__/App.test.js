/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Menu from '../components/Menu';
import renderer from 'react-test-renderer';

jest.useFakeTimers()
it('renders app correctly', async() => {
  renderer.create(<App />);
});
/*
it('Renders title and list across the screen', () => {
  renderer.create(<Menu />);
});
*/


