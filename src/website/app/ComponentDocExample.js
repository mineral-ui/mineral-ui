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
import { createStyledComponent, getNormalizedValue } from '../../utils';
import Callout from './Callout';
import Heading from './Heading';
import Link from './Link';
import LiveProvider from './LiveProvider';
import Markdown from './Markdown';

type Props = {
  backgroundColor?: string,
  description?: React$Node,
  hideSource?: boolean,
  id: string,
  scope: Object,
  source: string,
  title?: React$Node
};

const styles = {
  componentDocExample: ({ theme }) => ({
    paddingBottom: `${parseFloat(theme.space_stack_sm) * 8}em`,

    '& + &': {
      borderTop: `1px solid ${theme.borderColor}`
    }
  }),
  description: ({ theme }) => ({
    margin: `0 0 ${theme.space_stack_xl}`
  }),
  title: ({ theme }) => ({
    margin: `0 0 ${getNormalizedValue(
      theme.space_stack_xl,
      theme.fontSize_h3
    )}`,
    paddingTop: `${parseFloat(
      getNormalizedValue(theme.space_stack_sm, theme.fontSize_h3)
    ) * 8}em`
  }),
  titleLink: ({ theme }) => ({
    color: theme.color_gray_80 // h2
  })
};

const Root = createStyledComponent('div', styles.componentDocExample);
const Description = createStyledComponent(Markdown, styles.description);
const Title = createStyledComponent(Heading, styles.title);
const TitleLink = createStyledComponent(Link, styles.titleLink);

export default function ComponentDocExample({
  backgroundColor,
  description,
  hideSource,
  id,
  scope,
  source,
  title,
  ...restProps
}: Props) {
  const rootProps = { ...restProps };
  const liveProviderProps = {
    backgroundColor,
    hideSource,
    scope,
    source
  };

  return (
    <Root {...rootProps}>
      <Title level={3} id={id}>
        <TitleLink to={id}>{title}</TitleLink>
      </Title>
      <Description scope={{ Callout }}>{description || ''}</Description>
      <LiveProvider {...liveProviderProps} />
    </Root>
  );
}
