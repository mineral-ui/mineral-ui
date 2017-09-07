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
import ComponentDoc from './pages/ComponentDoc';
import createKeyMap from './utils/createKeyMap';
import Footer from './Footer';
import _Nav from './Nav';
import Router from './Router';

type Props = {|
  className?: string,
  demos: Object | Array<Object>
|};

const styles = {
  app: ({ theme }) => ({
    fontFamily: theme.fontFamily_system,

    '@media(min-width: 45em)': {
      alignItems: 'stretch',
      display: 'flex',
      minHeight: '100vh'
    }
  }),
  nav: ({ theme }) => ({
    backgroundColor: theme.color_gray_10,
    border: `0 solid ${theme.borderColor}`,
    borderBottomWidth: '1px',

    '@media(min-width: 45em)': {
      borderBottomWidth: '0',
      borderRightWidth: '1px',
      width: `${16 * parseFloat(theme.spacing_double)}em`
    }
  }),
  main: ({ theme }) => ({
    padding: theme.spacing_double,
    width: '100%',

    '@media(min-width: 45em)': {
      padding: `${parseFloat(theme.spacing_quad) * 2}em ${parseFloat(
        theme.spacing_quad
      ) * 4}em ${theme.spacing_quad}`
    }
  })
};

const Root = createStyledComponent('div', styles.app, {
  includeStyleReset: true
});
const Nav = createStyledComponent(_Nav, styles.nav);
const Main = createStyledComponent('main', styles.main);

export default function App({ className, demos }: Props) {
  if (!Array.isArray(demos) && demos.slug) {
    return <ComponentDoc {...demos} />;
  }

  const siteDemos = Array.isArray(demos) ? createKeyMap(demos, 'slug') : demos;

  return (
    <div>
      <Root className={className}>
        <Nav demos={siteDemos} />
        <Main>
          <Router demos={siteDemos} />
          <Footer />
        </Main>
      </Root>
    </div>
  );
}
