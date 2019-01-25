/* @flow */
import React, { Component } from 'react';
import styled from '@emotion/styled';

type Props = {
  angles?: Array<number>,
  children: React$Node,
  clipColor?: string,
  point?: number | string
};

type DefaultProps = {
  angles: Array<number>,
  clipColor: string
};

const styles = {
  root: ({ point }) => ({
    overflow: point ? 'hidden' : null
  }),
  inner: ({ angles, clipColor, point, theme }) => {
    const clipBottomEdge = angles[0] > 0;
    const paddingWithClip = `${parseFloat(theme.SectionPaddingVertical) +
      parseFloat(theme.baseline_2)}em`;
    const paddingWithClipWide = `${parseFloat(
      theme.SectionPaddingVerticalWide
    ) + parseFloat(theme.baseline_4)}em`;
    const paddingBottom =
      point && clipBottomEdge ? paddingWithClip : theme.SectionPaddingVertical;
    const paddingBottomWide =
      point && clipBottomEdge
        ? paddingWithClipWide
        : theme.SectionPaddingVerticalWide;
    const paddingTop =
      point && !clipBottomEdge ? paddingWithClip : theme.SectionPaddingVertical;
    const paddingTopWide =
      point && !clipBottomEdge
        ? paddingWithClipWide
        : theme.SectionPaddingVerticalWide;

    const styles: Object = {
      margin: '0 auto',
      maxWidth: '80em',
      paddingBottom,
      paddingLeft: theme.SectionPaddingHorizontal,
      paddingRight: theme.SectionPaddingHorizontal,
      paddingTop,
      position: 'relative',

      [theme.bp_moreSpacious]: {
        paddingBottom: paddingBottomWide,
        paddingLeft: theme.SectionPaddingHorizontalWide,
        paddingRight: theme.SectionPaddingHorizontalWide,
        paddingTop: paddingTopWide
      }
    };

    const pseudoStyles = {
      backgroundColor: clipColor,
      bottom: clipBottomEdge ? 0 : null,
      content: '""',
      height: '1em',
      position: 'absolute',
      top: !clipBottomEdge ? 0 : null
    };

    const transformProperties = `translateY(
      ${clipBottomEdge ? '1em' : '-1em'}) scaleY(30)`;

    const beforeWidth = typeof point === 'number' ? `${point}px` : point;
    const afterWidth =
      typeof point === 'number' ? `100% - ${point}px` : `100% - ${point}`;

    /*
     * The intersecting point of the two clipping shapes should be relative to
     * the width of the Inner, but the shapes themselves need to extend to the
     * viewport edge. Doing so requires:
     * [1] This calc finds the distance between the viewport edge and the
     *     Inner edge, then negates it to apply as a left/right offset
     * [2] This calc takes the distance from [1] and adds the proportional width
     *     of each clipping shape
     */
    if (point) {
      styles['&::before'] = {
        ...pseudoStyles,
        left: 'calc(-50vw + 50%)', // [1]
        transform: `skewY(${angles[0]}deg) ${transformProperties}`,
        transformOrigin: `${clipBottomEdge ? 'top' : 'bottom'} right`,
        width: `calc(50vw - 50% + ${beforeWidth})` // [2]
      };
      styles['&::after'] = {
        ...pseudoStyles,
        right: 'calc(-50vw + 50%)', // [1]
        transform: `skewY(${-1 * angles[1]}deg) ${transformProperties}`,
        transformOrigin: `${clipBottomEdge ? 'top' : 'bottom'} left`,
        width: `calc(50vw - 50% + ${afterWidth})` // [2]
      };
    }

    return styles;
  }
};

const Inner = styled('div')(styles.inner);
const Root = styled('section')(styles.root);

export default class Section extends Component<Props> {
  static defaultProps: DefaultProps = {
    angles: [5, 5],
    clipColor: '#fff'
  };

  render() {
    const {
      angles = Section.defaultProps.angles,
      clipColor = Section.defaultProps.clipColor,
      children,
      point,
      ...restProps
    } = this.props;

    const rootProps = {
      point,
      ...restProps
    };

    const innerProps = {
      angles,
      clipColor,
      point
    };

    return (
      <Root {...rootProps}>
        <Inner {...innerProps}>{children}</Inner>
      </Root>
    );
  }
}
