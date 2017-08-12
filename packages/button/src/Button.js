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
import { ellipsis } from 'polished';
import {
  createStyledComponent,
  pxToEm,
  getNormalizedValue
} from '@mineral-ui/component-utils';

type Props = {
  /** Rendered content of the component */
  children?: MnrlReactNode,
  /** Displays a circular button */
  circular?: boolean,
  /** Disables the button */
  disabled?: boolean,
  /** Stretch Button to fill its container */
  fullWidth?: boolean,
  /** Icon that goes after the children*/
  iconEnd?: React$Element<*>,
  /** Icon that goes before the children */
  iconStart?: React$Element<*>,
  /** Display a minimal button */
  minimal?: boolean,
  /** Called with the click event */
  onClick?: (event: Object) => void,
  /** Display a primary button */
  primary?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Available types */
  type?: 'button' | 'submit',
  /** Available variants */
  variant?: 'regular' | 'danger' | 'success' | 'warning'
};

const buttonTheme = (props, baseTheme) => ({
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
  [`Button_size_${props.size}`]: baseTheme[`size_${props.size}`],

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

const buttonStyles = (props, baseTheme) => {
  let theme = buttonTheme(props, baseTheme);

  if (props.variant !== 'regular') {
    // prettier-ignore
    theme = {
      ...theme,
      Button_backgroundColor_primary: theme[`backgroundColor_${props.variant}`],
      Button_backgroundColor_primary_active: theme[`backgroundColor_${props.variant}_active`],
      Button_backgroundColor_primary_focus: theme[`backgroundColor_${props.variant}_focus`],
      Button_backgroundColor_primary_hover: theme[`backgroundColor_${props.variant}_hover`],
      Button_boxShadow_focus: `0 0 0 1px ${theme[`borderColor_${props.variant}_focus`]}`,
      Button_color_text: theme[`color_text_${props.variant}`],
      Button_color_text_minimal: theme[`color_text_${props.variant}`],
      Button_color_text_primary: theme[`color_text_on${props.variant}`]
    };
  }

  return {
    backgroundColor: (() => {
      if (props.disabled && !props.minimal) {
        return theme.color_gray_30;
      } else if (props.primary) {
        return theme.Button_backgroundColor_primary;
      } else if (props.minimal) {
        return 'transparent';
      } else {
        return theme.Button_backgroundColor;
      }
    })(),
    borderColor:
      props.disabled || props.primary || props.minimal
        ? 'transparent'
        : theme.Button_borderColor,
    borderRadius: props.circular
      ? `${parseFloat(theme[`Button_size_${props.size}`]) / 2}em`
      : theme.Button_borderRadius,
    borderStyle: 'solid',
    borderWidth: `${theme.Button_borderWidth}px`,
    color: (() => {
      if (props.disabled) {
        return theme.color_text_disabled;
      } else if (props.primary) {
        return theme.Button_color_text_primary;
      } else if (props.minimal) {
        return theme.Button_color_text_minimal;
      } else {
        return theme.Button_color_text;
      }
    })(),
    cursor: props.disabled ? 'default' : 'pointer',
    fontWeight: theme.Button_fontWeight,
    height: theme[`Button_size_${props.size}`],
    // Because the small & medium-sized Buttons are shorter than
    // theme.fontSize_base * theme.lineHeight, the text content does not
    // vertically align correctly without setting the lineHeight equal to the
    // smallest fontSize (or smaller).
    lineHeight: theme.ButtonContent_fontSize_small,
    // Because we use boxSizing: 'border-box', we need to substract the borderWidth
    // from the padding to have the fixed height of Root and Content be correct.
    padding: `${parseFloat(theme[`Button_padding_${props.size}`]) -
      parseFloat(pxToEm(theme.Button_borderWidth))}em`,
    verticalAlign: 'middle',
    width: props.fullWidth && '100%',
    '&:focus': {
      backgroundColor: (() => {
        if (props.primary) {
          return theme.Button_backgroundColor_primary_focus;
        } else if (props.minimal) {
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
        if (!props.disabled) {
          if (props.primary) {
            return theme.Button_backgroundColor_primary_hover;
          } else if (props.minimal) {
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
        if (!props.disabled) {
          if (props.primary) {
            return theme.Button_backgroundColor_primary_active;
          } else if (props.minimal) {
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
        props.disabled ||
        props.primary ||
        props.minimal ||
        props.variant !== 'regular'
          ? 'currentColor'
          : theme.Button_backgroundColor_primary,
      display: 'block',
      padding: theme[`ButtonIcon_padding_${props.size}`]
    }
  };
};

const contentStyles = (props, baseTheme) => {
  const theme = buttonTheme(props, baseTheme);

  const fontSize =
    props.size === 'small'
      ? theme.ButtonContent_fontSize_small
      : theme.ButtonContent_fontSize;

  return {
    ...ellipsis('100%'),

    display: 'block',
    fontSize,
    lineHeight: getNormalizedValue(
      theme[`ButtonContent_lineHeight_${props.size}`],
      fontSize
    ),
    padding: `0 ${getNormalizedValue(
      theme[`ButtonContent_padding_${props.size}`],
      fontSize
    )}`
  };
};

const innerStyles = {
  display: 'inline-flex',
  justifyContent: 'center',
  width: '100%'
};

const Root = createStyledComponent('button', buttonStyles, {
  includeStyleReset: true
});
const Content = createStyledComponent('span', contentStyles);
const Inner = createStyledComponent('span', innerStyles);

/**
 * The Button component represents a clickable button.
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
  const startIcon =
    iconStart && React.cloneElement(iconStart, { size: iconSize[size] });
  const endIcon =
    iconEnd && React.cloneElement(iconEnd, { size: iconSize[size] });

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
