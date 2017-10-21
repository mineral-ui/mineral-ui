/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../utils';

type Props = {
  angle?: number,
  children: React$Node,
  clipColor?: string,
  point?: number
};

const Root = createStyledComponent('div', ({ point }) => ({
  overflow: point ? 'hidden' : null
}));

const Inner = createStyledComponent(
  'div',
  ({ angle, clipColor, point, theme }) => {
    const clipBottomEdge = angle > 0;
    const paddingHorizontal = `${parseFloat(theme.space_inset_sm) * 4}em`;
    const paddingHorizontalWide = `${parseFloat(theme.space_inset_sm) * 16}em`;
    const paddingVertical = `${parseFloat(theme.space_inset_sm) * 4}em`;
    const paddingVerticalWide = `${parseFloat(theme.space_inset_sm) * 16}em`;
    const paddingWithClip = `${parseFloat(theme.space_inset_sm) * 16}em`;
    const paddingWithClipWide = `${parseFloat(theme.space_inset_sm) * 24}em`;
    const paddingBottom =
      point && clipBottomEdge ? paddingWithClip : paddingVertical;
    const paddingBottomWide =
      point && clipBottomEdge ? paddingWithClipWide : paddingVerticalWide;
    const paddingTop =
      point && !clipBottomEdge ? paddingWithClip : paddingVertical;
    const paddingTopWide =
      point && !clipBottomEdge ? paddingWithClipWide : paddingVerticalWide;

    const styles = [
      {
        margin: '0 auto',
        maxWidth: '80em',
        paddingBottom,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingTop,
        position: 'relative',

        '@media(min-width: 48em)': {
          paddingBottom: paddingBottomWide,
          paddingLeft: paddingHorizontalWide,
          paddingRight: paddingHorizontalWide,
          paddingTop: paddingTopWide
        }
      }
    ];

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

    /*
     * The intersecting point of the two clipping shapes should be relative to
     * the width of the Inner, but the shapes themselves need to extend to the
     * viewport edge. Doing so requires:
     * [1] This calc finds the distance between the viewport edge and the
     *     Inner edge, then negates it to apply as a left/right offset
     * [2] This calc takes the distance from [1] and adds the proportional width
     *     of each clipping shape
     */

    const beforeStyles = {
      '&::before': {
        ...pseudoStyles,
        left: 'calc(-50vw + 50%)', // [1]
        transform: `skewY(${angle}deg) ${transformProperties}`,
        transformOrigin: `${clipBottomEdge ? 'top' : 'bottom'} right`,
        width: `calc(50vw - 50% + ${point * 100}%)` // [2]
      }
    };

    const afterStyles = {
      '&::after': {
        ...pseudoStyles,
        right: 'calc(-50vw + 50%)', // [1]
        transform: `skewY(${-1 * angle}deg) ${transformProperties}`,
        transformOrigin: `${clipBottomEdge ? 'top' : 'bottom'} left`,
        width: `calc(50vw - 50% + ${(1 - point) * 100}%)` // [2]
      }
    };

    if (point) {
      styles.push(beforeStyles, afterStyles);
    }

    return styles;
  }
);

export default function Section({
  angle = 5,
  clipColor = '#fff',
  children,
  point,
  ...restProps
}: Props) {
  const rootProps = {
    point,
    ...restProps
  };
  const innerProps = {
    angle,
    clipColor,
    point
  };
  return (
    <Root {...rootProps}>
      <Inner {...innerProps}>{children}</Inner>
    </Root>
  );
}
