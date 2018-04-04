/* @flow */
import React, { Component } from 'react';
import { string } from 'prop-types';
import { createRootNode } from './Text';

type Props = {
  /** Available horizontal alignments */
  align?: 'start' | 'end' | 'center' | 'justify',
  /** Available styles */
  appearance?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'mouse'
    | 'p'
    | 'prose',
  /** Rendered content */
  children: React$Node,
  /** Color of text */
  color?: string,
  /** The rendered HTML element, e.g. `'span'`, `'strong'` */
  element?: string,
  /** Available font weights */
  fontWeight?: 'regular' | 'semiBold' | 'bold' | 'extraBold' | number,
  /** Inherit all styles from parent */
  inherit?: boolean,
  /** Remove top & bottom margins */
  noMargins?: boolean,
  /** @Private See use of context */
  parentElement?: string,
  /** Force display to one line and truncate with ellipsis at given max-width */
  truncate?: boolean | number | string
};

export default class TextProvider extends Component<Props> {
  static childContextTypes = {
    parentElement: string
  };

  getChildContext() {
    return {
      parentElement: this.props.element
    };
  }

  componentWillUpdate(nextProps: Props) {
    if (this.props.element !== nextProps.element) {
      this.rootNode = createRootNode(nextProps);
    }
  }

  rootNode: React$ComponentType<*> = createRootNode(this.props);

  render() {
    const Root = this.rootNode;
    const { parentElement: ignoreParentElement, ...restProps } = this.props;
    const rootProps = {
      ...restProps
    };

    return <Root {...rootProps} />;
  }
}
