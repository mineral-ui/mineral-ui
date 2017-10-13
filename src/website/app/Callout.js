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
import rgba from 'polished/lib/color/rgba';
import { createStyledComponent } from '../../styles';

type Props = {
  children: React$Node,
  className?: string,
  title?: string,
  variant?: 'danger' | 'regular'
};

const Root = createStyledComponent('div', ({ theme, variant }) => ({
  backgroundColor:
    variant === 'danger'
      ? theme.backgroundColor_input_danger
      : rgba(theme.color_text_primary, 0.1),
  borderLeft: `3px solid ${variant === 'danger'
    ? theme.color_text_danger
    : theme.color_text_primary}`,
  padding: theme.baseline_2,

  // These styles from Link. Necessary because you cannot use markdown within
  // this component if it itself is used within Markdown.
  '& a:link': {
    color: theme.SiteLink_color,
    textDecoration: 'none',

    '&:hover': {
      color: theme.SiteLink_color_hover,
      textDecoration: 'underline'
    },
    '&:focus': {
      color: theme.SiteLink_color_focus,
      outline: `1px solid ${theme.SiteLink_borderColor_focus}`,
      outlineOffset: '2px'
    },
    // `:active` must be last, to follow LVHFA order:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
    '&:active': {
      color: theme.SiteLink_color_active
    }
  }
}));
const Title = createStyledComponent('h4', ({ variant, theme }) => ({
  color:
    variant === 'danger' ? theme.color_text_danger : theme.color_text_primary,
  fontSize: '1em',
  fontWeight: theme.fontWeight_semiBold,
  margin: `0 0 ${theme.space_stack_sm}`
}));

export default function Callout({
  children,
  className,
  title = '💡 Info',
  variant = 'regular'
}: Props) {
  return (
    <Root className={className} variant={variant}>
      <Title variant={variant}>{title}</Title>
      {children}
    </Root>
  );
}
