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
import Media from 'react-media';
import {
  color,
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
import Section from './Section';
import ThemePlayground from './ThemePlayground';
import intro from './intro.md';
import first from './first.md';

// Temp
import magenta from './themes/magenta';
import sky from './themes/sky';
import teal from './themes/teal';

type Props = {};

type State = {
  themeIndex: number
};

const latestPost = {
  title: 'How we built our site using our components',
  url: 'https://medium.com'
};

// Undoing home theme customization
const intermediateTheme = baseTheme => ({
  Button_backgroundColor_primary: baseTheme.color_theme_60,
  Button_backgroundColor_primary_active: baseTheme.color_theme_70,
  Button_backgroundColor_primary_focus: baseTheme.color_theme_60,
  Button_backgroundColor_primary_hover: baseTheme.color_theme_50,
  Button_color_text: baseTheme.color_gray_100,

  Heading_color_3: baseTheme.color_theme_80,

  ...baseTheme
});

const themes = [
  intermediateTheme(magenta),
  intermediateTheme(sky),
  intermediateTheme(teal)
];

const homeTheme = {
  fontFamily: null,
  fontFamily_headline: `franklin-gothic-urw, ${mineralTheme.fontFamily_system}`,

  Button_backgroundColor_primary: 'hsl(13, 62%, 58%)',
  Button_backgroundColor_primary_active: 'hsl(16, 68%, 53%)',
  Button_backgroundColor_primary_focus: 'hsl(13, 62%, 58%)',
  Button_backgroundColor_primary_hover: 'hsl(16, 68%, 63%)',

  Button_color_text: 'hsl(13, 62%, 58%)',

  Heading_color_3: 'hsl(13, 62%, 58%)',
  Heading_fontFamily: `franklin-gothic-urw, ${mineralTheme.fontFamily_system}`,
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
    // Matches interior pages
    paddingBottom: theme.space_inset_md
  }),
  {
    includeStyleReset: true
  }
);

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
    fill: 'hsl(35, 69%, 62%)' // yellow
  },
  '& .band-2': {
    fill: 'hsl(13, 62%, 58%)' // orange
  },
  '& .band-3': {
    fill: 'hsl(203, 21%, 44%)' // slate
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
  '& > div > div ': {
    '@media(max-width: 38.999em)': {
      textAlign: 'center',

      '& > svg': {
        margin: '0 auto',
        maxWidth: '10vh',
        width: '50%'
      }
    },

    '@media(min-width: 39em)': {
      display: 'grid',
      gridTemplateColumns: '1fr 10em',
      gridColumnGap: theme.space_inline_md,

      '& > *': {
        gridColumn: 1,
        textAlign: 'right'
      },

      '& > svg': {
        alignSelf: 'center',
        gridColumn: 2,
        gridRow: '1 / span 2',
        width: '100%'
      }
    }
  }
}));

// $FlowFixMe
const Hero = createStyledComponent(_Hero, {
  // Output
  '@media(max-width: 38.999em)': {
    '> div > div:first-child': {
      bottom: '-12.5em' // Matches change in Header margin due to open menu
    }
  }
});

const Intro = createStyledComponent(Markdown, {
  // Dependent on h2 content
  '& > h2': {
    '@media(max-width: 29.999em)': {
      fontSize: pxToEm(44)
    }
  },

  // All of these numbers are dependent on width of h2 content
  '& > p': {
    '@media(min-width: 52em)': {
      maxWidth: '36em'
    },

    '@media(min-width: 62em)': {
      maxWidth: '41em'
    }
  }
});

const PlaygroundSection = createStyledComponent(Section, ({ index }) => ({
  background: `linear-gradient(
    ${themes[index].color_theme_40},
    ${themes[index].color_theme_80})`
}));

const BlogLink = createStyledComponent(Link, ({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0.4)',
  borderRadius: theme.borderRadius_1,
  padding: `${parseFloat(theme.space_inset_sm) / 2}em`,

  '&::before': {
    backgroundColor: 'hsl(35, 69%, 62%)',
    borderRadius: theme.borderRadius_1,
    bottom: '0.1em',
    color: theme.color_black,
    content: 'New',
    fontSize: '0.8em',
    fontWeight: theme.fontWeight_bold,
    marginRight: theme.space_inline_sm,
    padding: `
      ${parseFloat(theme.space_inset_sm) / 4}em
      ${parseFloat(theme.space_inset_sm) / 2}em
      `,
    position: 'relative',
    textTransform: 'uppercase'
  },

  '&:hover::before': {
    textDecoration: 'none'
  }
}));

const CallsToAction = () => {
  return (
    <Buttons>
      <Button primary size="jumbo">
        Get Started
      </Button>
      <Media
        query="(min-width: 39em)"
        render={() => <Button size="jumbo">View on GitHub</Button>}
      />
    </Buttons>
  );
};

export default class Home extends Component<Props, State> {
  props: Props;

  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      themeIndex: 0
    };
  }

  render() {
    const { themeIndex } = this.state;

    return (
      <Media query="(min-width: 39em)">
        {matches => (
          <ThemeProvider theme={homeTheme}>
            <Root>
              <ThemeProvider theme={heroTheme}>
                <Hero point={matches ? 1 / 4 : 1 / 1000}>
                  <Header latestPost={latestPost} />
                  {latestPost &&
                    matches && (
                      <BlogLink to={latestPost.url}>
                        {latestPost.title}
                        <IconChevronRight size="large" />
                      </BlogLink>
                    )}
                  <Intro anchors={false}>{intro}</Intro>
                  <CallsToAction />
                </Hero>
              </ThemeProvider>
              <First
                clipColor={themes[themeIndex].color_theme_40}
                point={matches ? 3 / 4 : 999 / 1000}>
                <Markdown
                  anchors={false}
                  scope={{ ColoredLogo, IconChevronRight, CTALink }}>
                  {first}
                </Markdown>
              </First>
              <PlaygroundSection index={themeIndex} point={1 / 2}>
                <ThemePlayground
                  index={themeIndex}
                  setIndex={index => {
                    this.setThemeIndex(index);
                  }}
                  themes={themes}
                />
              </PlaygroundSection>
              <Section>
                <Footer />
              </Section>
            </Root>
          </ThemeProvider>
        )}
      </Media>
    );
  }

  setThemeIndex = (index: number) => {
    this.setState({ themeIndex: index });
  };
}
