/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import Menu from '../Menu';
import examples from '../../../website/app/demos/Menu/Menu/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

import type { MenuItems } from '../types';

const data: MenuItems = [{ text: 'Item 1' }, { text: 'Item 2' }];

function shallowMenu(props = {}) {
  const menuProps = {
    children: <div>children</div>,
    ...props
  };

  return shallow(<Menu {...menuProps} />);
}

function mountMenu(props = {}) {
  const menuProps = {
    data,
    ...props
  };

  return mountInThemeProvider(<Menu {...menuProps} />);
}

describe('Menu', () => {
  testDemoExamples(examples);

  let menu;

  describe('renders', () => {
    it('renders', () => {
      menu = shallowMenu();

      expect(menu.exists()).toEqual(true);
    });
  });

  describe('item prop', () => {
    it('calls item prop with expected arguments', () => {
      const item = jest.fn(() => <div />);

      mountMenu({ item });

      expect(item.mock.calls[0]).toMatchSnapshot();
    });
  });
});
