import React from 'react';
import { shallow } from 'enzyme';
import Archetype from '../Archetype';

function renderArchetype() {
  return shallow(<Archetype />);
}

describe('Archetype', () => {
  it('renders', () => {
    const archetype = renderArchetype();

    expect(archetype.exists()).toEqual(true);
  });

  it('renders correctly', () => {
    const archetype = renderArchetype();

    expect(archetype).toMatchSnapshot();
  });
});
