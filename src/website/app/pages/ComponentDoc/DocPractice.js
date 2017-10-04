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
import { createStyledComponent, getNormalizedValue } from '../../../../utils';
import Markdown from '../../Markdown';
import _Heading from '../../Heading';

type Props = {
  backgroundColor?: string,
  children?: string,
  className?: string,
  example?: React$Node,
  title: string,
  type: 'do' | 'dont'
};

const Example = createStyledComponent('div', ({ backgroundColor, theme }) => ({
  backgroundColor,
  border: `1px solid ${theme.borderColor}`,
  marginBottom: theme.space_stack_md,
  padding: theme.space_inset_md
}));
const Title = createStyledComponent(_Heading, ({ type, theme }) => ({
  borderBottom: `2px solid ${type === 'do'
    ? theme.borderColor_success
    : theme.borderColor_danger}`,
  paddingBottom: getNormalizedValue(theme.space_stack_sm, theme.fontSize_h4),

  '& strong': {
    fontSize: theme.fontSize_h2,
    fontWeight: 'inherit'
  }
}));

export default function DocPractice({
  backgroundColor,
  children,
  className,
  example,
  title,
  type
}: Props) {
  return (
    <div className={className}>
      <Title level={4} type={type}>
        {type === 'do' ? <strong>DO</strong> : <strong>DON’T</strong>}
        <br />
        {title}
      </Title>
      <Example backgroundColor={backgroundColor}>
        {typeof example === 'string' ? <Markdown>{example}</Markdown> : example}
      </Example>
      <Markdown>{children}</Markdown>
    </div>
  );
}
