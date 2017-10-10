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
import { createStyledComponent } from '../../styles';

type Props = {
  children: React$Node,
  variant?: 'regular' | 'success' | 'warning' | 'danger'
};

const Root = createStyledComponent('span', ({ theme, variant }) => {
  const backgroundColor =
    variant === 'regular'
      ? theme.color_theme_60
      : theme[`backgroundColor_${variant}`];

  const color =
    variant === 'regular'
      ? theme.color_text_onprimary
      : theme[`color_text_on${variant}`];

  return {
    backgroundColor,
    borderRadius: theme.borderRadius_1,
    bottom: '0.15em', // optical adjustment for middle vertical alignment
    color,
    fontSize: theme.fontSize_mouse,
    padding: `${theme.space_stack_xs} ${theme.space_inset_sm}`,
    position: 'relative', // optical adjustment for middle vertical alignment
    textTransform: 'uppercase',
    whiteSpace: 'nowrap'
  };
});

export default function Label({
  children,
  variant = 'regular',
  ...restProps
}: Props) {
  const rootProps = { variant, ...restProps };

  return <Root {...rootProps}>{children}</Root>;
}
