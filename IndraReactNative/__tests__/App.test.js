/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import { act } from '@testing-library/react-native';

jest.useFakeTimers()
it('renders app correctly', async() => {
  act( () => { renderer.create(<App />); });
});


