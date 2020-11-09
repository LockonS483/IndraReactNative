/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import List from '../components/FetchAPI';
import renderer from 'react-test-renderer';
import ModelCard from '../components/ModelCard';

jest.useFakeTimers()
it('renders correctly', () => {
  renderer.create(<App />);
});

it('Renders title and list across the screen', () => {
  const modelList = renderer.create(<Menu />).toJSON();
  expect(modelList).toMatchSnapshot();
});
