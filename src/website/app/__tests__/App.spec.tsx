/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import demos from '../demos';

function renderApp() {
  return shallow(<App demos={demos} />);
}

describe('App', () => {
  it('renders', () => {
    const app = renderApp();

    expect(app.exists()).toEqual(true);
  });
});
