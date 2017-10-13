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
import {
  createStyledComponent,
  createThemedComponent,
  color
} from '../../../../utils';
import Button from '../../../../Button';
import IconChevronRight from '../../../../Icon/IconChevronRight';
import ThemeProvider from '../../../../ThemeProvider';
import Footer from '../../Footer';
import Link from '../../Link';
import Logo from '../../Logo';
import Markdown from '../../Markdown';
import _Background from './Background';
import Header from './Header';
import intro from './intro.md';
import first from './first.md';

const homeTheme = {
  Button_backgroundColor_primary: color.orange_60,
  Button_backgroundColor_primary_active: color.orange_70,
  Button_backgroundColor_primary_focus: color.orange_60,
  Button_backgroundColor_primary_hover: color.orange_50,

  Button_color_text: color.orange_60,

  Heading_color_3: color.orange_60
};

const heroTheme = {
  borderColor: color.gray_90,
  color_caption: color.gray_50,
  color_text: color.white,

  Heading_color_2: color.white,

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
  transform: 'skewY(-10deg) translateY(-10vh)',
  zIndex: '-1'
});

const Buttons = createStyledComponent('div', ({ theme }) => ({
  '& > * + *': {
    marginLeft: theme.space_inline_lg
  }
}));

const ColoredLogo = createStyledComponent(Logo, {
  '& .band-1': {
    fill: 'rgb(225,169,90)'
  },
  '& .band-2': {
    fill: 'rgb(214,112,83)'
  },
  '& .band-3': {
    fill: 'rgb(89,118,136)'
  }
});

const CTALink = createThemedComponent(Link, {
  Link_color: color.gray_80,
  Link_color_active: color.gray_90,
  Link_color_hover: color.gray_70,
  Link_color_focus: color.gray_80
});

const Intro = createStyledComponent(Markdown, {
  minHeight: '85vh',

  '@media(min-width: 52em)': {
    width: '70%'
  },

  '@media(min-width: 66.5em)': {
    width: '50%'
  }
});

const First = createStyledComponent('div', ({ theme }) => ({
  alignItems: 'flex-end',
  display: 'flex',
  justifyContent: 'flex-end',

  '& > div': {
    textAlign: 'right',
    marginRight: theme.space_inline_xl,
    width: '50%'
  },

  '& > svg': {
    width: '20%'
  }
}));

const Main = createStyledComponent('div', ({ theme }) => ({
  padding: `0 ${parseFloat(theme.space_inset_sm) * 4}em`,

  '@media(min-width: 46em)': {
    padding: `0 ${parseFloat(theme.space_inset_sm) * 16}em`
  }
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
    <ThemeProvider theme={homeTheme}>
      <Root>
        <Background />
        <ThemeProvider theme={heroTheme}>
          <Header />
        </ThemeProvider>
        <Main>
          <ThemeProvider theme={heroTheme}>
            <Intro anchors={false} scope={{ CallsToAction }}>
              {intro}
            </Intro>
          </ThemeProvider>
          <First>
            <Markdown anchors={false} scope={{ IconChevronRight, CTALink }}>
              {first}
            </Markdown>
            <ColoredLogo />
          </First>
          <Footer />
        </Main>
      </Root>
    </ThemeProvider>
  );
}
