import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Menu from '../components/Menu';


test('test elements in Menu', async() => {
    const { getByTestId, debug} = render(
      <Menu />
    );
    //debug('optional message');
    const title = getByTestId("titleText")
    console.log("title:", title.props)
    expect(title.props.children).toBe("-Indra ABM Models-")
  });
  