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
import { createStyledComponent } from '@mineral-ui/style-utils';

type Props = {|
  children?: MnrlReactNode,
  className?: string,
  disabled?: boolean,
  onPress: Function,
  size?: 'small' | 'regular' | 'big',
  type?: 'button' | 'submit',
  variant?: 'danger' | 'minimal' | 'primary' | 'regular' | 'success' | 'warning'
|};

const Root = createStyledComponent('button', (props, theme) => ({
  // TODO: global reset
  boxSizing: 'border-box',
  fontFamily: `${theme.fontFamily}, ${theme.fontFamily_system}`,
  lineHeight: theme.lineHeight,
  outline: 0,

  backgroundColor: (() => {
    if (props.disabled && props.variant !== 'minimal') {
      return theme.color_gray_30;
    } else {
      return {
        regular: theme.color_gray_10,
        minimal: 'transparent',
        primary: theme.color_background_primary,
        danger: theme.color_background_danger,
        success: theme.color_background_success,
        warning: theme.color_background_warning
      }[props.variant];
    }
  })(),
  borderColor: props.variant === 'regular' && !props.disabled
    ? theme.color_border
    : 'transparent',
  borderRadius: theme.borderRadius_1,
  borderStyle: 'solid',
  borderWidth: '1px',
  boxShadow: props.variant !== 'minimal' &&
    props.variant !== 'regular' &&
    !props.disabled
    ? theme.shadow_1
    : null,
  color: (() => {
    if (props.disabled) {
      return theme.color_gray_50;
    } else {
      return {
        regular: theme.color_gray_80,
        minimal: theme.color_link,
        primary: theme.color_text_onPrimary,
        danger: theme.color_text_onPrimary,
        success: theme.color_text_onPrimary,
        warning: theme.color_text_onPrimary
      }[props.variant];
    }
  })(),
  fontSize: props.size === 'small' ? '0.75rem' : theme.fontSize_ui,
  fontWeight: theme.fontWeight_bold,
  height: theme[`size_${props.size}`],
  paddingLeft: props.size === 'big'
    ? theme.spacing_double
    : theme.spacing_single,
  paddingRight: props.size === 'big'
    ? theme.spacing_double
    : theme.spacing_single,

  '&:hover': {
    backgroundColor: (() => {
      if (!props.disabled) {
        return {
          regular: theme.color_gray_20,
          minimal: theme.color_gray_10,
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
        regular: theme.color_border_focus,
        minimal: theme.color_border_focus,
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
        regular: theme.color_theme_10,
        minimal: theme.color_theme_10,
        primary: theme.color_background_active_primary,
        danger: theme.color_background_active_danger,
        success: theme.color_background_active_success,
        warning: theme.color_background_active_warning
      }[props.variant];
    })(),
    borderColor: props.variant === 'regular'
      ? theme.color_border_active
      : 'transparent'
  }
}));

export default function Button({
  children,
  className,
  disabled,
  onPress,
  size = 'regular',
  type = 'button',
  variant = 'regular'
}: Props) {
  const rootProps = {
    className,
    disabled,
    onClick: onPress,
    size,
    type,
    variant
  };

  return <Root {...rootProps}>{children}</Root>;
}
