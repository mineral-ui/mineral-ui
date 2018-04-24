/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import { DropdownContent } from '../../Dropdown';
import { MenuItem } from '../../Menu';
import Select, { SelectTrigger } from '../../Select';
import examples from '../../../website/app/demos/Select/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

import type { Items } from '../../Menu/Menu';

const REGEX_SELECT_CONTENT_ID = /^select-\d+-content$/;
const REGEX_SELECT_MENU_ID = /^select-\d+-menu$/;
const REGEX_SELECT_ITEM_ID = /^select-\d+-item-\d+$/;

const data: Items = [
  {
    text: 'A item',
    value: 'A',
    onClick: jest.fn()
  },
  {
    text: 'B item',
    value: 'B',
    onClick: jest.fn()
  },
  {
    text: 'C item',
    value: 'C',
    onClick: jest.fn()
  }
];

const shallowSelect = (props = {}) => {
  const selectProps = {
    data,
    ...props
  };

  return shallow(<Select {...selectProps} />);
};

const mountSelect = (props = {}) => {
  const selectProps = {
    data,
    ...props
  };

  // NOTE: Attach Select to a DOM node as it uses some document methods
  // internally, e.g. global.document.getElementById, which necessitate it
  // being attached to an actual DOM node.
  return mountInThemeProvider(<Select {...selectProps} />, {
    attachToDom: true
  });
};

const findMenuItems = (wrapper) => {
  return wrapper.find(MenuItem).filterWhere((menuItem) => {
    return menuItem.props().id !== undefined;
  });
};

