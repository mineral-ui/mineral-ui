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
import Link from './Link';
import pages from './pages';

type Props = {
  demos: Object
};

const styles = {
  heading: ({ theme }) => ({
    margin: '0',
    fontSize: theme.fontSize_h4
  }),
  logo: ({ theme }) => ({
    alignItems: 'center',
    borderBottom: `1px solid ${theme.borderColor}`,
    display: 'flex',
    height: 50,
    margin: `0 0 ${theme.space_stack_md}`,
    paddingBottom: theme.space_stack_md,
    textDecoration: 'none',

    '&:hover,&:focus': {
      textDecoration: 'none'
    },

    '& > :first-child': {
      display: 'block',
      marginRight: 10,
      borderRadius: 20,
      width: 40,
      height: 40,
      backgroundColor: theme.color_white,
      color: 'orange',
      textAlign: 'center',
      fontSize: '2em'
    },
    '& > :last-child': {
      fontSize: theme.fontSize_h4,
      fontWeight: theme.fontWeight_bold
    }
  }),
  list: {
    listStyle: 'none',
    paddingLeft: '0'
  },
  listItem: ({ isSubcomponent, theme }) => ({
    paddingLeft: isSubcomponent && theme.space_inline_sm,

    '& + li': {
      marginTop: theme.space_stack_sm
    }
  }),
  nav: ({ theme }) => ({
    padding: theme.space_inset_md,
    backgroundColor: theme.slate_10
  }),
  subsection: ({ theme }) => ({
    marginTop: theme.space_stack_sm,
    listStyle: 'none',
    paddingLeft: theme.space_inline_sm
  })
};

const Root = createStyledComponent('nav', styles.nav);
const Heading = createStyledComponent('h2', styles.heading);
const List = createStyledComponent('ol', styles.list);
const ListItem = createStyledComponent('li', styles.listItem);
const SubSection = createStyledComponent('ul', styles.subsection);
const Logo = createStyledComponent(Link, styles.logo);

export default function Nav({ demos, ...restProps }: Props) {
  const rootProps = { ...restProps };

  const demoLinks = Object.keys(demos).map(slug => {
    const demo = demos[slug];
    return (
      <ListItem key={slug} isSubcomponent={demo.subcomponent}>
        <Link to={`/components/${slug}`}>{demo.title}</Link>
      </ListItem>
    );
  });

  const pageLinks = pages.map((page, i) => {
    return (
      <ListItem key={`page-${i}`}>
        <Link to={page.path}>{page.title}</Link>
        {Array.isArray(page.sections) && (
          <SubSection>
            {page.sections.map((section, j) => {
              if (!page.path) return null;
              const path = section.id
                ? `${page.path}#${section.id}`
                : section.path;
              return (
                <ListItem key={`section-${j}`}>
                  <Link to={path}>{section.title}</Link>
                </ListItem>
              );
            })}
          </SubSection>
        )}
      </ListItem>
    );
  });

  return (
    <Root {...rootProps}>
      <Logo to="/">
        <span>M</span>
        <h1>Mineral UI</h1>
      </Logo>
      <List>{pageLinks}</List>
      <Heading>Components</Heading>
      <List>{demoLinks}</List>
    </Root>
  );
}
