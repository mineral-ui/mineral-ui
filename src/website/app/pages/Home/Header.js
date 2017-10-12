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

const Root = createStyledComponent('div', ({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  // minHeight: '10em',
  padding: `${parseFloat(theme.space_inset_sm) * 8}em`,
  justifyContent: 'space-between'
}));

const Link = createStyledComponent(_Link, {
  textTransform: 'uppercase'
});

const Logotype = createStyledComponent(Heading, {
  margin: 0
});

const Nav = createStyledComponent('nav', ({ theme }) => ({
  '& > a + a': {
    marginLeft: theme.space_inline_lg
  }
}));

export default function Header() {
  return (
    <Root>
      <Logotype level={1} ariaLabel="Mineral UI">
        MNRL
      </Logotype>
      <Nav>
        <Link to="/color">Guidelines</Link>
        <Link to="/whats-new">What’s New</Link>
        <Link to="/component-status">Components</Link>
      </Nav>
    </Root>
  );
}
