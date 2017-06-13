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
import { createStyledComponent } from '@mineral-ui/style-utils';
import { globalProps, styleReset } from '@mineral-ui/component-utils';

type Props = {|
  ariaset?: {},
  children?: MnrlReactNode,
  className?: string,
  dataset?: {},
  disabled?: boolean,
  fullWidth?: boolean,
  id?: string,
  onClick: Function,
  size?: 'small' | 'regular' | 'big',
  tabIndex?: number,
  type?: 'button' | 'submit',
  variant?: 'danger' | 'minimal' | 'primary' | 'regular' | 'success' | 'warning'
|};

const Root = createStyledComponent('button', (props, ctxTheme) => {
  const theme = {
    Button_borderRadius: ctxTheme.borderRadius_1,
    Button_borderWidth: '1px',
    Button_color_background: ctxTheme.color_gray_10,
    Button_color_background_hover: ctxTheme.color_gray_20,
    Button_color_background_active: ctxTheme.color_ctxTheme_10,
    Button_color_border: ctxTheme.color_border,
    Button_color_border_focus: ctxTheme.color_border_focus,
    Button_color_border_active: ctxTheme.color_border_active,
    Button_color_link: ctxTheme.color_link,
    Button_color_text: ctxTheme.color_gray_80,
    Button_fontSize: ctxTheme.fontSize_ui,
    Button_fontSize_small: '0.75rem',
    Button_fontWeight: ctxTheme.fontWeight_bold,
    Button_padding: ctxTheme.spacing_single,
    Button_padding_big: ctxTheme.spacing_double,
    Button_shadow: ctxTheme.shadow_1,
    [`Button_size_${props.size}`]: ctxTheme[`size_${props.size}`],
    ...ctxTheme
  };

  return {
    ...styleReset(theme),

    backgroundColor: (() => {
      if (props.disabled && props.variant !== 'minimal') {
        return theme.color_gray_30;
      } else {
        return {
          regular: theme.Button_color_background,
          minimal: 'transparent',
          primary: theme.color_background_primary,
          danger: theme.color_background_danger,
          success: theme.color_background_success,
          warning: theme.color_background_warning
        }[props.variant];
      }
    })(),
    borderColor: props.variant === 'regular' && !props.disabled
      ? theme.Button_color_border
      : 'transparent',
    borderRadius: theme.Button_borderRadius,
    borderStyle: 'solid',
    borderWidth: theme.Button_borderWidth,
    boxShadow:
      props.variant !== 'minimal' &&
        props.variant !== 'regular' &&
        !props.disabled &&
        theme.Button_shadow,
    color: (() => {
      if (props.disabled) {
        return theme.color_gray_50;
      } else {
        return {
          regular: theme.Button_color_text,
          minimal: theme.Button_color_link,
          primary: theme.color_text_onPrimary,
          danger: theme.color_text_onDanger,
          success: theme.color_text_onSuccess,
          warning: theme.color_text_onWarning
        }[props.variant];
      }
    })(),
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
    '&:hover': {
      backgroundColor: (() => {
        if (!props.disabled) {
          return {
            regular: theme.Button_color_background_hover,
            minimal: theme.Button_color_background_hover,
            primary: theme.color_background_hover_primary,
            danger: theme.color_background_hover_danger,
            success: theme.color_background_hover_success,
            warning: theme.color_background_hover_warning
          }[props.variant];
        }
      })()
    },
    '&:focus': {
      borderColor: (() => {
        return {
          regular: theme.Button_color_border_focus,
          minimal: theme.Button_color_border_focus,
          primary: theme.color_border_focus_primary,
          danger: theme.color_border_focus_danger,
          success: theme.color_border_focus_success,
          warning: theme.color_border_focus_warning
        }[props.variant];
      })()
    },
    '&:active': {
      backgroundColor: (() => {
        return {
          regular: theme.Button_color_background_active,
          minimal: theme.Button_color_background_active,
          primary: theme.color_background_active_primary,
          danger: theme.color_background_active_danger,
          success: theme.color_background_active_success,
          warning: theme.color_background_active_warning
        }[props.variant];
      })(),
      borderColor: props.variant === 'regular'
        ? theme.Button_color_border_active
        : 'transparent'
    }
  };
});

export default function Button({
  ariaset = { label: 'buttons are good' },
  children,
  disabled,
  fullWidth,
  onClick,
  size = 'regular',
  type = 'button',
  variant = 'regular',
  ...restProps
}: Props) {
  const rootProps = {
    disabled,
    fullWidth,
    onClick,
    size,
    type,
    variant,
    ...globalProps({
      ariaset,
      ...restProps
    })
  };

  return <Root {...rootProps}>{children}</Root>;
}
