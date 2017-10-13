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
import _Link from '../../Link';
import Logo from '../../Logo';

const Root = createStyledComponent('div', ({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: `${parseFloat(theme.space_inset_sm) * 8}em ${parseFloat(
    theme.space_inset_sm
  ) * 2}em`,

  '@media(min-width: 46em)': {
    alignItems: 'center',
    flexDirection: 'row',
    // Matches that of index's Main
    padding: `${parseFloat(theme.space_inset_sm) * 8}em ${parseFloat(
      theme.space_inset_sm
    ) * 16}em`,
    justifyContent: 'space-between'
  }
}));

const Link = createStyledComponent(_Link, {
  textTransform: 'uppercase'
});

const Logotype = createStyledComponent(Heading, ({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  fontWeight: theme.fontWeight_semiBold,
  margin: `0 0 ${theme.space_stack_lg} 0`,

  '@media(min-width: 46em)': {
    margin: `0 0 0 -${parseFloat(theme.space_inline_sm) + 1}em`
  },

  '& > svg': {
    marginRight: theme.space_inline_sm,
    width: '1em',

    '& [class*="shape"]': {
      fill: theme.color_white
    }
  }
}));

const Nav = createStyledComponent('nav', ({ theme }) => ({
  '& > a + a': {
    marginLeft: theme.space_inline_md,

    '@media(min-width: 46em)': {
      marginLeft: theme.space_inline_lg
    }
  }
}));

export default function Header() {
  return (
    <Root>
      <Logotype level={1} ariaLabel="Mineral UI">
        <Logo /> MNRL
      </Logotype>
      <Nav>
        <Link to="/color">Guidelines</Link>
        <Link to="/whats-new">What’s New</Link>
        <Link to="/component-status">Components</Link>
      </Nav>
    </Root>
  );
}
