/* @flow */
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { createStyledComponent } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import _OverflowContainer, {
  componentTheme as overflowContainerComponentTheme
} from './OverflowContainer';

type Props = {
  children?: React$Node
};

type State = {
  hasShadowTop: boolean,
  hasShadowBottom: boolean
};

// prettier-ignore
export const componentTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'OverflowContainer',
      theme: overflowContainerComponentTheme(baseTheme)
    },
    {
      name: 'OverflowContainerWithShadows',
      theme: {
        OverflowContainerWithShadows_boxShadowBottom: `inset 0 -8px 8px -8px ${baseTheme.color_gray_60}, inset 0 -1px ${baseTheme.borderColor}`,
        OverflowContainerWithShadows_boxShadowTop: `inset 0 8px 8px -8px ${baseTheme.color_gray_60}, inset 0 1px ${baseTheme.borderColor}`,
      }
    },
    baseTheme
  );

const ThemedOverflowContainer = createThemedComponent(
  _OverflowContainer,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'OverflowContainerWithShadows',
        theme: componentTheme(baseTheme)
      },
      {
        name: 'OverflowContainer',
        theme: {}
      },
      baseTheme
    )
);

const Root = createStyledComponent(
  ThemedOverflowContainer,
  ({ hasShadowBottom, hasShadowTop, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    const boxShadows = [];
    hasShadowTop &&
      boxShadows.push(theme.OverflowContainerWithShadows_boxShadowTop);
    hasShadowBottom &&
      boxShadows.push(theme.OverflowContainerWithShadows_boxShadowBottom);
    const boxShadow = boxShadows.length ? boxShadows.join(',') : undefined;

    // [1] - 1px to avoid unwanted vertical scrollbar,
    //       1px in to avoid potentially cutting off of focus ring of
    //       subcomponents in body
    return {
      boxShadow,
      overflowX: 'hidden',

      paddingBottom: 2, // [1]
      paddingTop: 2 // [1]
    };
  },
  {
    displayName: 'OverflowContainerWithShadows',
    withProps: {
      scrollY: true
    }
  }
);

/**
 * OverflowContainerWithShadows
 */
export default class OverflowContainerWithShadows extends Component<
  Props,
  State
> {
  state = {
    hasShadowTop: false,
    hasShadowBottom: false
  };

  container: ?HTMLElement;

  setContainerRef = (node: HTMLElement) => {
    this.container = node;
  };

  componentDidMount() {
    this.applyShadows(this.container);
  }

  render() {
    const { hasShadowBottom, hasShadowTop } = this.state;
    const isScrollable = hasShadowBottom || hasShadowTop;
    const rootProps = {
      hasShadowTop,
      hasShadowBottom,
      innerRef: this.setContainerRef,
      onScroll: this.handleScroll,
      // Set tabIndex when scrollable so user can scroll with keyboard
      tabIndex: isScrollable ? 0 : undefined,
      ...this.props
    };

    return <Root {...rootProps} />;
  }

  handleScroll = (event: SyntheticEvent<HTMLElement>) => {
    this.applyShadows(event.currentTarget);
  };

  applyShadows = debounce(
    (element: HTMLElement) => {
      this.setState({
        hasShadowTop: element.scrollTop > 0,
        hasShadowBottom:
          element.scrollTop + element.clientHeight < element.scrollHeight
      });
    },
    100,
    { leading: true }
  );
}
