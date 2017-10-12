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
import { createStyledComponent, color } from '../../../../utils';
import Button from '../../../../Button';
import ThemeProvider from '../../../../ThemeProvider';
import Footer from '../../Footer';
import Markdown from '../../Markdown';
import _Background from './Background';
import Header from './Header';
import intro from './intro.md';
import first from './first.md';

const homeTheme = {
  borderColor: color.gray_90,
  color_caption: color.gray_50,
  color_text: color.white,

  Button_backgroundColor_primary: color.orange_60,
  Button_backgroundColor_primary_active: color.orange_70,
  Button_backgroundColor_primary_focus: color.orange_60,
  Button_backgroundColor_primary_hover: color.orange_50,

  Button_color_text: color.orange_60,

  Heading_color_2: color.white,
  Heading_color_3: color.orange_40,

  Link_color: color.white,
  Link_color_active: color.gray_10,
  Link_color_hover: color.white,
  Link_color_focus: color.white
};

const Root = createStyledComponent(
  'div',
  {},
  {
    includeStyleReset: true
  }
);

// $FlowFixMe
const Background = createStyledComponent(_Background, {
  height: '105vh',
  left: 0,
  position: 'absolute',
  right: 0,
  transform: 'skewY(10deg) translateY(-10vh)',
  zIndex: '-1'
});

const Buttons = createStyledComponent('div', ({ theme }) => ({
  '& > * + *': {
    marginLeft: theme.space_inline_lg
  }
}));

const Intro = createStyledComponent(Markdown, {
  minHeight: '85vh',
  width: '50%'
});

const Main = createStyledComponent('div', ({ theme }) => ({
  padding: `${parseFloat(theme.space_inset_sm) * 8}em`
}));

const CallsToAction = () => {
  return (
    <Buttons>
      <Button primary size="jumbo">
        Get Started
      </Button>
      <Button size="jumbo">View on GitHub</Button>
    </Buttons>
  );
};

export default function Theming() {
  return (
    <Root>
      <Background />
      <ThemeProvider theme={homeTheme}>
        <Header />
      </ThemeProvider>
      <Main>
        <ThemeProvider theme={homeTheme}>
          <Intro scope={{ CallsToAction }}>{intro}</Intro>
        </ThemeProvider>
        <Markdown>{first}</Markdown>
        <Footer />
      </Main>
    </Root>
  );
}
