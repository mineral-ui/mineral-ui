/* @flow */
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import EventListener from '../EventListener';
import { OverflowContainerRoot as Root } from './styled';

import type { OverflowContainerProps, OverflowContainerState } from './types';

export default class OverflowContainer extends Component<
  OverflowContainerProps,
  OverflowContainerState
> {
  static displayName = 'OverflowContainer';

  state = {
    scrollable: false
  };

  container: ?HTMLElement;

  componentDidMount() {
    this.updateScrollable();
  }

  componentDidUpdate() {
    this.updateScrollable();
  }

  setContainerRef = (node: ?HTMLElement) => {
    const { containerRef } = this.props;

    this.container = node;
    containerRef && containerRef(node);
  };

  updateScrollable = () => {
    const { scrollX, scrollY } = this.props;
    const node = this.container;
    if (node) {
      const scrollable = Boolean(
        (scrollX && node.scrollWidth > node.clientWidth) ||
          (scrollY && node.scrollHeight > node.clientHeight)
      );
      if (this.state.scrollable !== scrollable) {
        this.setState({
          scrollable
        });
      }
    }
  };

  handleWindowResize = debounce(this.updateScrollable, 500);

  render() {
    const { children, tabIndex, ...restProps } = this.props;

    const rootProps = {
      ref: this.setContainerRef,
      ...(tabIndex !== undefined
        ? { tabIndex }
        : this.state.scrollable
        ? { tabIndex: 0 }
        : undefined),
      ...restProps
    };
    return (
      <Root {...rootProps}>
        {children}
        <EventListener
          listeners={[
            {
              target: 'window',
              event: 'resize',
              handler: this.handleWindowResize
            }
          ]}
        />
      </Root>
    );
  }
}
