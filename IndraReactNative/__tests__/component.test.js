import 'react-native';
import { render, fireEvent, act } from '@testing-library/react-native';
import React from 'react';
import Menu, { titleText, dropdownBox, confirmButton } from '../components/Menu';

import App from '../App';

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Testing items on Menu page', () => {
  test('menu page', async () => {
    const { getByTestId } = render(<App />);
    const title = getByTestId(titleText);
    expect(typeof(title.props.children)).toBe("string");
    expect(getByTestId(dropdownBox)).toBeTruthy();
    const button = getByTestId(confirmButton);
    expect(button).toBeTruthy();
    expect(typeof(button.props.children[0].props.children)).toBe("string");
  });
});

describe('Test clicking on the button takes user to the properties page', () => {
  test('menu page to properties page', async () => {
    const { findByText, getByTestId } = render(<App />);
    const button = getByTestId(confirmButton);
    fireEvent.press(button);
    const test = findByText('properties');
    expect(test.toBeTruthy);
  });
});
