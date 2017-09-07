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
  bestPractices?: Array<Object>,
  children?: string,
  className?: string,
  componentTheme?: Theme | Array<Theme>,
  examples?: Array<any>,
  propDoc?: Object,
  title: string,
  whenHowToUse?: string
};

type Theme = (theme: Object) => Object;

const styles = {
  header: ({ theme }) => ({
    marginBottom: theme.spacing_quad,
    paddingTop: theme.spacing_double
  }),
  intro: ({ theme }) => ({
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
    marginBottom: theme.spacing_quad
  }),
  title: ({ theme }) => ({
    marginRight: 'auto',
    paddingRight: theme.spacing_single
  })
};

const Root = createStyledComponent('header', styles.header);
const Intro = createStyledComponent(Markdown, styles.intro);
const NavElement = createStyledComponent(Link, styles.navElement);
const SubNav = createStyledComponent('nav', styles.subnav);
const Title = createStyledComponent(Heading, styles.title);

export default function DocHeader({
  bestPractices,
  children,
  className,
  componentTheme,
  examples,
  propDoc,
  title,
  whenHowToUse
}: Props) {
  return (
    <Root className={className}>
      <Title level={1}>
        {title}
      </Title>
      <Intro>
        {children}
      </Intro>
      <SubNav>
        {examples && <NavElement href="#examples">Examples</NavElement>}
        {(propDoc || componentTheme) &&
          <NavElement href="#props">API & Theme</NavElement>}
        {(whenHowToUse || bestPractices) &&
          <NavElement href="#when-how-to-use">Usage</NavElement>}
      </SubNav>
    </Root>
  );
}
