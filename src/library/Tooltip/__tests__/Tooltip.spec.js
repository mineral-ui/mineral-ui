/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import Tooltip from '../Tooltip';
import PopoverContent from '../../Popover/PopoverContent';
import PopoverTrigger from '../../Popover/PopoverTrigger';
import examples from '../../../website/app/demos/Tooltip/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowTooltip(props = {}) {
  const tooltipProps = {
    children: <button>trigger</button>,
    content: 'content',
    ...props
  };
  return shallow(<Tooltip {...tooltipProps} />);
}

function mountTooltip(props = {}) {
  const tooltipProps = {
    children: <button>trigger</button>,
    content: 'content',
    ...props
  };

  return mountInThemeProvider(<Tooltip {...tooltipProps} />);
}

function assertTriggerHasFocus(trigger, bool = true) {
  expect(
    trigger.find('button').getDOMNode() === document.activeElement
  ).toEqual(bool);
}

function testOpeningOnEvent(eventType) {
  return describe(`on ${eventType}`, () => {
    let button, tooltip, themeProvider, trigger;

    beforeEach(() => {
      [themeProvider, tooltip] = mountTooltip({ onOpen: jest.fn() });
      trigger = tooltip.find(PopoverTrigger);
      button = trigger.find('button');

      jest.useFakeTimers();
      button.simulate(eventType);
      jest.runAllTimers();
    });

    it('renders content', () => {
      const content = themeProvider.update().find(PopoverContent);
      expect(content.exists()).toEqual(true);
    });

    it('calls onOpen', () => {
      expect(tooltip.props().onOpen).toHaveBeenCalled();
    });
  });
}

function testClosingOnEvent(eventType) {
  return describe(`on ${eventType}`, () => {
    let button, tooltip, themeProvider, trigger;

    beforeEach(() => {
      [themeProvider, tooltip] = mountTooltip({
        onClose: jest.fn(),
        defaultIsOpen: true
      });
      trigger = tooltip.find(PopoverTrigger);
      button = trigger.find('button');
      button.simulate(eventType);
    });

    it('closes the content', () => {
      const content = themeProvider.find(PopoverContent);
      expect(content.exists()).toEqual(false);
    });

    it('calls onClose', () => {
      expect(tooltip.props().onClose).toHaveBeenCalled();
    });

    it('does not set focus to the trigger', () => {
      assertTriggerHasFocus(trigger, false);
    });
  });
}

describe('Tooltip', () => {
  testDemoExamples(examples);

  describe('renders', () => {
    it('root', () => {
      const tooltip = shallowTooltip();

      expect(tooltip.exists()).toEqual(true);
    });
  });

  describe('opens', () => {
    ['mouseenter', 'focus', 'click'].forEach(testOpeningOnEvent);
  });

  describe('closes', () => {
    ['mouseleave', 'blur'].forEach(testClosingOnEvent);

    it('when pressing escape', () => {
      const [themeProvider, tooltip] = mountTooltip({
        onClose: jest.fn(),
        defaultIsOpen: true
      });
      const trigger = tooltip.find(PopoverTrigger);

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
      assertTriggerHasFocus(trigger, false);
    });
  });

  describe('disabled', () => {
    it('does not open when tooltip is disabled', () => {
      const [themeProvider, tooltip] = mountTooltip({ disabled: true });

      jest.useFakeTimers();
      tooltip.find('button').simulate('mouseenter');
      jest.runAllTimers();

      const content = themeProvider.update().find(PopoverContent);

      expect(content.exists()).toEqual(false);
    });

    xit('closes when trigger is disabled', () => {
      // See https://github.com/mineral-ui/mineral-ui/issues/571

      const [themeProvider, tooltip] = mountTooltip({
        children: <button disabled>trigger</button>,
        defaultIsOpen: true
      });

      tooltip.find('button').simulate('mouseleave');

      const content = themeProvider.update().find(PopoverContent);

      expect(content.exists()).toEqual(false);
    });

    it('opens when trigger is disabled', () => {
      const [themeProvider, tooltip] = mountTooltip({
        children: <button disabled>trigger</button>
      });
      const trigger = tooltip.find(PopoverTrigger);

      jest.useFakeTimers();
      trigger.find('button').simulate('mouseenter');
      jest.runAllTimers();

      const content = themeProvider.update().find(PopoverContent);

      expect(content.exists()).toEqual(true);
    });

    it('does not pass disabled attribute to trigger', () => {
      const [, tooltip] = mountTooltip({ disabled: true });

      const button = tooltip.find('button');

      expect(button.prop('disabled')).toBeUndefined();
    });
  });
});
