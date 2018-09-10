/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import MenuItem, { componentTheme } from '../MenuItem';
import examples from '../../../website/app/demos/Menu/examples/MenuItem';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowMenuItem(props = {}) {
  const menuItemProps = {
    children: 'Item 1',
    onClick: jest.fn(),
    ...props
  };

  return shallow(<MenuItem {...menuItemProps} />);
}

function mountMenuItem(props = {}) {
  const menuItemProps = {
    children: 'Item 1',
    onClick: jest.fn(),
    ...props
  };

  return mountInThemeProvider(<MenuItem {...menuItemProps} />);
}

describe('MenuItem', () => {
  testDemoExamples(examples);

  describe('renders', () => {
    it('root', () => {
      const menuItem = shallowMenuItem();

      expect(menuItem.exists()).toEqual(true);
    });
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <MenuItem>test</MenuItem>,
      getProcessedComponentThemeKeys(componentTheme, {
        excludeKeys: ['MenuItem_backgroundColor_selectedHover']
      })
    );
  });

  describe('click', () => {
    let menuItem;

    beforeEach(() => {
      [, menuItem] = mountMenuItem();
    });

    it('calls onClick', () => {
      menuItem.simulate('click');

      expect(menuItem.props().onClick).toHaveBeenCalled();
    });

    it('calls onClick when pressing enter', () => {
      menuItem.simulate('keydown', { key: 'Enter' });
      expect(menuItem.props().onClick).toHaveBeenCalled();
    });

    it('calls onClick when pressing space', () => {
      menuItem.simulate('keydown', { key: ' ' });
      expect(menuItem.props().onClick).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    let menuItem;

    beforeEach(() => {
      [, menuItem] = mountMenuItem({ disabled: true });
    });

    it('does not call onClick', () => {
      menuItem.simulate('click');

      expect(menuItem.props().onClick).not.toHaveBeenCalled();
    });
  });

  describe('render prop', () => {
    it('calls render prop with expected arguments', () => {
      const render = jest.fn(() => <div />);
      mountMenuItem({ render });

      expect(render.mock.calls[0]).toMatchSnapshot();
    });
  });
});
