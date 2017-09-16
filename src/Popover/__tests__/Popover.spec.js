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
    content: 'content',
    ...props
  };
  return shallow(<Popover {...popoverProps} />);
}

function mountPopover(props = {}) {
  const popoverProps = {
    children: <button>trigger</button>,
    content: 'content',
    ...props
  };

  return mountInThemeProvider(<Popover {...popoverProps} />);
}

describe('Popover', () => {
  describe('renders', () => {
    it('root', () => {
      const popover = shallowPopover();

      expect(popover.exists()).toEqual(true);
    });

    it('no arrow when configured', () => {
      const popover = mountPopover({
        hasArrow: false,
        defaultIsOpen: true
      });
      const arrow = popover.find(PopoverArrow);

      expect(arrow.exists()).toEqual(false);
    });
  });

  describe('opens', () => {
    let popover, trigger;

    beforeEach(() => {
      popover = mountPopover({ onOpen: jest.fn() });
      trigger = popover.find(PopoverTrigger);
    });

    it('when trigger is clicked', () => {
      trigger.simulate('click');
      const content = popover.find(PopoverContent);

      expect(content.exists()).toEqual(true);
    });

    it('calls onOpen', () => {
      trigger.simulate('click');

      expect(popover.props().onOpen).toHaveBeenCalled();
    });
  });

  describe('closes', () => {
    let popover, trigger;

    beforeEach(() => {
      popover = mountPopover({
        onClose: jest.fn(),
        defaultIsOpen: true
      });
      trigger = popover.find(PopoverTrigger);
    });

    it('when trigger is clicked', () => {
      trigger.simulate('click');
      const content = popover.find(PopoverContent);

      expect(content.exists()).toEqual(false);
    });

    it('when document is clicked', () => {
      var event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });

      document.body && document.body.dispatchEvent(event);

      const content = popover.find(PopoverContent);

      expect(content.exists()).toEqual(false);
    });

    it('when pressing escape', () => {
      var event = new KeyboardEvent('keydown', {
        key: 'Escape',
        view: window,
        bubbles: true,
        cancelable: true
      });

      document.body && document.body.dispatchEvent(event);

      const content = popover.find(PopoverContent);

      expect(content.exists()).toEqual(false);
    });

    it('calls onClose', () => {
      trigger.simulate('click');

      expect(popover.props().onClose).toHaveBeenCalled();
    });
  });

  describe('focus', () => {
    describe('when autoFocus = true', () => {
      it('sets focus to the content', () => {
        const popover = mountPopover();
        const trigger = popover.find(PopoverTrigger);
        trigger.simulate('click');
        const content = popover.find(PopoverContent);

        expect(content.getDOMNode() === document.activeElement).toEqual(true);
      });
    });

    describe('when autoFocus = false', () => {
      it('does not set focus to the content', () => {
        const popover = mountPopover({ autoFocus: false });
        const trigger = popover.find(PopoverTrigger);
        trigger.simulate('click');
        const content = popover.find(PopoverContent);

        expect(content.getDOMNode() === document.activeElement).toEqual(false);
      });
    });

    describe('when restoreFocus = true', () => {
      it('restores focus to the trigger', () => {
        const popover = mountPopover({ defaultIsOpen: true });
        const trigger = popover.find(PopoverTrigger);
        trigger.simulate('click');

        expect(
          trigger.getDOMNode().firstChild === document.activeElement
        ).toEqual(true);
      });
    });

    describe('when restoreFocus = false', () => {
      it('does not restore focus to the trigger', () => {
        const popover = mountPopover({
          defaultIsOpen: true,
          restoreFocus: false
        });
        const trigger = popover.find(PopoverTrigger);
        trigger.simulate('click');

        expect(
          trigger.getDOMNode().firstChild === document.activeElement
        ).toEqual(false);
      });
    });
  });

  describe('disabled', () => {
    it('does not open on click', () => {
      const popover = mountPopover({ disabled: true });
      const trigger = popover.find(PopoverTrigger);
      trigger.simulate('click');
      const content = popover.find(PopoverContent);

      expect(content.exists()).toEqual(false);
    });
  });

  testDemoExamples(examples);
});
