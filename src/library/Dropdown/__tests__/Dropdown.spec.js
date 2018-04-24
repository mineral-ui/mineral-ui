/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider, spyOn } from '../../../../utils/enzymeUtils';
import Dropdown, { DropdownContent, DropdownTrigger } from '../../Dropdown';
import PopoverTrigger from '../../Popover/PopoverTrigger';
import { MenuItem } from '../../Menu';
import examples from '../../../website/app/demos/Dropdown/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

import type { Items } from '../../Menu/Menu';

const REGEX_DROPDOWN_ID = /^dropdown-\d+$/;
const REGEX_DROPDOWN_CONTENT_ID = /^dropdown-\d+-content$/;
const REGEX_DROPDOWN_MENU_ID = /^dropdown-\d+-menu$/;
const REGEX_DROPDOWN_ITEM_ID = /^dropdown-\d+-item-\d+$/;

const data: Items = [
  {
    text: 'item 1',
    onClick: jest.fn()
  },
  {
    divider: true
  },
  {
    text: 'item 2',
    onClick: jest.fn()
  }
];

const defaultProps = {
  children: <button>trigger</button>,
  data
};

const shallowDropdown = (props = {}) => {
  const dropdownProps = {
    ...defaultProps,
    ...props
  };

  return shallow(<Dropdown {...dropdownProps} />);
};

const mountDropdown = (props = {}) => {
  const dropdownProps = {
    ...defaultProps,
    ...props
  };

  return mountInThemeProvider(<Dropdown {...dropdownProps} />);
};

const findMenuItems = (wrapper) => {
  return wrapper.find(MenuItem).filterWhere((menuItem) => {
    return menuItem.props().id !== undefined;
  });
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
    findMenuItems(themeProvider)
      .at(index)
      .props().isHighlighted
  ).toEqual(true);
};

const assertNoItemsHighlighted = (themeProvider) => {
  findMenuItems(themeProvider).forEach((menuItem) => {
    expect(menuItem.props().isHighlighted).toEqual(false);
  });
};

