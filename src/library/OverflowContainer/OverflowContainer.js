/* @flow */
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import EventListener from '../EventListener';
import { createStyledComponent } from '../styles';

type Props = {
  children?: React$Node,
  scrollX?: boolean,
  scrollY?: boolean
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
  ({ scrollX, scrollY, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      outline: 0,
      overflowX: scrollX ? 'auto' : undefined,
      overflowY: scrollY ? 'auto' : undefined,
      // Prevent flash of focus style when interacting with children
      transition: 'outline 0.1s 0.25s',

      '&:focus': {
        outline: theme.OverflowContainer_outline_focus
      }
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
    this.container = node;
  };

  updateScrollable = () => {
    const { scrollX, scrollY } = this.props;
    const node = this.container;
    const scrollable = Boolean(
      (scrollX && node && node.scrollWidth > node.clientWidth) ||
        (scrollY && node && node.scrollHeight > node.clientHeight)
    );
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
