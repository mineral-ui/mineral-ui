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
import { Link as RouterLink } from 'react-router-dom';
import {
  createStyledComponent,
  getNormalizedValue
} from '@mineral-ui/component-utils';
import Link from '@mineral-ui/link';

type Props = {|
  className?: string,
  demos: Object
|};

const styles = {
  nav: ({ theme }) => ({
    padding: theme.spacing_double
  }),
  title: ({ theme }) => ({
    borderBottom: `1px solid ${theme.borderColor}`,
    fontSize: theme.fontSize_h3,
    margin: `0 0 ${getNormalizedValue(
      theme.spacing_double,
      theme.fontSize_h3
    )}`,
    paddingBottom: getNormalizedValue(theme.spacing_double, theme.fontSize_h3)
  }),
  heading: ({ theme }) => ({
    margin: '0',
    fontSize: theme.fontSize_h4
  }),
  list: {
    listStyle: 'none',
    paddingLeft: '0'
  },
  listItem: ({ isSubcomponent, theme }) => ({
    paddingLeft: isSubcomponent && theme.spacing_single,

    '& + li': {
      marginTop: theme.spacing_single
    }
  })
};

const Root = createStyledComponent('nav', styles.nav);
const Title = createStyledComponent('h1', styles.title);
const Heading = createStyledComponent('h2', styles.heading);
const List = createStyledComponent('ol', styles.list);
const ListItem = createStyledComponent('li', styles.listItem);

export default function Nav({ className, demos }: Props) {
  const demoLinks = Object.keys(demos).map(slug => {
    const demo = demos[slug];
    return (
      <ListItem key={slug} isSubcomponent={demo.subcomponent}>
        <Link to={`/components/${slug}`} element={RouterLink}>
          {demo.title}
        </Link>
      </ListItem>
    );
  });

  return (
    <Root className={className}>
      <Title>Mineral UI</Title>
      <Heading>Components</Heading>
      <List>
        {demoLinks}
      </List>
    </Root>
  );
}