describe('Dropdown', () => {
  describe('renders', () => {
    it('root', () => {
      const dropdown = shallowDropdown();

      expect(dropdown.exists()).toEqual(true);
    });
  });

  describe('render props', () => {
    describe('renderTrigger', () => {
      let dropdown, renderTrigger;

      beforeEach(() => {
        renderTrigger = jest
          .fn()
          .mockImplementation(({ triggerProps }) => (
            <div {...triggerProps}>Trigger</div>
          ));

        [, dropdown] = mountDropdown({
          renderTrigger
        });
      });

      it('calls renderTrigger prop with expected arguments', () => {
        expect(renderTrigger).toBeCalledWith(
          expect.objectContaining({
            // Derived
            id: expect.stringMatching(REGEX_DROPDOWN_ID),
            // State
            highlightedIndex: undefined,
            isOpen: false,
            // Helpers
            close: expect.any(Function),
            focusTrigger: expect.any(Function),
            open: expect.any(Function),
            // Prop objects
            triggerProps: expect.objectContaining({
              'aria-activedescendant': undefined,
              'aria-describedby': expect.stringMatching(
                REGEX_DROPDOWN_CONTENT_ID
              ),
              'aria-disabled': undefined,
              'aria-expanded': false,
              'aria-haspopup': true,
              'aria-owns': expect.stringMatching(REGEX_DROPDOWN_CONTENT_ID),
              children: undefined,
              disabled: undefined,
              onBlur: expect.any(Function),
              onClick: expect.any(Function),
              onKeyDown: expect.any(Function),
              onKeyUp: expect.any(Function),
              ref: expect.any(Function),
              role: 'button'
            })
          })
        );
      });

      it('renders expected content', () => {
        expect(dropdown).toMatchSnapshot();
      });
    });

    describe('renderMenu', () => {
      let dropdown, renderMenu;

      beforeEach(() => {
        renderMenu = jest
          .fn()
          .mockImplementation(({ menuProps: _menuProps }) => {
            const {
              renderItem: ignoreRenderItem,
              itemKey: ignoreItemKey,
              ...menuProps
            } = _menuProps;

            return <div {...menuProps}>Menu</div>;
          });

        [, dropdown] = mountDropdown({ renderMenu, isOpen: true });
      });

      it('calls renderMenu prop with expected arguments', () => {
        expect(renderMenu).toBeCalledWith(
          expect.objectContaining({
            // Derived
            id: expect.stringMatching(REGEX_DROPDOWN_ID),
            // State
            highlightedIndex: undefined,
            isOpen: true,
            // Helpers
            close: expect.any(Function),
            focusTrigger: expect.any(Function),
            open: expect.any(Function),
            // Prop objects
            menuProps: expect.objectContaining({
              data: defaultProps.data,
              id: expect.stringMatching(REGEX_DROPDOWN_MENU_ID),
              itemKey: 'text',
              role: 'menu'
            })
          })
        );
      });

      it('renders expected content', () => {
        expect(dropdown).toMatchSnapshot();
      });
    });

    describe('renderItem', () => {
      let dropdown, renderItem;

      beforeEach(() => {
        renderItem = jest
          .fn()
          .mockImplementation(({ item, itemProps: _itemProps }) => {
            const {
              render: ignoreRender,
              text: ignoreText,
              index: ignoreIndex,
              item: ignoreItem,
              isHighlighted: ignoreIsHighlighted,
              variant: ignoreVariant,
              ...itemProps
            } = _itemProps;

            return <div {...itemProps}>{item.text}</div>;
          });

        [, dropdown] = mountDropdown({ renderItem, isOpen: true });
      });

      it('calls renderItem prop with expected arguments', () => {
        expect(renderItem).toBeCalledWith(
          expect.objectContaining({
            // Derived
            id: expect.any(String),
            // State
            highlightedIndex: undefined,
            isOpen: true,
            // Helpers
            close: expect.any(Function),
            focusTrigger: expect.any(Function),
            open: expect.any(Function),
            // Prop getters
            itemProps: expect.objectContaining({
              'aria-disabled': undefined,
              children: expect.any(String),
              disabled: undefined,
              id: expect.stringMatching(REGEX_DROPDOWN_ITEM_ID),
              index: expect.any(Number),
              isHighlighted: false,
              item: expect.any(Object),
              onClick: expect.any(Function),
              onKeyDown: expect.any(Function),
              render: undefined,
              role: 'menuitem',
              tabIndex: null,
              text: expect.any(String),
              variant: undefined
            }),
            // Other Props
            index: expect.any(Number),
            item: expect.any(Object)
          })
        );
      });

      it('renders expected content', () => {
        expect(dropdown).toMatchSnapshot();
      });
    });
  });

  describe('event handler composition', () => {
    let button, dropdown, trigger;
    let onKeyDown = jest.fn();
    let onKeyUp = jest.fn();

    beforeEach(() => {
      [, dropdown] = mountDropdown({
        data,
        defaultIsOpen: true,
        children: (
          <button onKeyDown={onKeyDown} onKeyUp={onKeyUp}>
            Trigger
          </button>
        )
      });
      trigger = dropdown.find(PopoverTrigger);
      button = trigger.find('button');

      data[0].onClick && data[0].onClick.mockReset();
      onKeyDown.mockReset();
      onKeyUp.mockReset();
    });

    describe('trigger', () => {
      it('composes onKeyDown event', () => {
        const dropdownOnTriggerKeyDown = spyOn(dropdown, 'onTriggerKeyDown');

        button.simulate('keydown', { key: 'i' });

        expect(onKeyDown).toHaveBeenCalled();
        expect(dropdownOnTriggerKeyDown).toHaveBeenCalled();
      });

      it('composes onKeyUp event', () => {
        const dropdownOnTriggerKeyUp = spyOn(dropdown, 'onTriggerKeyUp');

        button.simulate('keyup', { key: 'i' });

        expect(onKeyUp).toHaveBeenCalled();
        expect(dropdownOnTriggerKeyUp).toHaveBeenCalled();
      });
    });

    describe('items', () => {
      it('composes onClick event', () => {
        const dropdownOnItemClick = spyOn(dropdown, 'onItemClick');

        findMenuItems(dropdown)
          .first()
          .simulate('click');

        expect(data[0].onClick).toHaveBeenCalled();
        expect(dropdownOnItemClick).toHaveBeenCalled();
      });
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
        item = findMenuItems(dropdown).first();

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

  testDemoExamples(examples);
});
