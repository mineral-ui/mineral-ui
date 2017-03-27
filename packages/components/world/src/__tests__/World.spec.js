import React from 'react';
import { shallow } from 'enzyme';
import World from '../World';

function renderWorld() {
  return shallow(<World />);
}

describe('World', () => {
  it('renders', () => {
    const world = renderWorld();

    expect(world.exists()).toEqual(true);
  });

  it('renders correctly', () => {
    const world = renderWorld();

    expect(world).toMatchSnapshot();
  });
});
