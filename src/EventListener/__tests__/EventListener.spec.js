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
import EventListener from '../EventListener';

function shallowEventListener(props = {}) {
  const eventListenerProps = {
    listeners: [],
    ...props
  };
  return shallow(<EventListener {...eventListenerProps} />, {
    lifecycleExperimental: true
  });
}

function runTargetAssertions(target: string) {
  let eventListener, onClick, onMouseDown, targetNode;

  beforeEach(() => {
    onClick = jest.fn();
    eventListener = shallowEventListener({
      listeners: [{ target, event: 'click', handler: onClick }]
    });
    targetNode = global[target] || global.document.querySelector(target);
  });

  it('adds listeners to target', () => {
    const event = new MouseEvent('click');
    targetNode.dispatchEvent(event);

    expect(onClick).toHaveBeenCalled();
  });

  describe('when unmounted', () => {
    it('removes listeners from target', () => {
      eventListener.unmount();

      const event = new MouseEvent('click');
      targetNode.dispatchEvent(event);

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('when updated', () => {
    beforeEach(() => {
      onMouseDown = jest.fn();
      eventListener = eventListener.setProps({
        listeners: [{ target, event: 'mousedown', handler: onMouseDown }]
      });
    });

    it('removes old listeners from target', () => {
      const event = new MouseEvent('click');
      targetNode.dispatchEvent(event);

      expect(onClick).not.toHaveBeenCalled();
    });

    it('adds new listeners to target', () => {
      const event = new MouseEvent('mousedown');
      targetNode.dispatchEvent(event);

      expect(onMouseDown).toHaveBeenCalled();
    });
  });
}

describe('EventListener', () => {
  it('renders', () => {
    const eventListener = shallowEventListener();

    expect(eventListener.exists()).toEqual(true);
  });

  describe('when target is a global', () => {
    runTargetAssertions('document');
  });

  describe('when target is a CSS selector', () => {
    runTargetAssertions('body');
  });
});
