import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

function renderApp() {
  return shallow(<App />);
}

describe('App', () => {
  it('renders', () => {
    const app = renderApp();

    expect(app.exists()).toEqual(true);
  });

  it('renders correctly', () => {
    const app = renderApp();

    expect(app).toMatchSnapshot();
  });
});
