import React from 'react';
import { shallow } from 'enzyme';
import Hello from '../Hello';

function renderHello() {
  return shallow(<Hello />);
}

describe('Hello', () => {
  it('renders', () => {
    const hello = renderHello();

    expect(hello.exists()).toEqual(true);
  });

  it('renders correctly', () => {
    const hello = renderHello();

    expect(hello).toMatchSnapshot();
  });
});
