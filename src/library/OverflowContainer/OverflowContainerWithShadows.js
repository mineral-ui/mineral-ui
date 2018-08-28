/* @flow */
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { createStyledComponent } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import _OverflowContainer, {
  componentTheme as overflowContainerComponentTheme
} from './OverflowContainer';

type Props = {
  children?: React$Node,
  hideScrollbars?: boolean,
  scrollX?: boolean,
  scrollY?: boolean
};

type State = {
  hasShadowBottom: boolean,
  hasShadowLeft: boolean,
  hasShadowRight: boolean,
  hasShadowTop: boolean
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
        OverflowContainerWithShadows_boxShadowLeft: `inset 8px 0 8px -8px ${baseTheme.color_gray_60}, inset 1px 0 ${baseTheme.borderColor}`,
        OverflowContainerWithShadows_boxShadowRight: `inset -8px 0 8px -8px ${baseTheme.color_gray_60}, inset -1px 0 ${baseTheme.borderColor}`,
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

const getBoxShadows = ({ theme: baseTheme, ...restProps }) => {
  const theme = componentTheme(baseTheme);
  const boxShadows = Object.keys(restProps)
    .filter((prop) => prop.indexOf('hasShadow') !== -1)
    .reduce((acc, prop) => {
      if (restProps[prop]) {
        const edge = prop.split('hasShadow')[1];
        acc.push(theme[`OverflowContainerWithShadows_boxShadow${edge}`]);
      }
      return acc;
    }, []);
  return boxShadows.length ? boxShadows.join(',') : undefined;
};

// [1] - 1px to avoid unwanted scrollbar,
//       1px in to avoid potentially cutting off of focus ring of
//       subcomponents in body
const styles = {
  scroller: ({ scrollX, scrollY }) => ({
    flex: '1 1 auto',

    ...(scrollX
      ? {
          overflowY: 'hidden',
          paddingLeft: 2, // [1]
          paddingRight: 2 // [1]
        }
      : undefined),

    ...(scrollY
      ? {
          overflowX: 'hidden',
          paddingBottom: 2, // [1]
          paddingTop: 2 // [1]
        }
      : undefined)
  }),
  root: (props) => {
    const boxShadow = getBoxShadows(props);
    return boxShadow
      ? {
          display: 'flex',
          position: 'relative',

          '&::before': {
            bottom: 0,
            boxShadow,
            content: '""',
            pointerEvents: 'none',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0
          }
        }
      : undefined;
  }
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'OverflowContainerWithShadows'
});
const Scroller = createStyledComponent(
  ThemedOverflowContainer,
  styles.scroller,
  {
    displayName: 'Scroller',
    forwardProps: ['containerRef']
  }
);

/**
 * OverflowContainerWithShadows
 */
export default class OverflowContainerWithShadows extends Component<
  Props,
  State
> {
  container: ?HTMLElement;

  setContainerRef = (node: HTMLElement) => {
    this.container = node;
  };

  componentDidMount() {
    this.applyShadows(this.container);
  }

  render() {
    const {
      children,
      hideScrollbars,
      scrollX,
      scrollY,
      ...restProps
    } = this.props;
    const isScrollable = Boolean(
      this.state &&
        Object.keys(this.state).filter((key) => this.state[key]).length
    );
    const rootProps = {
      ...this.state,
      ...restProps
    };
    const scrollerProps = {
      hideScrollbars,
      containerRef: this.setContainerRef,
      onScroll: (scrollX || scrollY) && this.handleScroll,
      scrollX,
      scrollY,
      // Set tabIndex when scrollable so user can scroll with keyboard
      tabIndex: isScrollable ? 0 : undefined
    };

    return (
      <Root {...rootProps}>
        <Scroller {...scrollerProps}>{children}</Scroller>
      </Root>
    );
  }

  handleScroll = (event: SyntheticEvent<HTMLElement>) => {
    this.applyShadows(event.currentTarget);
  };

  applyShadows = debounce(
    (element: HTMLElement) => {
      const { scrollX, scrollY } = this.props;
      if (scrollX) {
        this.setState({
          hasShadowLeft: element.scrollLeft > 0,
          hasShadowRight:
            element.scrollLeft + element.clientWidth < element.scrollWidth
        });
      }
      if (scrollY) {
        this.setState({
          hasShadowTop: element.scrollTop > 0,
          hasShadowBottom:
            element.scrollTop + element.clientHeight < element.scrollHeight
        });
      }
    },
    100,
    { leading: true }
  );
}
