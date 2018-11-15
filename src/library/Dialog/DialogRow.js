/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { createDialogRowRootNode } from './styled';

import type { DialogRowDefaultProps, DialogRowProps } from './types';

export default class DialogRow extends Component<DialogRowProps> {
  static displayName = 'DialogRow';

  static defaultProps: DialogRowDefaultProps = {
    element: 'div'
  };

  getRootNode = memoizeOne(
    createDialogRowRootNode,
    (nextProps: DialogRowProps, prevProps: DialogRowProps) =>
      nextProps.element === prevProps.element
  );

  render() {
    const Root = this.getRootNode(this.props, DialogRow.defaultProps);

    return <Root {...this.props} />;
  }
}
