/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../Menu';
import examples from '../../../website/app/demos/Menu/examples/Menu';
import testDemoExamples from '../../../../utils/testDemoExamples';

function renderMenu(props, children) {
  return shallow(<Menu {...props}>{children}</Menu>);
}

describe('Menu', () => {
  testDemoExamples(examples);

  let menu;
  it('renders', () => {
    menu = renderMenu({}, 'Children');

    expect(menu.exists()).toEqual(true);
  });
});
