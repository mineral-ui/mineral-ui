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
  color
} from '../../../../utils';
import Button from '../../../../Button';
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

// $FlowFixMe
const Hero = createStyledComponent(_Hero, {
  height: '90vh',
  maxHeight: '700px'
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

const First = createStyledComponent(Section, ({ theme }) => ({
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
        <First backgroundColor="#dd7c59" point={3 / 4}>
          <Markdown anchors={false} scope={{ IconChevronRight, CTALink }}>
            {first}
          </Markdown>
          <ColoredLogo />
        </First>
        <Section point={1 / 2} style={{ backgroundColor: '#dd7c59' }}>
          <div style={{ height: '20em' }} />
        </Section>
        <Section clip={false}>
          <Footer />
        </Section>
      </Root>
    </ThemeProvider>
  );
}
