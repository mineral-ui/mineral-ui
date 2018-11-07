/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { createTextRootNode } from './styled';
import ElementContext from './ElementContext';
import { APPEARANCE } from './constants';

import type { TextProviderDefaultProps, TextProviderProps } from './types';

export default class TextProvider extends Component<TextProviderProps> {
  static defaultProps: TextProviderDefaultProps = {
    appearance: APPEARANCE.p,
    element: 'p'
  };

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createTextRootNode,
    (nextProps: TextProviderProps, prevProps: TextProviderProps) =>
      nextProps.element === prevProps.element
  );

  render() {
    const Root = this.getRootNode(this.props, TextProvider.defaultProps);
    const { parentElement: ignoreParentElement, ...rootProps } = this.props;

    return (
      <ElementContext.Provider value={this.props.element}>
        <Root {...rootProps} />
      </ElementContext.Provider>
    );
  }
}
