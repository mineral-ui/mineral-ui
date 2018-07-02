/* @flow */
import React, { Component } from 'react';
import { createStyledComponent } from '../styles';

type Props = {};

type State = {
  scrollable: boolean
};

// prettier-ignore
export const componentTheme = (baseTheme: Object) => ({
  OverflowContainer_boxShadow_focus: `0 0 0 1px ${baseTheme.borderColor_theme_focus}`,

  ...baseTheme
});

const Root = createStyledComponent('div', ({ theme: baseTheme }) => {
  const theme = componentTheme(baseTheme);

  return {
    overflowX: 'auto',

    '&:focus': {
      outline: 0,
      boxShadow: theme.OverflowContainer_boxShadow_focus
    }
  };
});

/**
 * OverflowContainer
 */
export default class OverflowContainer extends Component<Props, State> {
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

  setContainerRef = (node: HTMLElement) => {
    this.container = node;
  };

  updateScrollable = () => {
    const node = this.container;
    const scrollable = Boolean(node && node.scrollWidth > node.clientWidth);
    if (this.state.scrollable !== scrollable) {
      this.setState({
        scrollable
      });
    }
  };

  render() {
    const rootProps = {
      innerRef: this.setContainerRef,
      ...(this.state.scrollable ? { tabIndex: 0 } : undefined),
      ...this.props
    };
    return <Root {...rootProps} />;
  }
}
