/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { NavItem } from '../index';
import examples from '../../../website/app/demos/Navigation/NavItem/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowNavItem(props = {}) {
  return shallow(<NavItem {...props} />);
}

describe('NavItem', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const navItem = shallowNavItem();

    expect(navItem.exists()).toEqual(true);
  });
});
