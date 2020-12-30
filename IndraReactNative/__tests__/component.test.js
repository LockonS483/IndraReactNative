import 'react-native';
import { render, fireEvent, act } from '@testing-library/react-native';
import React from 'react';
import { TITLE_TEXT, DROPDOWN_BOX, CONFIRM_BUTTON } from '../components/Menu';

import App from '../App';

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Testing items on Menu page', () => {
  test('menu page', async () => {
    const { getByTestId } = render(<App />);
    const title = getByTestId(TITLE_TEXT);
    expect(typeof(title.props.children)).toBe("string");
    expect(getByTestId(DROPDOWN_BOX)).toBeTruthy();
    const button = getByTestId(CONFIRM_BUTTON);
    expect(button).toBeTruthy();
    expect(typeof(button.props.children[0].props.children)).toBe("string");
  });
});

describe('Test clicking on the button takes user to the properties page', () => {
  test('menu page to properties page', async () => {
    const { findByText, getByTestId } = render(<App />);
    const button = getByTestId(CONFIRM_BUTTON);
    fireEvent.press(button);
    const test = findByText('properties');
    expect(test.toBeTruthy);
  });
});
