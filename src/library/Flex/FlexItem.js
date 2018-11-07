/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { createFlexItemRootNode } from './styled';

import { flexItemPropTypes } from './propTypes';
import type { FlexItemDefaultProps, FlexItemProps } from './types';

export default class FlexItem extends Component<FlexItemProps> {
  static defaultProps: FlexItemDefaultProps = {
    grow: 0,
    shrink: 1
  };

  static propTypes = flexItemPropTypes;

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createFlexItemRootNode,
    (nextProps: FlexItemProps, prevProps: FlexItemProps) =>
      nextProps.flex === prevProps.flex
  );

  render() {
    const Root = this.getRootNode(this.props);

    return <Root {...this.props} />;
  }
}
