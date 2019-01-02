/* @flow */
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { canUseDOM } from 'exenv';

import type { PortalProps } from './types';

export default class Portal extends Component<PortalProps> {
  static displayName = 'Portal';

  node: ?HTMLElement;

  constructor(props: PortalProps) {
    super(props);

    if (canUseDOM) {
      this.node = document.createElement('div');
    }
  }

  componentDidMount() {
    canUseDOM &&
      document.body &&
      this.node &&
      document.body.appendChild(this.node);
  }

  componentWillUnmount() {
    canUseDOM &&
      document.body &&
      this.node &&
      document.body.removeChild(this.node);
  }

  render() {
    return canUseDOM && this.node
      ? createPortal(this.props.children, this.node)
      : null;
  }
}
