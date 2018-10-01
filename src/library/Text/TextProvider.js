/* @flow */
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { type Props, createRootNode } from './Text';
import ElementContext from './ElementContext';

export default class TextProvider extends Component<Props> {
  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createRootNode,
    (nextProps: Props, prevProps: Props) =>
      nextProps.element === prevProps.element
  );

  render() {
    const Root = this.getRootNode(this.props);
    const { parentElement: ignoreParentElement, ...restProps } = this.props;
    const rootProps = {
      ...restProps
    };

    return (
      <ElementContext.Provider value={this.props.element}>
        <Root {...rootProps} />
      </ElementContext.Provider>
    );
  }
}
