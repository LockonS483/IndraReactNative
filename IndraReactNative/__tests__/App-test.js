/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import List from '../components/List';
import renderer from 'react-test-renderer';

jest.useFakeTimers()
it('renders correctly', () => {
  renderer.create(<App />);
});

it('Renders title and list across the screen', () => {
  const modelList = renderer.create(<List />).toJSON();
  expect(modelList).toMatchSnapshot();
});
