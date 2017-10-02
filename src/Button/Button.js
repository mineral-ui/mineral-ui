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
import React, { cloneElement } from 'react';
import { ellipsis } from 'polished';
import { createStyledComponent, pxToEm, getNormalizedValue } from '../utils';

type Props = {
  /** Rendered content of the component */
  children?: React$Node,
  /** Displays a circular Button */
  circular?: boolean,
  /** Disables the Button */
  disabled?: boolean,
  /** Stretch Button to fill its container */
  fullWidth?: boolean,
  /** Icon that goes after the children*/
  iconEnd?: React$Element<*>,
  /** Icon that goes before the children */
  iconStart?: React$Element<*>,
  /** Display a minimal Button */
  minimal?: boolean,
  /** Called with the click event */
  onClick?: (event: SyntheticEvent<>) => void,
  /** Display a primary Button */
  primary?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Available types */
  type?: 'button' | 'submit',
  /** Available variants */
  variant?: 'regular' | 'danger' | 'success' | 'warning'
};

export const componentTheme = (baseTheme: Object) => ({
  Button_backgroundColor: baseTheme.color_gray_20,
  Button_backgroundColor_active: baseTheme.color_gray_30,
  Button_backgroundColor_focus: baseTheme.color_gray_20,
  Button_backgroundColor_hover: baseTheme.color_gray_10,
  Button_backgroundColor_minimal_active: baseTheme.color_gray_20,
  Button_backgroundColor_minimal_hover: baseTheme.color_gray_10,
  Button_backgroundColor_primary: baseTheme.color_theme_70,
  Button_backgroundColor_primary_active: baseTheme.color_theme_80,
  Button_backgroundColor_primary_focus: baseTheme.color_theme_70,
  Button_backgroundColor_primary_hover: baseTheme.color_theme_60,
  Button_borderColor: baseTheme.borderColor,
  Button_borderColor_focus: baseTheme.color_white,
  Button_borderRadius: baseTheme.borderRadius_1,
  Button_borderWidth: 1, // px, also used to calculate padding (in ems)
  Button_boxShadow_focus: `0 0 0 1px ${baseTheme.borderColor_focus}`,
  Button_color_text: baseTheme.color_gray_100,
  Button_color_text_minimal: baseTheme.color_text_primary,
  Button_color_text_primary: baseTheme.color_text_onprimary,
  Button_fontWeight: baseTheme.fontWeight_semiBold,
  Button_padding_small: pxToEm(4),
  Button_padding_medium: pxToEm(6),
  Button_padding_large: pxToEm(8),
  Button_padding_jumbo: pxToEm(10),
  Button_size_small: baseTheme.size_small,
  Button_size_medium: baseTheme.size_medium,
  Button_size_large: baseTheme.size_large,
  Button_size_jumbo: baseTheme.size_jumbo,

  ButtonContent_fontSize: baseTheme.fontSize_ui,
  ButtonContent_fontSize_small: pxToEm(12),
  ButtonContent_lineHeight_small: pxToEm(16),
  ButtonContent_lineHeight_medium: pxToEm(20),
  ButtonContent_lineHeight_large: pxToEm(24),
  ButtonContent_lineHeight_jumbo: pxToEm(32),
  ButtonContent_padding_small: pxToEm(3),
  ButtonContent_padding_medium: pxToEm(4),
  ButtonContent_padding_large: pxToEm(6),
  ButtonContent_padding_jumbo: pxToEm(8),

  ButtonIcon_padding_small: pxToEm(2),
  ButtonIcon_padding_medium: pxToEm(2),
  ButtonIcon_padding_large: pxToEm(4),
  ButtonIcon_padding_jumbo: pxToEm(6),

  ...baseTheme
});

