/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import EventListener from '../EventListener';

function shallowEventListener(props = {}) {
  const eventListenerProps = {
    listeners: [],
    ...props
  };
  return shallow(<EventListener {...eventListenerProps} />);
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
