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
import { createStyledComponent } from '../../../../utils';
import Heading from '../../Heading';
import Link from '../../Link';
import Markdown from '../../Markdown';

type Props = {
  children?: string,
  className?: string,
  examples?: Array<any>,
  title: string
};

const styles = {
  header: ({ theme }) => ({
    marginBottom: theme.spacing_quad,
    paddingTop: theme.spacing_double
  }),
  lede: ({ theme }) => ({
    fontSize: theme.fontSize_h3,
    lineHeight: theme.lineHeight_prose,
    margin: '0'
  }),
  navElement: ({ theme }) => ({
    display: 'inline-block',
    marginRight: theme.spacing_triple,
    marginBottom: theme.spacing_single,
    borderBottom: '3px solid transparent',
    cursor: 'pointer'
  }),
  subnav: ({ theme }) => ({
    borderBottom: `1px solid ${theme.borderColor}`,
    marginTop: theme.spacing_double,
    marginBottom: 0
  }),
  title: ({ theme }) => ({
    marginRight: 'auto',
    paddingRight: theme.spacing_single
  })
};

const Root = createStyledComponent('header', styles.header);
const Lede = createStyledComponent(Markdown, styles.lede);
const NavElement = createStyledComponent(Link, styles.navElement);
const SubNav = createStyledComponent('nav', styles.subnav);
const Title = createStyledComponent(Heading, styles.title);

export default function DocHeader({
  children,
  className,
  examples,
  title
}: Props) {
  // there is no Examples h2, so we just link to the first example.
  let firstExampleId = 'examples';
  if (examples && examples.length > 0) {
    firstExampleId = examples[0].id;
  }

  return (
    <Root className={className}>
      <Title level={1}>{title}</Title>
      <Lede>{children}</Lede>
      <SubNav>
        {examples &&
          examples.length > 0 && (
            <NavElement href={`#${firstExampleId}`}>Examples</NavElement>
          )}
        <NavElement href="#api-and-theme">API & Theme</NavElement>
        <NavElement href="#usage">Usage</NavElement>
      </SubNav>
    </Root>
  );
}
