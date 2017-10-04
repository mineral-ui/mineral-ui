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
import Dropdown, { DropdownContent, DropdownTrigger } from '../../Dropdown';
import { MenuItem } from '../../Menu';
import examples from '../../website/app/demos/Dropdown/examples';
import testDemoExamples from '../../../utils/testDemoExamples';

const data = [
  {
    items: [
      {
        text: 'item 1',
        onClick: jest.fn()
      },
      {
        text: 'item 2',
        onClick: jest.fn()
      }
    ]
  }
];

function shallowDropdown(props = {}) {
  const dropdownProps = {
    children: <button>trigger</button>,
    content: 'content',
    data,
    ...props
  };

  return shallow(<Dropdown {...dropdownProps} />);
}

function mountDropdown(props = {}) {
  const dropdownProps = {
    children: <button>trigger</button>,
    content: 'content',
    data,
    ...props
  };

  return mountInThemeProvider(<Dropdown {...dropdownProps} />);
}

describe('Dropdown', () => {
  describe('renders', () => {
    it('root', () => {
      const dropdown = shallowDropdown();

      expect(dropdown.exists()).toEqual(true);
    });
  });

  describe('opens', () => {
    let dropdown, themeProvider, trigger;

    beforeEach(() => {
      [themeProvider, dropdown] = mountDropdown({ onOpen: jest.fn() });
      trigger = dropdown.find(DropdownTrigger);
    });

    it('when down arrow is pressed', () => {
      trigger.simulate('keydown', { key: 'ArrowDown' });
      const content = themeProvider.find(DropdownContent);

      expect(content.exists()).toEqual(true);
    });

    it('when up arrow is pressed', () => {
      trigger.simulate('keydown', { key: 'ArrowUp' });
      const content = themeProvider.find(DropdownContent);

      expect(content.exists()).toEqual(true);
    });

    xit('when enter is pressed', () => {
      trigger.simulate('keydown', { key: 'Enter' });
      const content = themeProvider.find(DropdownContent);

      expect(content.exists()).toEqual(true);
    });

    xit('when space is pressed', () => {
      trigger.simulate('keydown', { key: ' ' });
      const content = themeProvider.find(DropdownContent);

      expect(content.exists()).toEqual(true);
    });

    it('calls onOpen', () => {
      trigger.simulate('click');

      expect(dropdown.props().onOpen).toHaveBeenCalled();
    });
  });

  describe('closes', () => {
    let dropdown, trigger;

    beforeEach(() => {
      [, dropdown] = mountDropdown({
        onClose: jest.fn(),
        defaultIsOpen: true
      });
      trigger = dropdown.find(DropdownTrigger);
    });

    it('calls onClose', () => {
      trigger.simulate('click');

      expect(dropdown.props().onClose).toHaveBeenCalled();
    });
  });

  describe('item highlighting', () => {
    let dropdown, themeProvider, trigger;

    beforeEach(() => {
      [themeProvider, dropdown] = mountDropdown();
      trigger = dropdown.find(DropdownTrigger);
    });

    describe('when down arrow is pressed', () => {
      it('highlights first item upon opening', () => {
        trigger.simulate('keydown', { key: 'ArrowDown' });

        const menuItem = themeProvider.find(MenuItem).first();

        expect(menuItem.props().isHighlighted).toEqual(true);
      });

      it('highlights next item', () => {
        trigger.simulate('keydown', { key: 'ArrowDown' });
        trigger.simulate('keydown', { key: 'ArrowDown' });
        const menuItem = themeProvider.find(MenuItem).last();

        expect(menuItem.props().isHighlighted).toEqual(true);
      });

      it('highlights first item when end of items is reached', () => {
        trigger.simulate('keydown', { key: 'ArrowDown' });
        trigger.simulate('keydown', { key: 'ArrowDown' });
        trigger.simulate('keydown', { key: 'ArrowDown' });
        const menuItem = themeProvider.find(MenuItem).first();

        expect(menuItem.props().isHighlighted).toEqual(true);
      });
    });

    describe('when up arrow is pressed', () => {
      it('highlights last item upon opening', () => {
        trigger.simulate('keydown', { key: 'ArrowUp' });
        const menuItem = themeProvider.find(MenuItem).last();

        expect(menuItem.props().isHighlighted).toEqual(true);
      });

      it('highlights previous item', () => {
        trigger.simulate('keydown', { key: 'ArrowUp' });
        trigger.simulate('keydown', { key: 'ArrowUp' });
        const menuItem = themeProvider.find(MenuItem).first();

        expect(menuItem.props().isHighlighted).toEqual(true);
      });

      it('highlights last item when start of items is reached', () => {
        trigger.simulate('keydown', { key: 'ArrowUp' });
        trigger.simulate('keydown', { key: 'ArrowUp' });
        trigger.simulate('keydown', { key: 'ArrowUp' });
        const menuItem = themeProvider.find(MenuItem).last();

        expect(menuItem.props().isHighlighted).toEqual(true);
      });
    });
  });

  describe('item selection', () => {
    let dropdown, item;

    const itemSelectionAssertions = ({ simulateArgs }) => {
      it('calls item onClick', () => {
        item.simulate(...simulateArgs);
        const { onClick } = data[0].items[0];

        expect(onClick).toHaveBeenCalled();
      });

      it('closes dropdown', () => {
        item.simulate(...simulateArgs);
        expect(dropdown.instance().state.isOpen).toBe(false);
      });

      describe('when restoreFocus = true', () => {
        it('restores focus to the trigger', () => {
          item.simulate(...simulateArgs);
          const trigger = dropdown.find(DropdownTrigger);

          expect(
            trigger.getDOMNode().firstChild === document.activeElement
          ).toEqual(true);
        });
      });

      describe('when restoreFocus = false', () => {
        it('does not restore focus to the trigger', () => {
          [, dropdown] = mountDropdown({
            defaultIsOpen: true,
            restoreFocus: false
          });
          item = dropdown.find(MenuItem).first();
          item.simulate(...simulateArgs);
          const trigger = dropdown.find(DropdownTrigger);

          expect(
            trigger.getDOMNode().firstChild === document.activeElement
          ).toEqual(false);
        });
      });
    };

    beforeEach(() => {
      [, dropdown] = mountDropdown({
        defaultIsOpen: true
      });
      item = dropdown.find(MenuItem).first();
      data[0].items[0].onClick.mockReset();
    });

    describe('when mouse click', () => {
      itemSelectionAssertions({ simulateArgs: ['click'] });
    });

    describe('when press enter key', () => {
      itemSelectionAssertions({ simulateArgs: ['keydown', { key: 'Enter' }] });
    });

    describe('when press space key', () => {
      itemSelectionAssertions({ simulateArgs: ['keydown', { key: 'Enter' }] });
    });
  });

  testDemoExamples(examples);
});
