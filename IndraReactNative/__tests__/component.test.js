import 'react-native';
import { Text, View, TouchableOpacity } from 'react-native'
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Menu, { titleText, dropdownBox, confirmButton } from '../components/Menu';


jest.useFakeTimers()
test('test elements in Menu', async() => {
    const { getByTestId } = render(
      <Menu />
    );
    //debug('optional message'); //Debug output all elements after render the Menu component
    
    const title = getByTestId(titleText)
    expect(title.props.children).toBe("-Indra ABM Models-")

    expect(getByTestId(dropdownBox)).toBeTruthy()

    const button = getByTestId(confirmButton)
    expect(button).toBeTruthy()
    expect(typeof(button.props.children[0].props.children)).toBe("string")
    
  });

  
  test('test elements in Menu', async() => {
    const onPressMock = await jest.fn();
    const { getByTestId } = await render(
    //refactor this code in Menu.js?
    
    <TouchableOpacity
        onPress = {await onPressMock}
        testID = {confirmButton}>
        <Text>
            Use this model
        </Text>
    </TouchableOpacity>
    
    )
    await fireEvent.press(getByTestId("confirmButton"))
    await expect(onPressMock).toHaveBeenCalled();
  });
