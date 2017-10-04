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

const Container = createStyledComponent('header', ({ theme }) => ({
  display: 'flex',
  padding: `0 ${parseFloat(theme.space_inset_sm) * 4}em`,
  justifyContent: 'space-between'
}));
const Logo = createStyledComponent(Link, ({ theme }) => ({
  // TODO figure out glamorous media queries for mobile
  display: 'inline-flex',
  alignItems: 'center',
  height: 100,
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'none'
  },

  '& > :first-child': {
    display: 'block',
    marginRight: 20,
    borderRadius: 40,
    width: 80,
    height: 80,
    backgroundColor: theme.color_gray_20,
    color: 'orange',
    textAlign: 'center',
    fontSize: '4em'
  },
  '& > :last-child': {
    fontSize: theme.fontSize_h2,
    fontWeight: theme.fontWeight_bold
  }
}));

export default function Header() {
  return (
    <Container>
      <Logo to="/">
        <span>M</span>
        <h1>Mineral UI</h1>
      </Logo>
    </Container>
  );
}
