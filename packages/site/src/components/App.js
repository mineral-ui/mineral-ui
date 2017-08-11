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
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStyledComponent } from '@mineral-ui/component-utils';
import createKeyMap from '../utils/createKeyMap';
import ComponentDoc from './ComponentDoc';
import Footer from './Footer';
import TopLevelNav from './TopLevelNav';
import _Nav from './Nav';
import pages from '../pages';

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
  main: {
    width: '100%'
  }
};

const Root = createStyledComponent('div', styles.app, {
  includeStyleReset: true
});
const Nav = createStyledComponent(_Nav, styles.nav);
const Main = createStyledComponent('main', styles.main);

export default function App({ className, demos }: Props) {
  const routes = [];

  if (!Array.isArray(demos) && demos.slug) {
    return <ComponentDoc {...demos} />;
  } else {
    pages.map((page, i) => {
      if (page.sections) {
        page.sections.map((section, j) => {
          if (section.path) {
            routes.push(
              <Route
                key={`section-${j}`}
                path={section.path}
                render={() => <section.component />}
              />
            );
          }
        });
      }
      routes.push(
        <Route
          key={`page-${i}`}
          path={page.path}
          render={() => <page.component />}
        />
      );
    });
  }

  const siteDemos = Array.isArray(demos) ? createKeyMap(demos, 'slug') : demos;

  return (
    <div>
      <Route exact path="/" component={TopLevelNav} />
      <Root className={className}>
        <Nav demos={siteDemos} />
        <Main>
          <Switch>
            {routes}
            <Route
              path="/components/:componentId"
              render={route => {
                const componentId = route.match.params.componentId;
                // $FlowFixMe
                const selectedDemo = siteDemos[componentId];
                return <ComponentDoc {...selectedDemo} />;
              }}
            />
            <Redirect from="/" to="/getting-started" />
          </Switch>
          <Footer />
        </Main>
      </Root>
    </div>
  );
}
