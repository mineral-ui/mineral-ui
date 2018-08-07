/* @flow */
import { Component } from 'react';
import { canUseDOM, canUseEventListeners } from 'exenv';

type Listener = {
  /** Target on which to add event listener. Can be a global such as `window` or `document` or any CSS selector */
  target: string,
  /** Type of event to listen for, e.g. click */
  event: string,
  /** Function called when the event is triggered */
  handler: Function,
  /** Options passed to addEventListener/removeEventListener */
  options?: boolean | Object
};

type Listeners = Array<Listener>;

type Props = {
  listeners: Listeners
};

/** Declarative event listener component */
export default class EventListener extends Component<Props> {
  props: Props;

  componentDidMount() {
    this.addEventListeners();
  }

  componentDidUpdate(prevProps: Props) {
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
