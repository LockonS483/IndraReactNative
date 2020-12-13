import React from 'react';
import renderer from 'react-test-renderer';
import Menu from '../components/Menu';
import App from '../App'

/* use snapshot test after development is stable
jest.useFakeTimers();
test('Changes in Menu', () => {
    const menu = renderer.create(<Menu />).toJSON();
    expect(menu).toMatchSnapshot();
});

test('Changes in App', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
});
*/