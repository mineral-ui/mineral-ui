/* @flow */
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import EventListener from '../EventListener';
import { createStyledComponent } from '../styles';

type Props = {
  children: React$Node
};

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
    boxShadow: 0,
    // Prevent flash of focus style when interacting with table content
    transition: 'box-shadow 0.1s 0.25s',

    '&:focus': {
      boxShadow: theme.OverflowContainer_boxShadow_focus,
      outline: 0
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

  handleWindowResize = debounce(this.updateScrollable, 500);

  render() {
    const { children, ...restProps } = this.props;

    const rootProps = {
      innerRef: this.setContainerRef,
      ...(this.state.scrollable ? { tabIndex: 0 } : undefined),
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
