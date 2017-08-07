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
import { createStyledComponent } from '@mineral-ui/component-utils';
import _Link from '@mineral-ui/link';

type Props = {
  currentPath?: string
};

const styles = {
  nav: {
    display: 'inline-flex',
    alignItems: 'center',
    height: 100
  },
  link: ({ active }, theme) => {
    return {
      marginRight: theme.spacing_single,
      textDecoration: 'none',
      textTransform: 'uppercase',
      height: '100%',
      paddingTop: '3em',
      color: theme.color_gray_50,
      borderBottom: `5px solid ${active ? theme.color_gray_80 : 'transparent'}`
    };
  }
};

const Root = createStyledComponent('nav', styles.nav);
const Link = createStyledComponent(_Link, styles.link);

const menu = {
  '/getting-started/': 'Getting Started',
  '/guidelines': 'Guidelines',
  '/community': 'Community',
  '/components/': 'Components',
  '/guidelines/theming/': 'Theming',
  '/whats-next': 'What’s Next'
};

export default function TopLevelNav({ currentPath }: Props) {
  return (
    <Root>
      {Object.keys(menu).map(path => {
        return (
          <Link
            key={path}
            active={path === currentPath}
            element={RouterLink}
            to={path}>
            {menu[path]}
          </Link>
        );
      })}
    </Root>
  );
}
