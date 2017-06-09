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
import { createStyledComponent, ThemeProvider } from '@mineral-ui/style-utils';
import DemoList from './DemoList';
import Footer from './Footer';
import _Nav from './Nav';
import siteTheme from './siteTheme';
import styleReset from './styleReset';

type Props = {|
  className?: string,
  demos: Array<Object>
|};

const styles = {
  app: (props, theme) => ({
    ...styleReset(theme),
    '@media(min-width: 45em)': {
      alignItems: 'stretch',
      display: 'flex',
      minHeight: '100vh'
    }
  }),
  nav: (props, theme) => ({
    border: `0 solid ${theme.color_gray}`,
    borderBottomWidth: '1px',

    '@media(min-width: 45em)': {
      borderBottomWidth: '0',
      borderRightWidth: '1px',
      width: `${16 * parseFloat(theme.measurement_c)}rem`
    }
  }),
  main: {
    width: '100%'
  }
};

const Root = createStyledComponent('div', styles.app);
const Nav = createStyledComponent(_Nav, styles.nav);
const Main = createStyledComponent('main', styles.main);

export default function App({ className, demos }: Props) {
  if (demos.length === 1) {
    return <DemoList demos={demos} />;
  }

  return (
    <Root className={className}>
      <ThemeProvider theme={{ color_background: siteTheme.color_grayLight }}>
        <Nav demos={demos} />
      </ThemeProvider>
      <Main>
        <Switch>
          <Route
            path="/components/:componentId"
            render={route => {
              const componentId = route.match.params.componentId;
              const filteredDemos = demos.filter(
                demo => demo.slug === componentId
              );

              return <DemoList demos={filteredDemos} />;
            }}
          />
          <Redirect from="/" to="/components/hello" />
        </Switch>
        <Footer />
      </Main>
    </Root>
  );
}
