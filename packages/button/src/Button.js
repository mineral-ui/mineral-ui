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
import { createStyledComponent, styleReset } from '@mineral-ui/style-utils';
import kebabCase from 'lodash.kebabcase';

type Props = {|
  ariaset?: {},
  children?: MnrlReactNode,
  className?: string,
  dataset?: {},
  disabled?: boolean,
  fullWidth?: boolean,
  onPress: Function,
  size?: 'small' | 'regular' | 'big',
  tabIndex?: number,
  type?: 'button' | 'submit',
  variant?: 'danger' | 'minimal' | 'primary' | 'regular' | 'success' | 'warning'
|};

const Root = createStyledComponent('button', (props, theme) => ({
  ...styleReset(theme),

  backgroundColor: (() => {
    if (props.disabled && props.variant !== 'minimal') {
      return theme.color_gray_30;
    } else {
      return {
        regular: theme.Button_color_background || theme.color_gray_10,
        minimal: 'transparent',
        primary: theme.color_background_primary,
        danger: theme.color_background_danger,
        success: theme.color_background_success,
        warning: theme.color_background_warning
      }[props.variant];
    }
  })(),
  borderColor: props.variant === 'regular' && !props.disabled
    ? theme.Button_color_border || theme.color_border
    : 'transparent',
  borderRadius: theme.Button_borderRadius || theme.borderRadius_1,
  borderStyle: 'solid',
  borderWidth: theme.Button_borderWidth || '1px',
  boxShadow:
    props.variant !== 'minimal' &&
      props.variant !== 'regular' &&
      !props.disabled &&
      (theme.Button_shadow || theme.shadow_1),
  color: (() => {
    if (props.disabled) {
      return theme.color_gray_50;
    } else {
      return {
        regular: theme.Button_color_text || theme.color_gray_80,
        minimal: theme.Button_color_link || theme.color_link,
        primary: theme.color_text_onPrimary,
        danger: theme.color_text_onPrimary,
        success: theme.color_text_onPrimary,
        warning: theme.color_text_onPrimary
      }[props.variant];
    }
  })(),
  fontSize: props.size === 'small'
    ? theme.Button_fontSize_small || '0.75rem'
    : theme.Button_fontSize || theme.fontSize_ui,
  fontWeight: theme.Button_fontWeight || theme.fontWeight_bold,
  height: theme[`Button_size_${props.size}`] || theme[`size_${props.size}`],
  paddingLeft: props.size === 'big'
    ? theme.Button_padding_big || theme.spacing_double
    : theme.Button_padding || theme.spacing_single,
  paddingRight: props.size === 'big'
    ? theme.Button_padding_big || theme.spacing_double
    : theme.Button_padding || theme.spacing_single,
  textAlign: 'center',
  width: props.fullWidth && '100%',

  '&:hover': {
    backgroundColor: (() => {
      if (!props.disabled) {
        return {
          regular: theme.Button_color_background_hover || theme.color_gray_20,
          minimal: theme.Button_color_background_hover || theme.color_gray_20,
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
        regular: theme.Button_color_border_focus || theme.color_border_focus,
        minimal: theme.Button_color_border_focus || theme.color_border_focus,
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
        regular: theme.Button_color_background_active || theme.color_theme_10,
        minimal: theme.Button_color_background_active || theme.color_theme_10,
        primary: theme.color_background_active_primary,
        danger: theme.color_background_active_danger,
        success: theme.color_background_active_success,
        warning: theme.color_background_active_warning
      }[props.variant];
    })(),
    borderColor: props.variant === 'regular'
      ? theme.Button_color_border_active || theme.color_border_active
      : 'transparent'
  }
}));

// TODO: extract to new component-utils package

// function passthroughProps(props) {
//   return Object.keys(props).reduce((acc, prop) => {
//     if (prop === 'id') {
//       acc[prop] = props[prop];
//     }
//
//     if (/^data-/.test(prop)) {
//       acc[prop] = props[prop];
//     }
//
//     return acc;
//   }, {});
// }

function customProperties(data, prefix) {
  const props = {};

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      props[`${prefix}-${kebabCase(key)}`] = data[key];
    }
  }

  return props;
}

function datasetProps(dataset) {
  return customProperties(dataset, 'data');
}

function ariaProps(ariaset) {
  return customProperties(ariaset, 'aria');
}

export default function Button({
  ariaset = { label: 'buttons are good' },
  children,
  className,
  dataset,
  disabled,
  fullWidth,
  onPress,
  size = 'regular',
  tabIndex,
  type = 'button',
  variant = 'regular'
}: Props) {
  const rootProps = {
    className,
    dataset,
    disabled,
    fullWidth,
    onClick: onPress,
    size,
    tabIndex,
    type,
    variant,
    ...datasetProps(dataset),
    ...ariaProps(ariaset)
  };

  return <Root {...rootProps}>{children}</Root>;
}
