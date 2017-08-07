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

const headerStyles = {
  display: 'flex',
  padding: '0 2em',
  justifyContent: 'space-between'
};

const Container = createStyledComponent('header', headerStyles);
const Logo = createStyledComponent(_Link, (props, theme) => ({
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
    backgroundColor: 'rgba(230, 230, 230, 1)',
    color: 'orange',
    textAlign: 'center',
    fontSize: '4em',
    fontWeight: 'bold'
  },
  '& > :last-child': {
    color: 'black',
    fontSize: theme.size_medium,
    fontWeight: theme.fontWeight_bold
  }
}));

export default function Header() {
  return (
    <Container>
      <Logo to="/" element={RouterLink}>
        <span>M</span>{/* the logo lives in this span */}
        <span>Mineral UI</span>
      </Logo>
    </Container>
  );
}
