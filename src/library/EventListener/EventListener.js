/* @flow */
import { Component } from 'react';
import { canUseDOM, canUseEventListeners } from 'exenv';

import type { EventListenerProps, Listeners, Listener } from './types';

export default class EventListener extends Component<EventListenerProps> {
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
      return global[target] || global.document.querySelector(target);
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