const assertTriggerHasFocus = (trigger) => {
  expect(
    trigger
      .find('div')
      .first()
      .getDOMNode() === document.activeElement
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

describe('Select', () => {
  testDemoExamples(examples, {
    exclude: ['states']
  });

  describe('renders', () => {
    it('root', () => {
      const select = shallowSelect();

      expect(select.exists()).toEqual(true);
    });
  });

  describe('mounted in DOM', () => {
    let themeProvider;

    afterEach(() => {
      themeProvider.destroy();
    });

    describe('render props', () => {
      describe('trigger', () => {
        let select, trigger;

        beforeEach(() => {
          trigger = jest.fn().mockImplementation(({ props }) => {
            const {
              isOpen: ignoreIsOpen,
              item: ignoreItem,
              triggerRef: ignoreTriggerRef,
              variant: ignoreVariant,
              ...restProps
            } = props;

            return <div {...restProps}>Trigger</div>;
          });

          [themeProvider, select] = mountSelect({
            trigger
          });
        });

        it('calls trigger prop with expected arguments', () => {
          expect(trigger).toBeCalledWith(
            expect.objectContaining({
              state: expect.objectContaining({
                highlightedIndex: undefined,
                isOpen: false,
                selectedItem: undefined
              }),
              helpers: expect.objectContaining({
                close: expect.any(Function),
                focusTrigger: expect.any(Function),
                open: expect.any(Function)
              }),
              props: expect.objectContaining({
                'aria-describedby': expect.stringMatching(
                  REGEX_SELECT_CONTENT_ID
                ),
                'aria-disabled': undefined,
                'aria-expanded': false,
                'aria-haspopup': 'listbox',
                'aria-invalid': undefined,
                'aria-owns': expect.stringMatching(REGEX_SELECT_CONTENT_ID),
                'aria-readonly': undefined,
                'aria-required': undefined,
                children: undefined,
                disabled: undefined,
                isOpen: false,
                item: undefined,
                name: undefined,
                onBlur: expect.any(Function),
                onClick: expect.any(Function),
                onKeyDown: expect.any(Function),
                onKeyUp: expect.any(Function),
                placeholder: expect.any(String),
                readOnly: undefined,
                ref: expect.any(Function),
                role: 'button',
                size: 'large',
                tabIndex: 0,
                variant: undefined
              })
            })
          );
        });

        it('renders expected content', () => {
          expect(select).toMatchSnapshot();
        });
      });

      describe('menu', () => {
        let select, menu;

        beforeEach(() => {
          menu = jest.fn().mockImplementation(({ props }) => {
            const {
              renderItem: ignoreRenderItem,
              itemKey: ignoreItemKey,
              item: ignoreItem,
              ...restProps
            } = props;
            return <div {...restProps}>Menu</div>;
          });

          [themeProvider, select] = mountSelect({ menu, isOpen: true });
        });

        it('calls menu prop with expected arguments', () => {
          expect(menu).toBeCalledWith(
            expect.objectContaining({
              state: expect.objectContaining({
                highlightedIndex: undefined,
                isOpen: true,
                selectedItem: undefined
              }),
              helpers: expect.objectContaining({
                close: expect.any(Function),
                focusTrigger: expect.any(Function),
                open: expect.any(Function)
              }),
              props: expect.objectContaining({
                data,
                id: expect.stringMatching(REGEX_SELECT_MENU_ID),
                itemKey: 'value',
                item: expect.any(Function),
                role: 'listbox'
              })
            })
          );
        });

        it('renders expected content', () => {
          expect(select).toMatchSnapshot();
        });
      });

      describe('item', () => {
        let select, item;

        beforeEach(() => {
          item = jest.fn().mockImplementation(({ props }) => {
            const {
              render: ignoreRender,
              text: ignoreText,
              index: ignoreIndex,
              item,
              variant: ignoreVariant,
              isHighlighted: ignoreIsHighlighted,
              ...restProps
            } = props;

            return <div {...restProps}>{item.text}</div>;
          });

          [themeProvider, select] = mountSelect({ item, isOpen: true });
        });

        it('calls item prop with expected arguments', () => {
          expect(item).toBeCalledWith(
            expect.objectContaining({
              state: expect.objectContaining({
                highlightedIndex: undefined,
                isOpen: true,
                selectedItem: undefined
              }),
              helpers: expect.objectContaining({
                close: expect.any(Function),
                focusTrigger: expect.any(Function),
                open: expect.any(Function)
              }),
              props: expect.objectContaining({
                'aria-disabled': undefined,
                'aria-selected': false,
                children: 'A item',
                disabled: undefined,
                id: expect.stringMatching(REGEX_SELECT_ITEM_ID),
                index: expect.any(Number),
                isHighlighted: false,
                item: expect.any(Object),
                onClick: expect.any(Function),
                onKeyDown: expect.any(Function),
                role: 'option',
                tabIndex: null,
                text: expect.any(String),
                value: expect.any(String)
              })
            })
          );
        });

        it('renders expected content', () => {
          expect(select).toMatchSnapshot();
        });
      });
    });

    describe('when closed', () => {
      describe('opens', () => {
        let triggerRoot, select, trigger;

        beforeEach(() => {
          [themeProvider, select] = mountSelect({ onOpen: jest.fn() });
          trigger = select.find(SelectTrigger);
          triggerRoot = trigger.find('div').first();
        });

        it('when trigger is clicked', () => {
          triggerRoot.simulate('click');

          assertContentExists(themeProvider);
          assertTriggerHasFocus(trigger);
        });

        it('when down arrow is pressed', () => {
          triggerRoot.simulate('keydown', { key: 'ArrowDown' });

          assertContentExists(themeProvider);
        });

        it('when up arrow is pressed', () => {
          triggerRoot.simulate('keydown', { key: 'ArrowUp' });

          assertContentExists(themeProvider);
        });

        it('when Space is pressed', () => {
          triggerRoot.simulate('keydown', { key: ' ' });

          assertContentExists(themeProvider);
        });

        it('when Enter is pressed', () => {
          triggerRoot.simulate('keydown', { key: 'Enter' });

          assertContentExists(themeProvider);
        });

        it('calls onOpen', () => {
          triggerRoot.simulate('click');

          expect(select.props().onOpen).toHaveBeenCalled();
        });
      });

      describe('item highlighting', () => {
        describe('when there is a selected item', () => {
          let triggerRoot, select, trigger;

          beforeEach(() => {
            [themeProvider, select] = mountSelect({
              defaultSelectedItem: data[1]
            });
            trigger = select.find(SelectTrigger);
            triggerRoot = trigger.find('div').first();
          });

          describe('when Space is pressed', () => {
            it('highlights selected item', () => {
              triggerRoot.simulate('keydown', { key: ' ' });

              assertItemAtIndexIsHighlighted(themeProvider, 1);
            });
          });

          describe('when Enter is pressed', () => {
            it('highlights selected item', () => {
              triggerRoot.simulate('keydown', { key: 'Enter' });

              assertItemAtIndexIsHighlighted(themeProvider, 1);
            });
          });

          describe('when trigger is clicked', () => {
            it('highlights selected item', () => {
              triggerRoot.simulate('click');

              assertItemAtIndexIsHighlighted(themeProvider, 1);
            });
          });

          describe('when down arrow is pressed', () => {
            it('highlights selected item', () => {
              triggerRoot.simulate('keydown', { key: 'ArrowDown' });

              assertItemAtIndexIsHighlighted(themeProvider, 1);
            });
          });

          describe('when up arrow is pressed', () => {
            it('highlights selected item', () => {
              triggerRoot.simulate('keydown', { key: 'ArrowUp' });

              assertItemAtIndexIsHighlighted(themeProvider, 1);
            });
          });
        });

        describe('when there is no selected item', () => {
          let triggerRoot, select, trigger;

          beforeEach(() => {
            [themeProvider, select] = mountSelect();
            trigger = select.find(SelectTrigger);
            triggerRoot = trigger.find('div').last();
          });

          describe('when Space is pressed', () => {
            it('highlights first item', () => {
              triggerRoot.simulate('keydown', { key: ' ' });

              assertItemAtIndexIsHighlighted(themeProvider, 0);
            });
          });

          describe('when Enter is pressed', () => {
            it('highlights first item', () => {
              triggerRoot.simulate('keydown', { key: 'Enter' });

              assertItemAtIndexIsHighlighted(themeProvider, 0);
            });
          });

          describe('when trigger is clicked', () => {
            it('highlights first item', () => {
              triggerRoot.simulate('click');

              assertItemAtIndexIsHighlighted(themeProvider, 0);
            });
          });

          describe('when down arrow is pressed', () => {
            it('highlights first item', () => {
              triggerRoot.simulate('keydown', { key: 'ArrowDown' });

              assertItemAtIndexIsHighlighted(themeProvider, 0);
            });
          });

          describe('when up arrow is pressed', () => {
            it('highlights last item', () => {
              triggerRoot.simulate('keydown', { key: 'ArrowUp' });

              assertItemAtIndexIsHighlighted(themeProvider, 2);
            });
          });
        });
      });
    });

    describe('when open', () => {
      let triggerRoot, select, trigger;

      beforeEach(() => {
        [themeProvider, select] = mountSelect({
          onClose: jest.fn(),
          defaultIsOpen: true,
          defaultHighlightedIndex: 0,
          onChange: jest.fn(),
          onSelect: jest.fn()
        });
        trigger = select.find(SelectTrigger);
        triggerRoot = trigger.find('div').first();
      });

      describe('closes', () => {
        it('calls onClose', () => {
          triggerRoot.simulate('click');

          expect(select.props().onClose).toHaveBeenCalledTimes(1);
        });

        it('when clicked', () => {
          triggerRoot.simulate('click');

          expect(select.props().onClose).toHaveBeenCalledTimes(1);
        });

        it('when Space is pressed', () => {
          triggerRoot.simulate('keydown', { key: ' ' });

          expect(select.props().onClose).toHaveBeenCalledTimes(1);
        });

        it('when Enter is pressed', () => {
          triggerRoot.simulate('keydown', { key: 'Enter' });

          expect(select.props().onClose).toHaveBeenCalledTimes(1);
        });
      });

      describe('item navigation', () => {
        describe('when down arrow is pressed', () => {
          it('highlights next item', () => {
            triggerRoot.simulate('keydown', { key: 'ArrowDown' });

            assertItemAtIndexIsHighlighted(themeProvider, 1);
          });

          it('highlights first item when end of items is reached', () => {
            triggerRoot.simulate('keydown', { key: 'ArrowDown' });
            triggerRoot.simulate('keydown', { key: 'ArrowDown' });
            triggerRoot.simulate('keydown', { key: 'ArrowDown' });

            assertItemAtIndexIsHighlighted(themeProvider, 0);
          });
        });

        describe('when up arrow is pressed', () => {
          it('highlights previous item', () => {
            triggerRoot.simulate('keydown', { key: 'ArrowDown' });
            triggerRoot.simulate('keydown', { key: 'ArrowUp' });

            assertItemAtIndexIsHighlighted(themeProvider, 0);
          });

          it('highlights last item when start of items is reached', () => {
            triggerRoot.simulate('keydown', { key: 'ArrowUp' });

            assertItemAtIndexIsHighlighted(themeProvider, 2);
          });
        });

        describe('when Home is pressed', () => {
          it('highlights first item', () => {
            triggerRoot.simulate('keydown', { key: 'Home' });

            assertItemAtIndexIsHighlighted(themeProvider, 0);
          });
        });

        describe('when End is pressed', () => {
          it('highlights first item', () => {
            triggerRoot.simulate('keydown', { key: 'End' });

            assertItemAtIndexIsHighlighted(themeProvider, 2);
          });
        });

        describe('when a letter is pressed', () => {
          it('highlights matching item', () => {
            triggerRoot.simulate('keydown', { key: 'b' });

            assertItemAtIndexIsHighlighted(themeProvider, 1);
          });
        });
      });

      describe('item selection', () => {
        beforeEach(() => {
          [themeProvider, select] = mountSelect({
            defaultIsOpen: true,
            defaultSelectedItem: data[0],
            onChange: jest.fn(),
            onSelect: jest.fn()
          });
          trigger = select.find(SelectTrigger);
          triggerRoot = trigger.find('div').first();
        });

        describe('when item is same as previous', () => {
          it('calls appropriate event handlers', () => {
            const item = themeProvider.find(MenuItem).at(0);

            item.simulate('click');

            expect(data[0].onClick).toHaveBeenCalled();
            expect(select.props().onSelect).toHaveBeenCalled();
            expect(select.props().onChange).not.toHaveBeenCalled();
          });
        });

        describe('when item is different than previous', () => {
          it('calls appropriate event handlers', () => {
            const item = findMenuItems(themeProvider).at(1);

            item.simulate('click');

            expect(data[1].onClick).toHaveBeenCalled();
            expect(select.props().onSelect).toHaveBeenCalled();
            expect(select.props().onChange).toHaveBeenCalled();
          });
        });
      });
    });
  });
});
