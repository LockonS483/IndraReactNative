import 'react-native';
import { Text, View, TouchableOpacity } from 'react-native'
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Menu from '../components/Menu';


test('test elements in Menu', async() => {
    const { getByTestId } = render(
      <Menu />
    );
    //debug('optional message'); //Debug output all elements after render the Menu component
    const title = getByTestId("titleText")
    expect(title.props.children).toBe("-Indra ABM Models-")

    expect(getByTestId("dropdownBox")).toBeTruthy()

    const button = getByTestId("confirmButton")
    expect(button).toBeTruthy()
    expect(button.props.children[0].props.children).toBe("Use this model")
  });


  test('test elements in Menu', async() => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
    //refactor this code in Menu.js?
    
    <TouchableOpacity
        onPress = {onPressMock}
        testID = {"confirmButton"}>
        <Text>
            Use this model
        </Text>
    </TouchableOpacity>
    
    )
    fireEvent.press(getByTestId("confirmButton"))
    expect(onPressMock).toHaveBeenCalled();
  });
  