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
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { canUseDOM } from 'exenv';
import { createStyledComponent, pxToEm } from '../../utils';
import BaselineGrid from './BaselineGrid';
import Footer from './Footer';
import _Nav from './Nav';
import Router from './Router';
import createKeyMap from './utils/createKeyMap';
import ComponentDoc from './pages/ComponentDoc';
import Home from './pages/Home';

declare var GOOGLE_TRACKING_ID: string;

type Props = {
  children?: any,
  className?: string,
  demos: Object | Array<Object>,
  history: Object,
  location?: any
};

const styles = {
  app: ({ theme }) => ({
    fontFamily: theme.fontFamily_system
  }),
  nav: ({ theme }) => ({
    backgroundColor: theme.color_gray_10,
    border: `0 solid ${theme.borderColor}`,
    borderBottomWidth: '1px',

    '@media(min-width: 45em)': {
      borderBottomWidth: '0',
      borderRightWidth: '1px',
      height: '100vh',
      overflow: 'auto',
      position: 'fixed',
      width: pxToEm(256)
    }
  }),
  main: ({ theme }) => ({
    padding: theme.space_inset_md,

    '@media(min-width: 45em)': {
      marginLeft: pxToEm(256),
      padding: `${parseFloat(theme.space_inset_sm) * 8}em
        ${parseFloat(theme.space_inset_sm) * 16}em
        ${parseFloat(theme.space_inset_sm) * 4}em`
    }
  })
};

const Root = createStyledComponent('div', styles.app, {
  includeStyleReset: true
});
const Nav = createStyledComponent(_Nav, styles.nav);
const Main = createStyledComponent('main', styles.main);

class App extends Component<Props> {
  constructor(props) {
    super(props);

    if (GOOGLE_TRACKING_ID) {
      // Analytics tracking of push state page views
      props.history.listen((location, action) => {
        if (canUseDOM && action === 'PUSH') {
          global.window.gtag('config', GOOGLE_TRACKING_ID, {
            page_path: location.pathname
          });
        }
      });
    }
  }

  props: Props;

  componentDidUpdate(prevProps) {
    if (canUseDOM && this.props.location !== prevProps.location) {
      global.window.scrollTo(0, 0);
    }
  }

  render() {
    const { className, demos } = this.props;

    if (!Array.isArray(demos) && demos.slug) {
      return <ComponentDoc {...demos} />;
    }

    const siteDemos = Array.isArray(demos)
      ? createKeyMap(demos, 'slug')
      : demos;

    return (
      <div>
        <Switch>
          <Route
            exact
            strict
            path="/:url*"
            render={props => <Redirect to={`${props.location.pathname}/`} />}
          />
          <Route path="/" exact component={Home} />
          <Route
            render={route => {
              const isChromeless = route.location.search === '?chromeless';
              return isChromeless ? (
                <Router demos={siteDemos} />
              ) : (
                <Root className={className}>
                  <Nav demos={siteDemos} />
                  <Main>
                    <Router demos={siteDemos} />
                    <Footer />
                  </Main>
                </Root>
              );
            }}
          />
        </Switch>
        <BaselineGrid />
      </div>
    );
  }
}

export default withRouter(App);
