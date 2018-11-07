/* @flow */
export type EventListenerProps = {
  listeners: Listeners
};

export type Listeners = Array<Listener>;

export type Listener = {
  /** Target on which to add event listener. Can be a global such as `window` or `document` or any CSS selector */
  target: string,
  /** Type of event to listen for, e.g. click */
  event: string,
  /** Function called when the event is triggered */
  handler: Function,
  /** Options passed to addEventListener/removeEventListener */
  options?: boolean | Object
};
