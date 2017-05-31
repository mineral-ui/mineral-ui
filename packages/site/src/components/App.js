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
import { createStyledComponent, ThemeProvider } from '@mineral-ui/style-utils';
import HelloApp from '../../../hello/src/__demo__/App';
import WorldApp from '../../../world/src/__demo__/App';
import HelloWorldApp from '../../../hello-world/src/__demo__/App';
import StyleUtilsApp from '../../../style-utils/src/__demo__/App';
import Footer from './Footer';
import _Nav from './Nav';
import siteTheme from './siteTheme';
import styleReset from './styleReset';

type Props = {|
  className?: string
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

export default function App({ className }: Props) {
  return (
    <Root className={className}>
      <ThemeProvider theme={{ color_background: siteTheme.color_grayLight }}>
        <Nav />
      </ThemeProvider>
      <Main>
        <HelloApp />
        <WorldApp />
        <HelloWorldApp />
        <StyleUtilsApp />
        <Footer />
      </Main>
    </Root>
  );
}
