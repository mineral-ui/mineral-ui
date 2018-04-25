/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import Popover from '../Popover';
import PopoverArrow from '../PopoverArrow';
import PopoverContent from '../PopoverContent';
import PopoverTrigger from '../PopoverTrigger';
import examples from '../../../website/app/demos/Popover/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowPopover(props = {}) {
  const popoverProps = {
    children: <button>trigger</button>,
    content: <div>content</div>,
    ...props
  };
  return shallow(<Popover {...popoverProps} />);
}

function mountPopover(props = {}) {
  const popoverProps = {
    children: <button>trigger</button>,
    content: <div>content</div>,
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
