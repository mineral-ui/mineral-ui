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
import {
  componentStyleReset,
  createStyledComponent
} from '@mineral-ui/style-utils';
import { globalProps } from '@mineral-ui/component-utils';

type Props = {|
  ariaset?: { [string]: any },
  children?: MnrlReactNode,
  className?: string,
  dataset?: { [string]: any },
  disabled?: boolean,
  fullWidth?: boolean,
  id?: string,
  onClick: () => void,
  size?: 'small' | 'regular' | 'big',
  tabIndex?: number,
  type?: 'button' | 'submit'
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
    ...componentStyleReset(theme),

    backgroundColor: props.disabled
      ? theme.color_gray_30
      : theme.Button_color_background,
    borderColor: props.disabled ? 'transparent' : theme.Button_color_border,
    borderRadius: theme.Button_borderRadius,
    borderStyle: 'solid',
    borderWidth: theme.Button_borderWidth,
    boxShadow: !props.disabled && theme.Button_shadow,
    color: props.disabled ? theme.color_gray_50 : theme.Button_color_text,
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
      backgroundColor: !props.disabled && theme.Button_color_background_hover
    },
    '&:focus': {
      borderColor: theme.Button_color_border_focus
    },
    '&:active': {
      backgroundColor: theme.Button_color_background_active,
      borderColor: theme.Button_color_border_active
    }
  };
});

export default function ButtonBase({
  children,
  disabled,
  fullWidth,
  onClick,
  size = 'regular',
  type = 'button',
  ...restProps
}: Props) {
  const rootProps = {
    disabled,
    fullWidth,
    onClick,
    size,
    type,
    ...globalProps({
      ...restProps
    })
  };

  return <Root {...rootProps}>{children}</Root>;
}
