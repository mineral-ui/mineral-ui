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
import Media from 'react-media';
import {
  createStyledComponent,
  createThemedComponent,
  mineralTheme,
  pxToEm
} from '../../../../utils';
import _Button from '../../../../Button';
import IconChevronRight from '../../../../Icon/IconChevronRight';
import ThemeProvider from '../../../../ThemeProvider';
import Footer from '../../Footer';
import Link from '../../Link';
import Logo from '../../Logo';
import Markdown from '../../Markdown';
import Header from './Header';
import _Hero from './Hero';
import _Section from './Section';
import intro from './intro.md';
import first from './first.md';

const homeTheme = {
  fontFamily: null,
  fontFamily_headline: `nimbus-sans, ${mineralTheme.fontFamily_system}`,

  Button_backgroundColor_primary: 'hsl(13, 62%, 58%)',
  Button_backgroundColor_primary_active: 'hsl(16, 68%, 53%)',
  Button_backgroundColor_primary_focus: 'hsl(13, 62%, 58%)',
  Button_backgroundColor_primary_hover: 'hsl(16, 68%, 63%)',

  Button_color_text: 'hsl(13, 62%, 58%)',

  Heading_color_3: 'hsl(13, 62%, 58%)',
  Heading_fontFamily: `nimbus-sans, ${mineralTheme.fontFamily_system}`,
  Heading_fontSize_2: pxToEm(59),
  Heading_fontSize_3: pxToEm(40),
  Heading_fontWeight_1: '300',
  Heading_fontWeight_2: '300',
  Heading_fontWeight_3: '300',
  Heading_lineHeight: '1.1'
};

const heroTheme = {
  // $FlowFixMe
  borderColor: mineralTheme.color_gray_90,
  // $FlowFixMe
  color_caption: mineralTheme.color_gray_50,
  color_text: mineralTheme.color_white,

  Heading_color_2: mineralTheme.color_white,

  Link_color: mineralTheme.color_white,
  // $FlowFixMe
  Link_color_active: mineralTheme.color_gray_10,
  Link_color_hover: mineralTheme.color_white,
  Link_color_focus: mineralTheme.color_white
};

const Root = createStyledComponent(
  'div',
  ({ theme }) => ({
    paddingBottom: theme.space_inset_md
  }),
  {
    includeStyleReset: true
  }
);

const Section = createStyledComponent(_Section, ({ clip, theme }) => ({
  paddingBottom:
    clip || clip === undefined
      ? `${parseFloat(theme.space_stack_sm) * 24}em`
      : `${parseFloat(theme.space_stack_sm) * 16}em`,
  paddingTop: `${parseFloat(theme.space_stack_sm) * 16}em`
}));

const Button = createThemedComponent(_Button, {
  ButtonContent_fontSize: '1.1em'
});

const Buttons = createStyledComponent('div', ({ theme }) => ({
  '& > * + *': {
    marginLeft: theme.space_inline_lg
  }
}));

const ColoredLogo = createStyledComponent(Logo, {
  '& .band-1': {
    fill: 'hsl(35, 69%, 62%)'
  },
  '& .band-2': {
    fill: 'hsl(13, 62%, 58%)'
  },
  '& .band-3': {
    fill: 'hsl(203, 21%, 44%)'
  }
});

const CTALink = createThemedComponent(Link, {
  // $FlowFixMe
  Link_color: mineralTheme.color_gray_80,
  // $FlowFixMe
  Link_color_active: mineralTheme.color_gray_90,
  // $FlowFixMe
  Link_color_hover: mineralTheme.color_gray_70,
  // $FlowFixMe
  Link_color_focus: mineralTheme.color_gray_80
});

const First = createStyledComponent(Section, ({ theme }) => ({
  '& > div': {
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'flex-end'
  },

  '& > div > div': {
    textAlign: 'right',
    marginRight: theme.space_inline_xl,
    width: '50%'
  },

  '& svg': {
    width: '20%'
  }
}));

// $FlowFixMe
const Hero = createStyledComponent(_Hero, {
  height: '90vh',
  maxHeight: '700px'
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

const CallsToAction = () => {
  return (
    <Media query="(min-width: 36em)">
      {matches =>
        matches ? (
          <Buttons>
            <Button primary size="jumbo">
              Get Started
            </Button>
            <Button size="jumbo">View on GitHub</Button>
          </Buttons>
        ) : (
          <Button fullWidth primary size="jumbo">
            Get Started
          </Button>
        )}
    </Media>
  );
};

export default function Home() {
  return (
    <ThemeProvider theme={homeTheme}>
      <Root>
        <ThemeProvider theme={heroTheme}>
          <Hero>
            <Header />
            <Intro anchors={false} scope={{ CallsToAction }}>
              {intro}
            </Intro>
          </Hero>
        </ThemeProvider>
        <First backgroundColor="hsl(13, 62%, 58%)" point={3 / 4}>
          <Markdown anchors={false} scope={{ IconChevronRight, CTALink }}>
            {first}
          </Markdown>
          <ColoredLogo />
        </First>
        <Section point={1 / 2} style={{ backgroundColor: 'hsl(13, 62%, 58%)' }}>
          <div style={{ height: '20em' }} />
        </Section>
        <Section clip={false}>
          <Footer />
        </Section>
      </Root>
    </ThemeProvider>
  );
}
