/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import Dropdown, { DropdownContent, DropdownTrigger } from '../../Dropdown';
import { MenuItem } from '../../Menu';
import examples from '../../../website/app/demos/Dropdown/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

import type { Items } from '../../Menu/Menu';

const data: Items = [
  {
    text: 'item 1',
    onClick: jest.fn()
  },
  {
    text: 'item 2',
    onClick: jest.fn()
  }
];

const shallowDropdown = (props = {}) => {
  const dropdownProps = {
    children: <button>trigger</button>,
    data,
    ...props
  };

  return shallow(<Dropdown {...dropdownProps} />);
};

const mountDropdown = (props = {}) => {
  const dropdownProps = {
    children: <button>trigger</button>,
    data,
    ...props
  };

  return mountInThemeProvider(<Dropdown {...dropdownProps} />);
};

const assertTriggerHasFocus = (trigger) => {
  expect(
    trigger.find('button').getDOMNode() === document.activeElement
  ).toEqual(true);
};

const assertContentExists = (themeProvider) => {
  expect(themeProvider.find(DropdownContent).exists()).toEqual(true);
};

const assertItemAtIndexIsHighlighted = (themeProvider, index) => {
  expect(
    themeProvider
      .find(MenuItem)
      .at(index)
      .props().isHighlighted
  ).toEqual(true);
};

const assertNoItemsHighlighted = (themeProvider) => {
  themeProvider.find(MenuItem).forEach((menuItem) => {
    expect(menuItem.props().isHighlighted).toEqual(false);
  });
};

