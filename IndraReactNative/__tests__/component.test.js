import 'react-native';
import { Text, View, TouchableOpacity } from 'react-native'
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Menu, { titleText, dropdownBox, confirmButton } from '../components/Menu';
import ButtonUseModel from '../components/button';


jest.useFakeTimers()
test('test elements in Menu', async() => {
    const { getByTestId } = render(
      <Menu />
    );
    //debug('optional message'); //Debug output all elements after render the Menu component
    
    const title = getByTestId(titleText)
    expect(typeof(title.props.children)).toBe("string")

    expect(getByTestId(dropdownBox)).toBeTruthy()

    const button = getByTestId(confirmButton)
    expect(button).toBeTruthy()
    expect(typeof(button.props.children[0].props.children)).toBe("string")
    fireEvent.press(getByTestId(confirmButton))
    expect(onPressMock).toHaveBeenCalled();
  });