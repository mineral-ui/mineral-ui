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
import React, { Children, cloneElement } from 'react';
import { getColor, getReadableTextColor } from '../colors';
import { createStyledComponent, pxToEm } from '../styles';

type Props = {
  /** When `children` is a string, this will be the rendered text */
  abbr?: string,
  /** Background color */
  background?:
    | 'blue'
    | 'dusk'
    | 'gray'
    | 'green'
    | 'indigo'
    | 'lime'
    | 'magenta'
    | 'orange'
    | 'purple'
    | 'red'
    | 'sky'
    | 'slate'
    | 'teal'
    | 'yellow'
    | string,
  /**
   * `img` (with an `alt` attribute), [Icon](../icon) (with a `title`), or a
   * string
   */
  children: React$Node,
  /** Text color */
  color?: string,
  /** Available shapes */
  shape?: 'circle' | 'rounded' | 'square',
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo'
};

const iconSize = {
  small: 'medium',
  medium: 'medium',
  large: pxToEm(24),
  jumbo: pxToEm(24)
};

export const componentTheme = (baseTheme: Object) => ({
  Avatar_fontSize_small: baseTheme.fontSize_mouse,
  Avatar_fontSize_medium: baseTheme.fontSize_ui,
  Avatar_fontSize_large: baseTheme.fontSize_h4,
  Avatar_fontSize_jumbo: baseTheme.fontSize_h4,
  Avatar_fontWeight: baseTheme.fontWeight_bold,
  Avatar_size_small: baseTheme.size_small,
  Avatar_size_medium: baseTheme.size_medium,
  Avatar_size_large: baseTheme.size_large,
  Avatar_size_jumbo: baseTheme.size_jumbo,

  ...baseTheme
});

const Root = createStyledComponent(
  'span',
  ({
    background,
    color: propColor,
    icon,
    noBackground,
    shape,
    size: propSize,
    theme: baseTheme
  }) => {
    const theme = componentTheme(baseTheme);

    const color =
      propColor ||
      (background
        ? getReadableTextColor(background, 60)
        : theme.color_text_onprimary);
    const size = theme[`Avatar_size_${propSize}`];

    return {
      alignItems: 'center',
      backgroundColor: (() => {
        if (noBackground) {
          return null;
        } else if (background) {
          return getColor(background, 60) || background;
        } else {
          return theme.color_theme_60;
        }
      })(),
      color,
      borderRadius:
        shape === 'square'
          ? null
          : shape === 'rounded' ? theme.borderRadius_1 : '100%',
      display: 'inline-flex',
      fontWeight: theme.Avatar_fontWeight,
      height: size,
      lineHeight: size,
      justifyContent: 'center',
      verticalAlign: 'middle',
      width: size,

      '& > abbr,& > span': {
        fontSize: icon ? null : theme[`Avatar_fontSize_${propSize}`]
      },

      '& > abbr': {
        textDecoration: 'none'
      },

      '& > img': {
        borderRadius: '100%',
        display: 'block',
        width: '100%'
      },

      '& > [role="img"]': {
        fill: color
      }
    };
  },
  {
    displayName: 'Avatar',
    includeStyleReset: true
  }
);

/**
 * Avatar provides a graphic representation of an identity. It can display an
 * image, text, or an [Icon](../icon).
 */
export default function Avatar({
  abbr,
  children,
  shape = 'circle',
  size = 'large',
  ...restProps
}: Props) {
  let icon, noBackground, text;

  Children.map(children, child => {
    if (typeof child === 'string') {
      text =
        abbr || child.length > 1 ? (
          <abbr title={child}>{abbr || child.charAt(0)}</abbr>
        ) : (
          <span>{child}</span>
        );
    } else if (
      child.type &&
      child.type.name &&
      child.type.name.indexOf('Icon') != -1
    ) {
      icon = cloneElement(child, { size: iconSize[size] });
    } else {
      noBackground = true;
    }
  });

  const rootProps = {
    icon,
    noBackground,
    shape,
    size,
    ...restProps
  };

  return <Root {...rootProps}>{text || icon || children}</Root>;
}
