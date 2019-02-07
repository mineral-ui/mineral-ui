/* @flow */
import { Component } from 'react';
import { canUseDOM, canUseEventListeners } from 'exenv';

import { EventListenerProps, Listeners, Listener } from './types';

export default class EventListener extends Component<EventListenerProps> {
  static displayName = 'EventListener';

  componentDidMount() {
    this.addEventListeners();
  }

  componentDidUpdate(prevProps: EventListenerProps) {
    this.removeEventListeners(prevProps.listeners);
    this.addEventListeners();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  render() {
    return null;
  }

  getTargetNode(target: string) {
    if (canUseDOM) {
      return window[target] || document.querySelector(target);
    }
  }

  addEventListeners(listeners: Listeners = this.props.listeners) {
    if (canUseEventListeners) {
      listeners.forEach(({ target, event, handler, options }: Listener) => {
        const node = this.getTargetNode(target);
        node && node.addEventListener(event, handler, options);
      });
    }
  }

  removeEventListeners(listeners: Listeners = this.props.listeners) {
    if (canUseEventListeners) {
      listeners.forEach(({ target, event, handler, options }: Listener) => {
        const node = this.getTargetNode(target);
        node && node.removeEventListener(event, handler, options);
      });
    }
  }
}
