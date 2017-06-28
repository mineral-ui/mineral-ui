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
import ellipsis from 'polished/lib/mixins/ellipsis';
import { createStyledComponent } from '@mineral-ui/component-utils';

type Props = {
  /** Rendered content of the component */
  children?: MnrlReactNode,
  /** Disables the button */
  disabled?: boolean,
  /** Stretch Button to fill its container */
  fullWidth?: boolean,
  /** Display a minimal button */
  minimal?: boolean,
  /** Called with the click event */
  onClick?: (event: Object) => void,
  /** Display a primary button */
  primary?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large',
  /** Available types */
  type?: 'button' | 'submit',
  /** Available variants */
  variant?: 'regular' | 'danger' | 'success' | 'warning'
};

const buttonStyles = (props, baseTheme) => {
  let theme = {
    Button_backgroundColor: baseTheme.color_gray_10,
    Button_backgroundColor_active: baseTheme.color_theme_10,
    Button_backgroundColor_focus: baseTheme.color_gray_10,
    Button_backgroundColor_hover: baseTheme.color_gray_20,
    Button_backgroundColor_minimal_active: baseTheme.color_theme_10,
    Button_backgroundColor_minimal_hover: baseTheme.color_gray_20,
    Button_backgroundColor_primary: baseTheme.color_theme_50,
    Button_backgroundColor_primary_active: baseTheme.color_theme_30,
    Button_backgroundColor_primary_focus: baseTheme.color_theme_50,
    Button_backgroundColor_primary_hover: baseTheme.color_theme_40,
    Button_backgroundImage_primary_active: 'none',
    Button_backgroundImage_primary_hover: `radial-gradient(circle, ${baseTheme.color_theme_40} 0%, ${baseTheme.color_theme_50} 100%)`,
    Button_borderColor: baseTheme.borderColor,
    Button_borderColor_active: baseTheme.borderColor_active,
    Button_borderColor_focus: baseTheme.borderColor_focus,
    Button_borderColor_hover: baseTheme.borderColor,
    Button_borderColor_primary: 'transparent',
    Button_borderColor_primary_active: 'transparent',
    Button_borderColor_primary_hover: 'transparent',
    Button_borderColor_primary_focus: baseTheme.color_theme_100,
    Button_borderRadius: baseTheme.borderRadius_1,
    Button_borderWidth: '1px',
    Button_boxShadow: baseTheme.shadow_1,
    Button_boxShadow_focus: `0 0 0 1px ${baseTheme.borderColor_focus}`,
    Button_boxShadow_minimal_focus: `0 0 0 1px ${baseTheme.borderColor_focus}`,
    Button_boxShadow_primary_focus: `0 0 0 1px ${baseTheme.color_theme_100}, rgba(0,0,0,0.25) 0 2px 2px`,
    Button_color_text: baseTheme.color_gray_80,
    Button_color_text_minimal: baseTheme.color_link,
    Button_color_text_primary: baseTheme.color_text_onprimary,
    Button_fontSize: baseTheme.fontSize_ui,
    Button_fontSize_small: '0.75rem',
    Button_fontWeight: baseTheme.fontWeight_bold,
    Button_padding: baseTheme.spacing_single,
    Button_padding_large: baseTheme.spacing_double,
    [`Button_size_${props.size}`]: baseTheme[`size_${props.size}`],
    ...baseTheme
  };

  if (props.variant !== 'regular') {
    // prettier-ignore
    theme = {
      ...theme,
      Button_backgroundColor_active: theme[`backgroundColor_input_${props.variant}`],
      Button_backgroundColor_minimal_active: theme[`backgroundColor_input_${props.variant}`],
      Button_backgroundColor_primary: theme[`backgroundColor_${props.variant}`],
      Button_backgroundColor_primary_active: theme[`backgroundColor_${props.variant}_active`],
      Button_backgroundColor_primary_focus: theme[`backgroundColor_${props.variant}_focus`],
      Button_backgroundColor_primary_hover: theme[`backgroundColor_${props.variant}_hover`],
      Button_backgroundImage_primary_hover: `radial-gradient(circle, ${theme[`backgroundColor_${props.variant}_active`]} 0%, ${theme[`backgroundColor_${props.variant}`]} 100%)`,
      Button_borderColor_active: theme[`borderColor_${props.variant}`],
      Button_borderColor_focus: theme[`borderColor_${props.variant}_focus`],
      Button_borderColor_minimal_focus: theme[`borderColor_${props.variant}_focus`],
      Button_borderColor_primary_focus: theme[`borderColor_${props.variant}_focus`],
      Button_boxShadow_focus: `0 0 0 1px ${theme[`borderColor_${props.variant}_focus`]}`,
      Button_boxShadow_primary_focus: `0 0 0 1px ${theme[`borderColor_${props.variant}_focus`]}, rgba(0,0,0,0.25) 0 2px 2px`,
      Button_color_text: theme[`backgroundColor_${props.variant}`],
      Button_color_text_minimal: theme[`color_text_${props.variant}`],
      Button_color_text_primary: theme[`color_text_on${props.variant}`]
    };
  }

  return {
    ...ellipsis('100%'),

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
    borderColor: (() => {
      if (props.disabled) {
        return 'transparent';
      } else if (props.primary) {
        return theme.Button_borderColor_primary;
      } else if (props.minimal) {
        return 'transparent';
      } else {
        return theme.Button_borderColor;
      }
    })(),
    borderRadius: theme.Button_borderRadius,
    borderStyle: 'solid',
    borderWidth: theme.Button_borderWidth,
    boxShadow:
      props.primary &&
        !props.minimal &&
        !props.disabled &&
        theme.Button_boxShadow,
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
    fontSize: props.size === 'small'
      ? theme.Button_fontSize_small
      : theme.Button_fontSize,
    fontWeight: theme.Button_fontWeight,
    height: theme[`Button_size_${props.size}`],
    lineHeight: 1,
    paddingLeft: props.size === 'large'
      ? theme.Button_padding_large
      : theme.Button_padding,
    paddingRight: props.size === 'large'
      ? theme.Button_padding_large
      : theme.Button_padding,
    textAlign: 'center',
    width: props.fullWidth && '100%',
    '&:focus, &[data-simulate-focus]': {
      backgroundColor: (() => {
        if (props.primary) {
          return theme.Button_backgroundColor_primary_focus;
        } else if (props.minimal) {
          return theme.Button_backgroundColor_minimal_focus;
        } else {
          return theme.Button_backgroundColor_focus;
        }
      })(),
      borderColor: props.primary
        ? theme.Button_borderColor_primary_focus
        : theme.Button_borderColor_focus,
      boxShadow: props.primary
        ? theme.Button_boxShadow_primary_focus
        : theme.Button_boxShadow_focus,
      '&:hover, &[data-simulate-hover]': {
        borderColor: props.primary
          ? theme.Button_borderColor_primary_focus
          : theme.Button_borderColor_focus
      },
      // `:active` must be last, to follow LVHFA order:
      // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
      '&:active, &[data-simulate-active]': {
        borderColor: theme.Button_borderColor_focus,
        boxShadow: theme.Button_boxShadow_focus
      }
    },
    '&:hover, &[data-simulate-hover]': {
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
      })(),
      backgroundImage: props.disabled
        ? 'none'
        : props.primary && theme.Button_backgroundImage_primary_hover,
      borderColor: (() => {
        if (!props.disabled) {
          if (props.primary) {
            return theme.Button_borderColor_primary_hover;
          } else if (props.minimal) {
            return 'transparent';
          } else {
            return theme.Button_borderColor_hover;
          }
        }
      })()
    },
    // `:active` must be last, to follow LVHFA order:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
    '&:active, &[data-simulate-active]': {
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
      })(),
      backgroundImage:
        props.primary && theme.Button_backgroundImage_primary_active,
      borderColor: (() => {
        if (!props.disabled) {
          if (props.primary) {
            return theme.Button_borderColor_primary_active;
          } else if (props.minimal) {
            return 'transparent';
          } else {
            return theme.Button_borderColor_active;
          }
        }
      })(),
      boxShadow: 'none'
    },
    '&::-moz-focus-inner': { border: 0 }
  };
};

const Root = createStyledComponent('button', buttonStyles, {
  includeStyleReset: true
});

/**
 * The Button component represents a clickable button.
 */
export default function Button({
  children,
  size = 'medium',
  type = 'button',
  variant = 'regular',
  ...restProps
}: Props) {
  const rootProps = {
    size,
    type,
    variant,
    ...restProps
  };

  return <Root {...rootProps}>{children}</Root>;
}