const styles = {
  button: props => {
    let theme = componentTheme(props.theme);
    const {
      circular,
      disabled,
      fullWidth,
      minimal,
      primary,
      size,
      variant
    } = props;

    if (variant !== 'regular') {
      // prettier-ignore
      theme = {
        ...theme,
        Button_backgroundColor_primary: theme[`backgroundColor_${variant}`],
        Button_backgroundColor_primary_active: theme[`backgroundColor_${variant}_active`],
        Button_backgroundColor_primary_focus: theme[`backgroundColor_${variant}_focus`],
        Button_backgroundColor_primary_hover: theme[`backgroundColor_${variant}_hover`],
        Button_boxShadow_focus: `0 0 0 1px ${theme[`borderColor_${variant}_focus`]}`,
        Button_color_text: theme[`color_text_${variant}`],
        Button_color_text_minimal: theme[`color_text_${variant}`],
        Button_color_text_primary: theme[`color_text_on${variant}`]
      };
    }

    return {
      backgroundColor: (() => {
        if (disabled && !minimal) {
          return theme.color_gray_30;
        } else if (primary) {
          return theme.Button_backgroundColor_primary;
        } else if (minimal) {
          return 'transparent';
        } else {
          return theme.Button_backgroundColor;
        }
      })(),
      borderColor:
        disabled || primary || minimal
          ? 'transparent'
          : theme.Button_borderColor,
      borderRadius: circular
        ? `${parseFloat(theme[`Button_size_${size}`]) / 2}em`
        : theme.Button_borderRadius,
      borderStyle: 'solid',
      borderWidth: `${theme.Button_borderWidth}px`,
      color: (() => {
        if (disabled) {
          return theme.color_text_disabled;
        } else if (primary) {
          return theme.Button_color_text_primary;
        } else if (minimal) {
          return theme.Button_color_text_minimal;
        } else {
          return theme.Button_color_text;
        }
      })(),
      cursor: disabled ? 'default' : 'pointer',
      fontWeight: theme.Button_fontWeight,
      height: theme[`Button_size_${size}`],
      // Because the small & medium-sized Buttons are shorter than
      // theme.fontSize_base * theme.lineHeight, the text content does not
      // vertically align correctly without setting the lineHeight equal to the
      // smallest fontSize (or smaller).
      lineHeight: theme.ButtonContent_fontSize_small,
      // if the user puts in a small icon in a large button
      // we want to force the button to be round/square
      // (really just pertinent on icon-only buttons)
      minWidth: theme[`Button_size_${size}`],
      // Because we use boxSizing: 'border-box', we need to substract the borderWidth
      // from the padding to have the fixed height of Root and Content be correct.
      padding: `${parseFloat(theme[`Button_padding_${size}`]) -
        parseFloat(pxToEm(theme.Button_borderWidth))}em`,
      verticalAlign: 'middle',
      width: fullWidth && '100%',
      '&:focus': {
        backgroundColor: (() => {
          if (primary) {
            return theme.Button_backgroundColor_primary_focus;
          } else if (minimal) {
            return theme.Button_backgroundColor_minimal_focus;
          } else {
            return theme.Button_backgroundColor_focus;
          }
        })(),
        borderColor: theme.Button_borderColor_focus,
        boxShadow: theme.Button_boxShadow_focus
      },
      '&:hover': {
        backgroundColor: (() => {
          if (!disabled) {
            if (primary) {
              return theme.Button_backgroundColor_primary_hover;
            } else if (minimal) {
              return theme.Button_backgroundColor_minimal_hover;
            } else {
              return theme.Button_backgroundColor_hover;
            }
          }
        })()
      },
      // `:active` must be last, to follow LVHFA order:
      // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
      '&:active': {
        backgroundColor: (() => {
          if (!disabled) {
            if (primary) {
              return theme.Button_backgroundColor_primary_active;
            } else if (minimal) {
              return theme.Button_backgroundColor_minimal_active;
            } else {
              return theme.Button_backgroundColor_active;
            }
          }
        })()
      },
      '&::-moz-focus-inner': { border: 0 },

      '& [role="icon"]': {
        boxSizing: 'content-box',
        fill:
          disabled || primary || minimal || variant !== 'regular'
            ? 'currentColor'
            : theme.Button_backgroundColor_primary,
        display: 'block',
        padding: theme[`ButtonIcon_padding_${size}`]
      }
    };
  },
  content: props => {
    const theme = componentTheme(props.theme);
    const { size } = props;

    const fontSize =
      size === 'small'
        ? theme.ButtonContent_fontSize_small
        : theme.ButtonContent_fontSize;

    return {
      ...ellipsis('100%'),

      display: 'block',
      fontSize,
      lineHeight: getNormalizedValue(
        theme[`ButtonContent_lineHeight_${size}`],
        fontSize
      ),
      padding: `0 ${getNormalizedValue(
        theme[`ButtonContent_padding_${size}`],
        fontSize
      )}`
    };
  },
  inner: {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    maxHeight: '100%',
    width: '100%'
  }
};

const Root = createStyledComponent('button', styles.button, {
  includeStyleReset: true,
  rootEl: 'button'
});
const Content = createStyledComponent('span', styles.content);
const Inner = createStyledComponent('span', styles.inner);

/**
 * The Button component represents a clickable button.
 * Buttons draw attention to actions that can be performed in your app.
 * Buttons are used to trigger any sort of event.
 *
 * Buttons with clear messaging and an appropriate variant applied communicate intention effectively.
 */
export default function Button({
  children,
  iconStart,
  iconEnd,
  size = 'medium',
  type = 'button',
  variant = 'regular',
  ...restProps
}: Props) {
  const rootProps = { size, type, variant, ...restProps };

  const iconSize = {
    small: 'small',
    medium: 'medium',
    large: 'medium',
    jumbo: 'large'
  };
  const startIcon = iconStart
    ? cloneElement(iconStart, { size: iconSize[size] })
    : null;
  const endIcon = iconEnd
    ? cloneElement(iconEnd, { size: iconSize[size] })
    : null;

  return (
    <Root {...rootProps}>
      <Inner>
        {startIcon}
        {children &&
          <Content size={size}>
            {children}
          </Content>}
        {endIcon}
      </Inner>
    </Root>
  );
}
