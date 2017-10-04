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
import { createStyledComponent } from '../../utils';

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
      : theme.color_theme_10,
  borderRadius: theme.borderRadius_1,
  padding: theme.space_inset_md
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
