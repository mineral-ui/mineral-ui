/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { createBoxRootNode } from './styled';

import { boxPropTypes } from './propTypes';
import type { BoxDefaultProps, BoxProps } from './types';

export default class Box extends Component<BoxProps> {
  static defaultProps: BoxDefaultProps = {
    element: 'div'
  };

  static propTypes = boxPropTypes;

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createBoxRootNode,
    (nextProps: BoxProps, prevProps: BoxProps) =>
      nextProps.element === prevProps.element
  );

  render() {
    const Root = this.getRootNode(this.props, Box.defaultProps);

    return <Root {...this.props} />;
  }
}
