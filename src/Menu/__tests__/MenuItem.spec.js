/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../utils/enzymeUtils';
import MenuItem from '../MenuItem';
import examples from '../../website/app/demos/Menu/examples/menu-item';
import testDemoExamples from '../../../utils/testDemoExamples';

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
  describe('renders', () => {
    it('root', () => {
      const menuItem = shallowMenuItem();

      expect(menuItem.exists()).toEqual(true);
    });
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

  testDemoExamples(examples);
});
