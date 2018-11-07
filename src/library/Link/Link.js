/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { createLinkRootNode } from './styled';

import { linkPropTypes } from './propTypes';
import type { LinkProps } from './types';

export default class Link extends Component<LinkProps> {
  static defaultProps = {
    element: 'a'
  };

  static propTypes = linkPropTypes;

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createLinkRootNode,
    (nextProps: LinkProps, prevProps: LinkProps) =>
      nextProps.element === prevProps.element
  );

  render() {
    const Root = this.getRootNode(this.props, Link.defaultProps);

    return <Root {...this.props} />;
  }
}
