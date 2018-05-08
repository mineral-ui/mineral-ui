/* @flow */
import React, { Children, cloneElement } from 'react';
import { createStyledComponent, pxToEm } from '../styles';

type Props = {
  /** When `children` is a string, this will be the rendered text */
  abbr?: string,
  /** Background color */
  background?: string,
  /**
   * `img` (with an `alt` attribute), [Icon](/components/icon) (with a `title`), or a
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
  Avatar_fontSize_large: baseTheme.h4_fontSize,
  Avatar_fontSize_jumbo: baseTheme.h4_fontSize,
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

    const color = propColor || theme.color_themePrimary;
    const size = theme[`Avatar_size_${propSize}`];

    return {
      alignItems: 'center',
      backgroundColor: noBackground ? null : background || theme.color_theme_60,
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
        color
      }
    };
  },
  {
    displayName: 'Avatar',
    filterProps: ['icon'],
    includeStyleReset: true
  }
);

/**
 * Avatar provides a graphic representation of an identity. It can display an
 * image, text, or an [Icon](/components/icon).
 */
export default function Avatar({
  abbr,
  children,
  shape = 'circle',
  size = 'large',
  ...restProps
}: Props) {
  let icon, noBackground, text;

  Children.map(children, (child) => {
    if (typeof child === 'string') {
      text =
        abbr || child.length > 1 ? (
          <abbr title={child}>{abbr || child.charAt(0)}</abbr>
        ) : (
          <span>{child}</span>
        );
    } else if (
      child.type &&
      child.type.displayName &&
      child.type.displayName.indexOf('Icon') != -1
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
