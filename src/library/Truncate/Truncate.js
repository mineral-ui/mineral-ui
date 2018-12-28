/* @flow */
import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import EventListener from '../EventListener';
import { TruncateRoot as Root, Tooltip } from './styled';

import type { TruncateProps, TruncateState } from './types';

export default class Truncate extends PureComponent<
  TruncateProps,
  TruncateState
> {
  static displayName = 'Truncate';

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
    const { showTooltip } = this.state;
    const rootProps = {
      ref: this.setRootRef,
      showTooltip,
      ...restProps
    };

    const content = (
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

    return this.root && showTooltip ? (
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

  handleWindowResize = debounce(this.toggleTooltip, 100);
}
