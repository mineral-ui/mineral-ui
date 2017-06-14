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
import { createResetComponent } from '@mineral-ui/style-utils';
import { globalProps } from '@mineral-ui/component-utils';

type Props = {|
  ariaset?: { [string]: any },
  children?: MnrlReactNode,
  className?: string,
  dataset?: { [string]: any },
  disabled?: boolean,
  fullWidth?: boolean,
  id?: string,
  minimal?: boolean,
  onClick: () => void,
  primary?: boolean,
  size?: 'small' | 'regular' | 'big',
  tabIndex?: number,
  type?: 'button' | 'submit'
|};

const Root = createResetComponent('button', (props, ctxTheme) => {
  const theme = {
    Button_borderRadius: ctxTheme.borderRadius_1,

    // -----

    Button_borderWidth: '1px',

    // -----

    Button_color_background: ctxTheme.color_gray_10,
    Button_color_background_active: ctxTheme.color_theme_10,
    Button_color_background_focus: ctxTheme.color_gray_10,
    Button_color_background_hover: ctxTheme.color_gray_20,

    Button_color_background_minimal_active: ctxTheme.color_theme_10,
    Button_color_background_minimal_focus: 'transparent',
    Button_color_background_minimal_hover: ctxTheme.color_gray_20,

    Button_color_background_primary: ctxTheme.color_theme_50,
    Button_color_background_primary_active: ctxTheme.color_theme_30,
    Button_color_background_primary_focus: ctxTheme.color_theme_50,
    Button_color_background_primary_hover: ctxTheme.color_theme_40,

    // -----

    Button_color_border: ctxTheme.color_border,
    Button_color_border_active: ctxTheme.color_border_active,
    Button_color_border_focus: ctxTheme.color_border_focus,
    Button_color_border_hover: ctxTheme.color_border,

    Button_color_border_minimal_active: 'transparent',
    Button_color_border_minimal_hover: 'transparent',
    Button_color_border_minimal_focus: ctxTheme.color_border_focus,

    Button_color_border_primary: 'transparent',
    Button_color_border_primary_active: 'transparent',
    Button_color_border_primary_hover: 'transparent',
    Button_color_border_primary_focus: ctxTheme.color_theme_100,

    // -----

    Button_color_text: ctxTheme.color_gray_80,

    Button_color_text_minimal: ctxTheme.color_link,

    Button_color_text_primary: ctxTheme.color_text_onPrimary,

    // -----

    Button_fontSize: ctxTheme.fontSize_ui,
    Button_fontSize_small: '0.75rem',

    // -----

    Button_fontWeight: ctxTheme.fontWeight_bold,

    // -----

    Button_padding: ctxTheme.spacing_single,
    Button_padding_big: ctxTheme.spacing_double,

    // -----

    Button_shadow: ctxTheme.shadow_1,

    // -----

    [`Button_size_${props.size}`]: ctxTheme[`size_${props.size}`],

    // -----

    ...ctxTheme
  };

  return {
    backgroundColor: (() => {
      if (props.disabled && !props.minimal) {
        return theme.color_gray_30;
      } else if (props.primary) {
        return theme.Button_color_background_primary;
      } else if (props.minimal) {
        return 'transparent';
      } else {
        return theme.Button_color_background;
      }
    })(),
    borderColor: (() => {
      if (props.primary && !props.disabled) {
        return theme.Button_color_border_primary;
      } else if (props.disabled || props.minimal) {
        return 'transparent';
      } else if (!props.disabled) {
        return theme.Button_color_border;
      }
    })(),
    borderRadius: theme.Button_borderRadius,
    borderStyle: 'solid',
    borderWidth: theme.Button_borderWidth,
    boxShadow: props.primary && !props.disabled && theme.Button_shadow,
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
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    fontSize: props.size === 'small'
      ? theme.Button_fontSize_small
      : theme.Button_fontSize,
    fontWeight: theme.Button_fontWeight,
    height: theme[`Button_size_${props.size}`],
    paddingLeft: props.size === 'big'
      ? theme.Button_padding_big
      : theme.Button_padding,
    paddingRight: props.size === 'big'
      ? theme.Button_padding_big
      : theme.Button_padding,
    textAlign: 'center',
    width: props.fullWidth && '100%',
    ...ellipsis('100%'),
    '&:focus': {
      backgroundColor: (() => {
        if (props.primary) {
          return theme.Button_color_background_primary_focus;
        } else if (props.minimal) {
          return theme.Button_color_background_minimal_focus;
        } else {
          return theme.Button_color_background_focus;
        }
      })(),
      borderColor: (() => {
        if (props.primary) {
          return theme.Button_color_border_primary_focus;
        } else if (props.minimal) {
          return theme.Button_color_border_minimal_focus;
        } else {
          return theme.Button_color_border_focus;
        }
      })()
    },
    '&:hover': {
      backgroundColor: (() => {
        if (props.disabled) {
          return;
        } else if (props.primary) {
          return theme.Button_color_background_primary_hover;
        } else if (props.minimal) {
          return theme.Button_color_background_minimal_hover;
        } else {
          return theme.Button_color_background_hover;
        }
      })(),
      borderColor: (() => {
        if (!props.disabled) {
          if (props.primary) {
            return theme.Button_color_border_primary_hover;
          } else if (props.minimal) {
            return theme.Button_color_border_minimal_hover;
          } else {
            return theme.Button_color_border_hover;
          }
        }
      })()
    },
    // `:active` must be last, to follow LVHFA order:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:link
    '&:active': {
      backgroundColor: (() => {
        if (props.primary) {
          return theme.Button_color_background_primary_active;
        } else if (props.minimal) {
          return theme.Button_color_background_minimal_active;
        } else {
          return theme.Button_color_background_active;
        }
      })(),
      borderColor: (() => {
        if (props.primary) {
          return theme.Button_color_border_primary_active;
        } else if (props.minimal) {
          return theme.Button_color_border_minimal_active;
        } else {
          return theme.Button_color_border_active;
        }
      })()
    }
  };
});

export default function Button({
  children,
  disabled,
  fullWidth,
  minimal,
  onClick,
  primary,
  size = 'regular',
  type = 'button',
  ...restProps
}: Props) {
  const rootProps = {
    disabled,
    fullWidth,
    minimal,
    onClick,
    primary,
    size,
    type,
    ...globalProps({
      ...restProps
    })
  };

  return <Root {...rootProps}>{children}</Root>;
}
