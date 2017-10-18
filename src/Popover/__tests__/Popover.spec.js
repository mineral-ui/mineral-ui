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
import Popover from '../Popover';
import PopoverArrow from '../PopoverArrow';
import PopoverContent from '../PopoverContent';
import PopoverTrigger from '../PopoverTrigger';
import examples from '../../website/app/demos/Popover/examples';
import testDemoExamples from '../../../utils/testDemoExamples';

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
  });

  testDemoExamples(examples);
});