describe('Dropdown', () => {
  testDemoExamples(examples);

  describe('renders', () => {
    it('root', () => {
      const dropdown = shallowDropdown();

      expect(dropdown.exists()).toEqual(true);
    });
  });

  describe('when closed', () => {
    describe('opens', () => {
      let button, dropdown, themeProvider, trigger;

      beforeEach(() => {
        [themeProvider, dropdown] = mountDropdown({ onOpen: jest.fn() });
        trigger = dropdown.find(DropdownTrigger);
        button = trigger.find('button');
      });

      it('when trigger is clicked', () => {
        button.simulate('click');

        assertContentExists(themeProvider);
        assertTriggerHasFocus(trigger);
      });

      it('when down arrow is pressed', () => {
        button.simulate('keydown', { key: 'ArrowDown' });

        assertContentExists(themeProvider);
      });

      it('when up arrow is pressed', () => {
        button.simulate('keydown', { key: 'ArrowUp' });

        assertContentExists(themeProvider);
      });

      it('when Space is pressed', () => {
        button.simulate('keydown', { key: ' ' });

        assertContentExists(themeProvider);
      });

      it('when Enter is pressed', () => {
        button.simulate('keydown', { key: 'Enter' });

        assertContentExists(themeProvider);
      });

      it('calls onOpen', () => {
        button.simulate('click');

        expect(dropdown.props().onOpen).toHaveBeenCalled();
      });
    });

    describe('item highlighting', () => {
      let button, dropdown, themeProvider, trigger;

      beforeEach(() => {
        [themeProvider, dropdown] = mountDropdown();
        trigger = dropdown.find(DropdownTrigger);
        button = trigger.find('button');
      });

      describe('when Space is pressed', () => {
        it('highlight no items', () => {
          button.simulate('keydown', { key: ' ' });

          assertNoItemsHighlighted(themeProvider);
        });
      });

      describe('when Enter is pressed', () => {
        it('highlight no items', () => {
          button.simulate('keydown', { key: 'Enter' });

          assertNoItemsHighlighted(themeProvider);
        });
      });

      describe('when trigger is clicked', () => {
        it('highlight no items', () => {
          button.simulate('click');

          assertNoItemsHighlighted(themeProvider);
        });
      });

      describe('when down arrow is pressed', () => {
        it('highlights first item', () => {
          button.simulate('keydown', { key: 'ArrowDown' });

          assertItemAtIndexIsHighlighted(themeProvider, 0);
        });
      });

      describe('when up arrow is pressed', () => {
        it('highlights last item', () => {
          button.simulate('keydown', { key: 'ArrowUp' });

          assertItemAtIndexIsHighlighted(themeProvider, 1);
        });
      });
    });
  });

  describe('when open', () => {
    let button, dropdown, themeProvider, trigger;

    beforeEach(() => {
      [themeProvider, dropdown] = mountDropdown({
        onClose: jest.fn(),
        defaultIsOpen: true
      });
      trigger = dropdown.find(DropdownTrigger);
      button = trigger.find('button');
    });

    describe('closes', () => {
      it('calls onClose', () => {
        button.simulate('click');
        expect(dropdown.props().onClose).toHaveBeenCalledTimes(1);
      });

      it('when clicked', () => {
        button.simulate('click');
        expect(dropdown.props().onClose).toHaveBeenCalledTimes(1);
      });

      it('when Space is pressed', () => {
        button.simulate('keydown', { key: ' ' });
        expect(dropdown.props().onClose).toHaveBeenCalledTimes(1);
      });

      it('when Enter is pressed', () => {
        button.simulate('keydown', { key: 'Enter' });
        expect(dropdown.props().onClose).toHaveBeenCalledTimes(1);
      });
    });

    describe('item navigation', () => {
      describe('when down arrow is pressed', () => {
        it('highlights next item', () => {
          button.simulate('keydown', { key: 'ArrowDown' });
          button.simulate('keydown', { key: 'ArrowDown' });

          assertItemAtIndexIsHighlighted(themeProvider, 1);
        });

        it('highlights first item when end of items is reached', () => {
          button.simulate('keydown', { key: 'ArrowDown' });
          button.simulate('keydown', { key: 'ArrowDown' });
          button.simulate('keydown', { key: 'ArrowDown' });

          assertItemAtIndexIsHighlighted(themeProvider, 0);
        });
      });

      describe('when up arrow is pressed', () => {
        it('highlights previous item', () => {
          button.simulate('keydown', { key: 'ArrowUp' });
          button.simulate('keydown', { key: 'ArrowUp' });

          assertItemAtIndexIsHighlighted(themeProvider, 0);
        });

        it('highlights last item when start of items is reached', () => {
          button.simulate('keydown', { key: 'ArrowUp' });
          button.simulate('keydown', { key: 'ArrowUp' });
          button.simulate('keydown', { key: 'ArrowUp' });

          assertItemAtIndexIsHighlighted(themeProvider, 1);
        });
      });

      describe('when Home is pressed', () => {
        it('highlights first item', () => {
          button.simulate('keydown', { key: 'Home' });

          assertItemAtIndexIsHighlighted(themeProvider, 0);
        });
      });

      describe('when End is pressed', () => {
        it('highlights last item', () => {
          button.simulate('keydown', { key: 'End' });

          assertItemAtIndexIsHighlighted(themeProvider, 1);
        });
      });

      describe('when a letter is pressed', () => {
        it('highlights matching item', () => {
          button.simulate('keydown', { key: 'i' });

          assertItemAtIndexIsHighlighted(themeProvider, 0);
        });
      });
    });

    describe('item selection', () => {
      let dropdown, item;

      const itemSelectionAssertions = ({ simulateArgs }) => {
        it('calls item onClick', () => {
          item.simulate(...simulateArgs);
          const { onClick } = data[0];

          expect(onClick).toHaveBeenCalled();
        });

        it('closes dropdown', () => {
          item.simulate(...simulateArgs);
          expect(dropdown.instance().state.isOpen).toBe(false);
        });

        it('restores focus to the trigger', () => {
          item.simulate(...simulateArgs);
          const trigger = dropdown.find(DropdownTrigger);

          assertTriggerHasFocus(trigger);
        });
      };

      beforeEach(() => {
        [, dropdown] = mountDropdown({
          defaultIsOpen: true
        });
        item = dropdown.find(MenuItem).first();
        data[0].onClick && data[0].onClick.mockReset();
      });

      describe('when mouse click', () => {
        itemSelectionAssertions({ simulateArgs: ['click'] });
      });

      describe('when press enter key', () => {
        itemSelectionAssertions({
          simulateArgs: ['keydown', { key: 'Enter' }]
        });
      });

      describe('when press space key', () => {
        itemSelectionAssertions({
          simulateArgs: ['keydown', { key: ' ' }]
        });
      });
    });
  });
});
