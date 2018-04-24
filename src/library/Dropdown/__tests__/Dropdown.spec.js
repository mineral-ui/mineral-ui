/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider, spyOn } from '../../../../utils/enzymeUtils';
import Dropdown, { DropdownContent, DropdownTrigger } from '../../Dropdown';
import PopoverTrigger from '../../Popover/PopoverTrigger';
import { MenuItem } from '../../Menu';
import examples from '../../../website/app/demos/Dropdown/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

import type { RenderFn } from '../Dropdown';
import type { Items } from '../../Menu/Menu';

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
  testDemoExamples(examples);

  describe('renders', () => {
    it('root', () => {
      const dropdown = shallowDropdown();

      expect(dropdown.exists()).toEqual(true);
    });
  });

  describe('render props', () => {
    describe('children', () => {
      let dropdown, children: RenderFn;

      beforeEach(() => {
        // $FlowFixMe
        children = jest
          .fn()
          .mockImplementation(({ props }) => <div {...props}>Trigger</div>);

        [, dropdown] = mountDropdown({
          children
        });
      });

      it('calls children prop with expected arguments', () => {
        expect(children).toBeCalledWith(
          expect.objectContaining({
            state: expect.objectContaining({
              highlightedIndex: undefined,
              isOpen: false
            }),
            helpers: expect.objectContaining({
              close: expect.any(Function),
              focusTrigger: expect.any(Function),
              open: expect.any(Function)
            }),
            props: expect.objectContaining({
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

    describe('menu', () => {
      let dropdown, menu;

      beforeEach(() => {
        menu = jest.fn().mockImplementation(({ props }) => {
          const {
            item: ignoreRenderItem,
            itemKey: ignoreItemKey,
            ...restProps
          } = props;

          return <div {...restProps}>Menu</div>;
        });

        [, dropdown] = mountDropdown({ menu, isOpen: true });
      });

      it('calls menu prop with expected arguments', () => {
        expect(menu).toBeCalledWith(
          expect.objectContaining({
            state: expect.objectContaining({
              highlightedIndex: undefined,
              isOpen: true
            }),
            helpers: expect.objectContaining({
              close: expect.any(Function),
              focusTrigger: expect.any(Function),
              open: expect.any(Function)
            }),
            props: expect.objectContaining({
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

    describe('item', () => {
      let dropdown, item;

      beforeEach(() => {
        item = jest.fn().mockImplementation(({ props }) => {
          const {
            render: ignoreRender,
            text: ignoreText,
            index: ignoreIndex,
            item,
            isHighlighted: ignoreIsHighlighted,
            variant: ignoreVariant,
            ...restProps
          } = props;

          return <div {...restProps}>{item.text}</div>;
        });

        [, dropdown] = mountDropdown({ item, isOpen: true });
      });

      it('calls item prop with expected arguments', () => {
        expect(item).toBeCalledWith(
          expect.objectContaining({
            state: expect.objectContaining({
              highlightedIndex: undefined,
              isOpen: true
            }),
            helpers: expect.objectContaining({
              close: expect.any(Function),
              focusTrigger: expect.any(Function),
              open: expect.any(Function)
            }),
            props: expect.objectContaining({
              'aria-disabled': undefined,
              children: expect.any(String),
              disabled: undefined,
              id: expect.stringMatching(REGEX_DROPDOWN_ITEM_ID),
              index: expect.any(Number),
              isHighlighted: false,
              item: expect.any(Object),
              onClick: expect.any(Function),
              onKeyDown: expect.any(Function),
              role: 'menuitem',
              tabIndex: null,
              text: expect.any(String)
            })
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
});
