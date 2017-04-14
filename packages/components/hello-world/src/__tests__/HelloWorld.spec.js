import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../HelloWorld';

function renderHelloWorld() {
  return shallow(<HelloWorld />);
}

describe('HelloWorld', () => {
  it('renders', () => {
    const helloWorld = renderHelloWorld();

    expect(helloWorld.exists()).toEqual(true);
  });

  it('renders correctly', () => {
    const helloWorld = renderHelloWorld();

    expect(helloWorld).toMatchSnapshot();
  });
});
