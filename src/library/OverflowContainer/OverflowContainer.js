/* @flow */
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import EventListener from '../EventListener';
import { createStyledComponent } from '../styles';

type Props = {
  children?: React$Node,
  containerRef?: (node: HTMLElement) => void,
  hideScrollbars?: boolean,
  scrollX?: boolean,
  scrollY?: boolean,
  tabIndex?: number | string
};

type State = {
  scrollable: boolean
};

// prettier-ignore
export const componentTheme = (baseTheme: Object) => ({
  OverflowContainer_outline_focus: `1px solid ${baseTheme.borderColor_theme_focus}`,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  ({ hideScrollbars, scrollX, scrollY, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      outline: 0,
      overflowX: scrollX ? 'auto' : undefined,
      overflowY: scrollY ? 'auto' : undefined,
      // Prevent flash of focus style when interacting with children
      transition: 'outline 0.1s 0.25s',

      '&:focus': {
        outline: theme.OverflowContainer_outline_focus
      },

      ...(hideScrollbars
        ? {
            overflow: '-moz-scrollbars-none',
            '-ms-overflow-style': 'none',

            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }
        : undefined)
    };
  },
  {
    displayName: 'OverflowContainer'
  }
);

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
      innerRef: this.setContainerRef,
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
