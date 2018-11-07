/* @flow */
import React, { PureComponent } from 'react';
import { TruncateRoot as Root, Tooltip } from './styled';

import type { TruncateProps, TruncateState } from './types';

export default class Truncate extends PureComponent<
  TruncateProps,
  TruncateState
> {
  state = {
    showTooltip: false
  };

  root: ?HTMLElement;

  componentDidMount() {
    this.toggleTooltip();
  }

  componentDidUpdate() {
    this.toggleTooltip();
  }

  render() {
    const { children, ...restProps } = this.props;
    const rootProps = {
      innerRef: this.setRootRef,
      ...restProps
    };

    const content = <Root {...rootProps}>{children}</Root>;
    return this.root && this.state.showTooltip ? (
      <Tooltip content={this.root.textContent}>{content}</Tooltip>
    ) : (
      content
    );
  }

  setRootRef = (node: ?HTMLElement) => {
    this.root = node;
  };

  toggleTooltip = () => {
    const rootNode = this.root;

    if (rootNode) {
      const offsetWidth = rootNode.offsetWidth + 1; // `+ 1` necessary for Edge & IE11
      const showTooltip = Boolean(rootNode.scrollWidth > offsetWidth);
      if (this.state.showTooltip !== showTooltip) {
        this.setState({
          showTooltip
        });
      }
    }
  };
}
