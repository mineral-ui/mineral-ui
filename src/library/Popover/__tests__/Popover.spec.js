/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider, spyOn } from '../../../../utils/enzymeUtils';
import Popover from '../Popover';
import PopoverArrow from '../PopoverArrow';
import PopoverContent from '../PopoverContent';
import PopoverTrigger from '../PopoverTrigger';
import examples from '../../../website/app/demos/Popover/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

import type { RenderFn } from '../Popover';

const REGEX_POPOVER_CONTENT_ID = /^popover-\d+-content$/;

const defaultProps = {
  children: <button>trigger</button>,
  content: <div>content</div>
};

function shallowPopover(props = {}) {
  const popoverProps = {
    ...defaultProps,
    ...props
  };
  return shallow(<Popover {...popoverProps} />);
}

function mountPopover(props = {}) {
  const popoverProps = {
    ...defaultProps,
    ...props
  };

  return mountInThemeProvider(<Popover {...popoverProps} />);
}

function assertTriggerHasFocus(trigger) {
  expect(
    trigger.find('button').getDOMNode() === document.activeElement
  ).toEqual(true);
}

describe('Popover', () => {
  testDemoExamples(examples);

  describe('renders', () => {
    it('root', () => {
      const popover = shallowPopover();

      expect(popover.exists()).toEqual(true);
    });

    it('no arrow when configured', () => {
      const [, popover] = mountPopover({
        hasArrow: false,
        defaultIsOpen: true
      });
      const arrow = popover.find(PopoverArrow);

      expect(arrow.exists()).toEqual(false);
    });
  });

  describe('event handler composition', () => {
    let button, content, popover, trigger;

    let onBlur = jest.fn();
    let onClick = jest.fn();

    beforeEach(() => {
      [, popover] = mountPopover({
        defaultIsOpen: true,
        children: (
          <button onClick={onClick} onBlur={onBlur}>
            Trigger
          </button>
        ),
        content: <div onBlur={onBlur}>Content</div>
      });
      trigger = popover.find(PopoverTrigger);
      button = trigger.find('button');
      content = popover.find(PopoverContent);

      onBlur.mockReset();
      onClick.mockReset();
    });

    describe('trigger', () => {
      it('composes onClick event', () => {
        const popoverToggleOpen = spyOn(popover, 'toggleOpen');

        button.simulate('click');

        expect(onClick).toHaveBeenCalled();
        expect(popoverToggleOpen).toHaveBeenCalled();
      });

      it('composes onBlur event', () => {
        const popoverOnBlur = spyOn(popover, 'onBlur');

        button.simulate('blur');

        expect(onBlur).toHaveBeenCalled();
        expect(popoverOnBlur).toHaveBeenCalled();
      });
    });

    describe('content', () => {
      it('composes onBlur event', () => {
        const popoverOnBlur = spyOn(popover, 'onBlur');

        content.simulate('blur');

        expect(onBlur).toHaveBeenCalled();
        expect(popoverOnBlur).toHaveBeenCalled();
      });
    });
  });

  describe('render props', () => {
    describe('children', () => {
      let popover, children: RenderFn;

      beforeEach(() => {
        // $FlowFixMe
        children = jest
          .fn()
          .mockImplementation(({ props }) => <div {...props}>Trigger</div>);

        [, popover] = mountPopover({
          children
        });
      });

      it('calls children prop with expected arguments', () => {
        expect(children).toBeCalledWith(
          expect.objectContaining({
            state: expect.objectContaining({
              isOpen: false
            }),
            helpers: expect.objectContaining({
              close: expect.any(Function),
              focusTrigger: expect.any(Function),
              open: expect.any(Function),
              toggleOpen: expect.any(Function)
            }),
            props: expect.objectContaining({
              'aria-describedby': expect.stringMatching(
                REGEX_POPOVER_CONTENT_ID
              ),
              'aria-disabled': undefined,
              'aria-expanded': false,
              'aria-owns': expect.stringMatching(REGEX_POPOVER_CONTENT_ID),
              children: undefined,
              disabled: undefined,
              onBlur: expect.any(Function),
              onClick: expect.any(Function),
              ref: expect.any(Function),
              role: 'button'
            })
          })
        );
      });

      it('renders expected content', () => {
        expect(popover).toMatchSnapshot();
      });
    });

    describe('content', () => {
      let popover, content;

      beforeEach(() => {
        content = jest.fn().mockImplementation(({ props }) => {
          const {
            hasArrow: ignoreHasArrow,
            modifiers: ignoreModifiers,
            placement: ignorePlacement,
            subtitle: ignoreSubtitle,
            ...restProps
          } = props;

          return <div {...restProps}>Content</div>;
        });

        [, popover] = mountPopover({
          content,
          isOpen: true
        });
      });

      it('calls content prop with expected arguments', () => {
        expect(content).toBeCalledWith(
          expect.objectContaining({
            state: expect.objectContaining({
              isOpen: true
            }),
            helpers: expect.objectContaining({
              close: expect.any(Function),
              focusTrigger: expect.any(Function),
              open: expect.any(Function),
              toggleOpen: expect.any(Function)
            }),
            props: expect.objectContaining({
              hasArrow: true,
              id: expect.stringMatching(REGEX_POPOVER_CONTENT_ID),
              modifiers: undefined,
              onBlur: expect.any(Function),
              placement: 'bottom',
              ref: expect.any(Function),
              subtitle: undefined,
              tabIndex: 0,
              title: undefined
            })
          })
        );
      });

      it('renders expected content', () => {
        expect(popover).toMatchSnapshot();
      });
    });
  });

  describe('opens', () => {
    let button, popover, themeProvider, trigger;

    beforeEach(() => {
      [themeProvider, popover] = mountPopover({ onOpen: jest.fn() });
      trigger = popover.find(PopoverTrigger);
      button = trigger.find('button');
    });

    it('when trigger is clicked', () => {
      button.simulate('click');
      const content = themeProvider.find(PopoverContent);

      expect(content.exists()).toEqual(true);
    });

    it('calls onOpen', () => {
      button.simulate('click');

      expect(popover.props().onOpen).toHaveBeenCalled();
    });

    it('sets focus to the trigger', () => {
      button.simulate('click');

      assertTriggerHasFocus(trigger);
    });
  });

  describe('closes', () => {
    let button, popover, themeProvider, trigger;

    beforeEach(() => {
      [themeProvider, popover] = mountPopover({
        onClose: jest.fn(),
        defaultIsOpen: true
      });
      trigger = popover.find(PopoverTrigger);
      button = trigger.find('button');
    });

    it('when trigger is clicked', () => {
      button.simulate('click');
      const content = themeProvider.find(PopoverContent);

      expect(content.exists()).toEqual(false);
      assertTriggerHasFocus(trigger);
    });

    it('when document is clicked', () => {
      const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });

      document.body && document.body.dispatchEvent(event);
      themeProvider.update();

      const content = themeProvider.find(PopoverContent);

      expect(content.exists()).toEqual(false);
      assertTriggerHasFocus(trigger);
    });

    it('when pressing escape', () => {
      const event = new KeyboardEvent('keydown', {
        key: 'Escape',
        view: window,
        bubbles: true,
        cancelable: true
      });

      document.body && document.body.dispatchEvent(event);
      themeProvider.update();

      const content = themeProvider.find(PopoverContent);

      expect(content.exists()).toEqual(false);
      assertTriggerHasFocus(trigger);
    });

    it('when focus is moved outside of component');

    it('calls onClose', () => {
      button.simulate('click');

      expect(popover.props().onClose).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    it('does not open on click', () => {
      const [themeProvider, popover] = mountPopover({ disabled: true });
      const trigger = popover.find(PopoverTrigger);
      trigger.find('button').simulate('click');
      const content = themeProvider.find(PopoverContent);

      expect(content.exists()).toEqual(false);
    });

    it('passes disabled attribute to trigger', () => {
      const [, popover] = mountPopover({ disabled: true });
      const trigger = popover.find(PopoverTrigger);
      const button = trigger.find('button');

      expect(button.prop('disabled')).toEqual(true);
    });
  });
});
