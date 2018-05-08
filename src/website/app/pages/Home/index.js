/* @flow */
import React, { Component } from 'react';
import Media from 'react-media';
import Helmet from 'react-helmet';
import { canUseDOM } from 'exenv';
import darken from 'polished/lib/color/darken';
import desaturate from 'polished/lib/color/desaturate';
import rgba from 'polished/lib/color/rgba';
import { palette } from 'mineral-ui-tokens';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../library/styles';
import {
  createTheme,
  createThemedComponent,
  ThemeProvider
} from '../../../../library/themes';
import _Button from '../../../../library/Button';
import IconChevronRight from 'mineral-ui-icons/IconChevronRight';
import IconFavorite from 'mineral-ui-icons/IconFavorite';
import Canvas from '../../Canvas';
import Footer from '../../Footer';
import Logo from '../../Logo';
import Section from '../../Section';
import _SiteButton from '../../SiteButton';
import Link from '../../SiteLink';
import _Markdown from '../../Markdown';
import siteColors from '../../siteColors';
import Header from './Header';
import ThemePlayground from './ThemePlayground';
import accessibility from './content/accessibility.md';
import dropInComponents from './content/dropInComponents.md';
import getStarted from './content/getStarted.md';
import guidelines from './content/guidelines.md';
import intro from './content/intro.md';
import themePlayground from './content/themePlayground.md';
const floatingMineralsSvg = require('!!raw-loader!../../../public/images/minerals.svg');

type Props = {};

type State = {
  themeIndex: number
};

const pageMeta = {
  canonicalLink: 'https://mineral-ui.com',
  description:
    'Use Mineral UI’s React component library to quickly build elegantly accessible apps. Created by CA Technologies.',
  title: 'Mineral UI'
};

const latestPost = {
  title: 'Designing Systematic Colors',
  url: 'https://uxplanet.org/designing-systematic-colors-b5d2605b15c'
};

const playgroundThemes = [
  {
    name: 'Magenta',
    ...createTheme({
      colors: { theme: 'magenta' },
      overrides: { fontFamily: null }
    })
  },
  {
    name: 'Purple',
    ...createTheme({
      colors: { theme: 'purple' },
      overrides: { fontFamily: null }
    })
  },
  {
    name: 'Indigo',
    ...createTheme({
      colors: { theme: 'indigo' },
      overrides: { fontFamily: null }
    })
  }
];

const homeTheme = {
  color_theme: siteColors.orangePunch,

  SiteButton_backgroundColor_primary: siteColors.orangePunch,
  SiteButton_backgroundColor_primary_active: siteColors.orangePunch_active,
  SiteButton_backgroundColor_primary_focus: siteColors.orangePunch_focus,
  SiteButton_backgroundColor_primary_hover: siteColors.orangePunch_hover,

  SiteHeading_color_3: siteColors.orangePunch,

  SiteLink_borderColor_focus: siteColors.orangePunch_focus,
  SiteLink_color: siteColors.orangePunch,
  SiteLink_color_active: siteColors.orangePunch_active,
  SiteLink_color_focus: siteColors.orangePunch_focus,
  SiteLink_color_hover: siteColors.orangePunch_hover
};
export const heroTheme = {
  color: palette.white,

  SiteButton_color: darken(0.04, siteColors.slateDarker),

  SiteHeading_color_2: palette.white,

  SiteLink_borderColor_focus: siteColors.orangePunch,
  SiteLink_color: palette.white,
  SiteLink_color_active: palette.gray_10,
  SiteLink_color_focus: palette.white,
  SiteLink_color_hover: palette.white
};
const gettingStartedTheme = {
  color: palette.white,
  color_theme: siteColors.yellow,

  SiteButton_backgroundColor_primary: siteColors.yellow,
  SiteButton_backgroundColor_primary_active: siteColors.yellow_active,
  SiteButton_backgroundColor_primary_focus: siteColors.yellow_focus,
  SiteButton_backgroundColor_primary_hover: siteColors.yellow_hover,

  SiteButton_color: palette.gray_100,
  SiteButton_color_primary: palette.gray_100,

  SiteHeading_color_3: palette.white,
  SiteHeading_color_4: palette.white,

  SiteLink_borderColor_focus: siteColors.yellow,
  SiteLink_color: siteColors.yellow,
  SiteLink_color_active: siteColors.yellow_active,
  SiteLink_color_focus: siteColors.yellow_focus,
  SiteLink_color_hover: siteColors.yellow_hover
};
const buttonTheme = ({ theme: baseTheme }) => ({
  Button_fontWeight: baseTheme.fontWeight_medium,
  Button_height_jumbo: pxToEm(36),
  Button_paddingHorizontal: pxToEm(12), // For a total of 24
  ButtonContent_fontSize: pxToEm(18)
});
const CTALinkTheme = {
  Link_borderColor_focus: siteColors.orangePunch_focus,
  Link_color: siteColors.orangePunch,
  Link_color_active: siteColors.orangePunch_active,
  Link_color_hover: siteColors.orangePunch_hover,
  Link_color_focus: siteColors.orangePunch_focus
};

const styles = {
  blogLink: ({ theme }) => ({
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: theme.borderRadius_1,
    display: 'inline-flex',
    fontFamily: theme.fontFamily_headline,
    fontWeight: theme.fontWeight_regular,
    marginBottom: theme.baseline_6,
    padding: `${parseFloat(theme.space_inset_sm) / 2}em
      ${theme.space_inset_sm}`,
    textDecoration: 'none',

    '&:hover,&:focus': {
      backgroundColor: 'rgba(0,0,0,0.1)',
      textDecoration: 'none'
    },

    '&::before': {
      backgroundColor: theme.color_theme,
      borderRadius: theme.borderRadius_1,
      content: 'New',
      fontSize: '0.8em',
      fontWeight: theme.fontWeight_bold,
      marginRight: theme.space_inline_sm,
      padding: `
      ${parseFloat(theme.space_inset_sm) / 4}em
      ${parseFloat(theme.space_inset_sm) / 2}em
      `,
      textTransform: 'uppercase'
    },

    '& > [role="img"]': {
      display: 'none'
    }
  }),
  button: ({ theme }) => ({
    fontFamily: theme.fontFamily_headline,

    '&:focus': {
      outline: 0
    }
  }),
  buttons: ({ theme }) => ({
    marginTop: theme.baseline_2,

    '& > * + *': {
      marginLeft: theme.space_inline_lg
    }
  }),
  CTALink: ({ theme }) => ({
    alignItems: 'center',
    display: 'inline-flex',
    fontFamily: theme.fontFamily_headline,
    fontWeight: theme.SiteHeading_fontWeight_4,

    '& > svg': {
      flex: '0 0 auto'
    }
  }),
  feature: ({ theme }) => ({
    textAlign: 'center',

    '& + &': {
      marginTop: theme.baseline_6
    },

    [theme.bp_home_navExpanded]: {
      flex: `0 0 ${5 / 12 * 100}%`,
      textAlign: 'left',

      '& + &': {
        marginTop: 0
      }
    }
  }),
  featureImg: ({ circleFill, theme }) => ({
    backgroundColor: circleFill,
    borderRadius: theme.baseline_5,
    height: theme.baseline_5,
    marginBottom: `${parseFloat(theme.baseline_1) - 0.3}em`, // Optical adjustment
    padding: theme.baseline_1,
    width: theme.baseline_5
  }),
  featureSection: ({ theme }) => ({
    // Inner
    '& > div': {
      [theme.bp_home_navExpanded]: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }
  }),
  floatingMinerals: ({ theme }) => ({
    height: 150,
    margin: `0 auto ${theme.baseline_2}`,
    width: 300,

    [theme.bp_home_bigH3]: {
      margin: `0 auto ${theme.baseline_3}`
    },

    [theme.bp_home_guidelinesMultiColumn]: {
      height: 300,
      flex: `0 0 300px`,
      order: 2,
      margin: 0
    },

    '& .pile': {
      display: 'none',

      [theme.bp_home_guidelinesMultiColumn]: {
        display: 'block'
      }
    }
  }),
  getStarted: ({ theme }) => ({
    // Specificity hack
    '& > h3[id]': {
      margin: `0 0 ${getNormalizedValue(
        theme.baseline_6,
        theme.SiteHeading_fontSize_3_wide
      )}`,
      textAlign: 'center',
      textShadow: theme.textShadow,

      [theme.bp_home_smallH3AndDown]: {
        margin: `0 0 ${getNormalizedValue(
          theme.baseline_6,
          theme.SiteHeading_fontSize_3
        )}`
      }
    },

    '& > ol': {
      counterReset: 'getStarted',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },

    '& li': {
      counterIncrement: 'getStarted',
      paddingTop: `${2.5 + parseFloat(theme.baseline_1)}em`,
      position: 'relative',

      [theme.bp_home_getStartedLeftAlign]: {
        paddingTop: 0
      },

      '& + li': {
        marginTop: theme.baseline_6
      },

      '&::before': {
        backgroundColor: theme.color_theme,
        borderRadius: '0.75em',
        content: 'counter(getStarted)',
        color: theme.color_gray_100,
        fontSize: '1.5em',
        fontWeight: theme.fontWeight_extraBold,
        height: '1.5em',
        left: '50%',
        position: 'absolute',
        textAlign: 'center',
        top: 0,
        transform: 'translateX(-50%)',
        width: '1.5em',

        [theme.bp_home_getStartedLeftAlign]: {
          fontSize: '1em',
          height: '1.5em',
          left: 'auto',
          right: `calc(100% + ${theme.space_inline_md})`,
          top: '0.05em', // Optical adjustment
          transform: 'none',
          width: '1.5em'
        }
      },

      '& strong': {
        lineHeight: theme.lineHeight_prose,
        fontWeight: theme.SiteHeading_fontWeight_4,
        textShadow: theme.textShadow
      }
    },

    '& :not(pre) > code': {
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
      color: theme.color
    },

    // Specificity hack
    '& pre[class]': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      maxHeight: 'none'
    }
  }),
  getStartedBackgrounds: ({ theme }) => ({
    '& > :nth-child(2)': {
      background: `linear-gradient(
        rgba(0,0,0,0.4),
        ${theme.color_gray_100} 75%
      )`
    }
  }),
  getStartedContent: ({ theme }) => ({
    margin: '0 auto',
    maxWidth: 'min-content',
    textAlign: 'center',

    [theme.bp_home_getStartedLeftAlign]: {
      textAlign: 'left'
    },

    // Edge/IE don't support `min-content`
    [theme.bp_home_guidelinesMultiColumn]: {
      width: '70%'
    },

    // Logo
    '& > svg': {
      display: 'block',
      margin: `0 auto ${theme.baseline_2}`,
      width: '52px'
    }
  }),
  getStartedSection: ({ theme }) => ({
    position: 'relative',

    '& ::selection': {
      backgroundColor: 'rgba(255,255,255,0.2)'
    },

    // Inner
    '& > div': {
      [theme.bp_moreSpacious]: {
        paddingTop: theme.baseline_7 // Optical adjustment
      }
    }
  }),
  guidelines: ({ theme }) => ({
    textAlign: 'center',

    [theme.bp_home_guidelinesMultiColumn]: {
      flex: `1 1 auto`,
      marginLeft: `${1 / 12 * 100}%`,
      marginRight: `${1 / 12 * 100}%`,
      order: 1,
      textAlign: 'right'
    },

    // Dependent on h2 & p content
    '& > p': {
      '@media(min-width: 66.5em)': {
        marginLeft: '3em'
      },

      '@media(min-width: 69.5em)': {
        marginLeft: '4.5em'
      },

      '@media(min-width: 74em)': {
        marginLeft: '6em'
      },

      '@media(min-width: 76em)': {
        marginLeft: '6.5em'
      }
    }
  }),
  guidelinesSection: ({ theme }) => ({
    // Inner
    '& > div': {
      [theme.bp_home_guidelinesMultiColumn]: {
        alignItems: 'center',
        display: 'flex'
      }
    },

    // Guidelines
    '& > div > :last-child': {
      [theme.bp_home_betweenMoreSpaciousAndGuidelinesMultiColumn]: {
        margin: `0 ${1 / 12 * 100}%`
      }
    }
  }),
  hero: {
    '& ::selection': {
      backgroundColor: 'rgba(255,255,255,0.2)'
    },

    // Inner
    '& > div': {
      paddingTop: 0
    }
  },
  heroCanvas: ({ theme }) => ({
    backgroundColor: 'hsl(199,35%,31%)',

    [theme.bp_home_navCollapsedAndDown]: {
      backgroundColor: 'hsl(199,35%,26%)',
      bottom: '-14.5em' // Matches change in Header margin due to open menu
    }
  }),
  home: ({ theme }) => ({
    '& ::selection': {
      backgroundColor: rgba(theme.color_theme, 0.2)
    }
  }),
  intro: ({ theme }) => ({
    // [1] All of these numbers are dependent on width of h2 content
    '& h2': {
      fontSize: theme.SiteHeading_fontSize_1,
      margin: `0 0 ${getNormalizedValue(
        pxToEm(20), // to baseline
        theme.SiteHeading_fontSize_1
      )}`,
      textShadow: theme.textShadow,

      [theme.bp_moreSpacious]: {
        fontSize: theme.SiteHeading_fontSize_1_wide,
        lineHeight: 1.24, // to baseline
        margin: `0 0 ${getNormalizedValue(
          pxToEm(17), // to baseline
          theme.SiteHeading_fontSize_1_wide
        )}`,
        maxWidth: getNormalizedValue(
          pxToEm(444), // [1]
          theme.SiteHeading_fontSize_1_wide
        )
      },

      // [1]
      '@media(min-width: 60em)': {
        maxWidth: 'none'
      }
    },

    '& > p': {
      textShadow: theme.textShadow,

      [theme.bp_home_navExpanded]: {
        maxWidth: pxToEm(396) // [1]
      },

      // [1]
      '@media(min-width: 60em)': {
        '&[class]': {
          maxWidth: pxToEm(484) // [1]
        }
      }
    },

    // Intro Buttons
    '& + div': {
      marginTop: theme.baseline_4,

      [theme.bp_moreSpacious]: {
        marginTop: theme.baseline_6
      }
    }
  }),
  markdown: ({ theme }) => ({
    '& h3': {
      fontSize: pxToEm(24),
      margin: `0 0 ${getNormalizedValue(
        pxToEm(9), // to baseline
        theme.SiteHeading_fontSize_2
      )}`,

      // Dependent on h3 content
      [theme.bp_home_bigH3]: {
        fontSize: pxToEm(32), // Dependent on length of Guidelines heading (wrapping)
        margin: `0 0 ${getNormalizedValue(
          pxToEm(18),
          theme.SiteHeading_fontSize_2_wide
        )}`
      }
    },

    '& p': {
      margin: `0 0 ${theme.baseline_2}`
    }
  }),
  playgroundCanvas: ({ index }) => ({
    background: `linear-gradient(
      ${playgroundThemes[index].color_theme_40},
      ${desaturate(0.5, playgroundThemes[index].color_theme_10)}
    )`,
    transform: 'scaleX(-1)'
  }),
  playgroundSection: ({ index, theme }) => ({
    position: 'relative',

    '&::before': {
      background: `linear-gradient(
        ${desaturate(0.2, playgroundThemes[index].color_theme_60)},
        ${rgba(desaturate(0.2, playgroundThemes[index].color_theme_60), 0.25)}
      )`,
      bottom: 0,
      content: '""',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0
    },

    // Inner
    '& > div': {
      paddingTop: theme.baseline_3,

      [theme.bp_moreSpacious]: {
        paddingTop: theme.baseline_6
      }
    },

    // Playground
    '& > div > :last-child': {
      [theme.bp_home_guidelinesMultiColumn]: {
        margin: `0 ${1 / 12 * 100}%`
      }
    }
  })
};

const Root = createStyledComponent('div', styles.home, {
  includeStyleReset: true
});
// Markdown must come before all of the other Markdown-based components
const Markdown = createStyledComponent(_Markdown, styles.markdown).withProps({
  anchors: false
});
const SiteButton = createThemedComponent(_SiteButton, buttonTheme);
const BlogLink = createStyledComponent(Link, styles.blogLink);
const Button = createThemedComponent(_Button, buttonTheme);
const Buttons = createStyledComponent('div', styles.buttons);
const ThemedCTALink = createThemedComponent(Link, CTALinkTheme);
const CTALink = createStyledComponent(ThemedCTALink, styles.CTALink);
const Feature = createStyledComponent('div', styles.feature);
const FeatureImg = createStyledComponent('img', styles.featureImg).withProps({
  alt: ''
});
const FloatingMinerals = createStyledComponent('div', styles.floatingMinerals);
const FeatureSection = createStyledComponent(Section, styles.featureSection);
const GetStarted = createStyledComponent(Markdown, styles.getStarted);
const GetStartedBackgrounds = createStyledComponent(
  'div',
  styles.getStartedBackgrounds
);
const GetStartedContent = createStyledComponent(
  'div',
  styles.getStartedContent,
  {
    includeStyleReset: true
  }
);
const GetStartedSection = createStyledComponent(
  Section,
  styles.getStartedSection
);
const Guidelines = createStyledComponent(Markdown, styles.guidelines);
const GuidelinesSection = createStyledComponent(
  Section,
  styles.guidelinesSection
);
const Hero = createStyledComponent(Section, styles.hero).withProps({
  element: 'header'
});
const HeroCanvas = createStyledComponent(Canvas, styles.heroCanvas);
const Intro = createStyledComponent(Markdown, styles.intro);
const LinkButton = createStyledComponent(SiteButton, styles.button).withProps({
  element: Link,
  size: 'jumbo',
  type: null
});
const PlaygroundCanvas = createStyledComponent(Canvas, styles.playgroundCanvas);
const PlaygroundSection = createStyledComponent(
  Section,
  styles.playgroundSection
);

const GetStartedBackground = () => (
  <GetStartedBackgrounds>
    <Canvas />
    <Canvas triangles={false} />
  </GetStartedBackgrounds>
);

export default class Home extends Component<Props, State> {
  _isMounted: boolean;

  state: State = {
    themeIndex: 0
  };

  rotateThemeTimer: ?number;

  componentDidMount() {
    this._isMounted = true;
    this.rotateThemes(this.state.themeIndex);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { themeIndex } = this.state;

    return (
      <ThemeProvider theme={homeTheme}>
        <Media query="(min-width: 39em)">
          {(navExpanded) => (
            <Root>
              <Helmet>
                <link rel="canonical" href={pageMeta.canonicalLink} />
                <meta name="description" content={pageMeta.description} />
                <title>{pageMeta.title}</title>
              </Helmet>

              <ThemeProvider theme={heroTheme}>
                <Media query="(min-width: 48em)">
                  {(moreSpacious) => {
                    /*
                     * [1] These values are dependent on the width of the first
                     *     Hero Button
                     */
                    let heroPoint = 1;
                    if (navExpanded) {
                      heroPoint = '12.25em'; // [1]
                    }
                    if (moreSpacious) {
                      heroPoint = '16.75em'; // [1]
                    }

                    return (
                      <Hero
                        angles={navExpanded ? [7, 8] : [5, 5]}
                        point={heroPoint}>
                        <HeroCanvas />
                        <Header latestPost={latestPost} />
                        {latestPost &&
                          navExpanded && (
                            <BlogLink href={latestPost.url}>
                              {latestPost.title}
                            </BlogLink>
                          )}
                        <Intro>{intro}</Intro>
                        <Buttons>
                          <LinkButton to="/getting-started" primary>
                            Get Started
                          </LinkButton>
                          {navExpanded && (
                            <LinkButton href="https://github.com/mineral-ui/mineral-ui">
                              View on GitHub
                            </LinkButton>
                          )}
                        </Buttons>
                      </Hero>
                    );
                  }}
                </Media>
              </ThemeProvider>

              <GuidelinesSection
                angles={[5, 5]}
                clipColor={desaturate(
                  0.2,
                  playgroundThemes[themeIndex].color_theme_60
                )}
                point={navExpanded ? '75%' : '99.999%'}>
                <FloatingMinerals
                  dangerouslySetInnerHTML={{ __html: floatingMineralsSvg }}
                />
                <Guidelines scope={{ CTALink, IconChevronRight }}>
                  {guidelines}
                </Guidelines>
              </GuidelinesSection>

              <PlaygroundSection
                angles={[5, 3]}
                index={themeIndex}
                point={navExpanded ? '25%' : 1}>
                <PlaygroundCanvas index={themeIndex} />
                <ThemePlayground
                  index={themeIndex}
                  setIndex={(index) => {
                    this.setThemeIndex(index, true);
                  }}
                  themes={playgroundThemes}>
                  <Media query="(min-width: 23em)">
                    {(navExpanded) => {
                      const PlaygroundButton = createStyledComponent(Button, {
                        ...styles.button,
                        fontFamily: 'inherit'
                      }).withProps({
                        element: Link,
                        iconStart: navExpanded ? <IconFavorite /> : undefined,
                        primary: true,
                        size: 'jumbo',
                        type: null
                      });

                      return (
                        <Markdown
                          anchors={false}
                          scope={{
                            Link,
                            PlaygroundButton
                          }}>
                          {themePlayground}
                        </Markdown>
                      );
                    }}
                  </Media>
                </ThemePlayground>
              </PlaygroundSection>

              <FeatureSection>
                <Feature>
                  <FeatureImg
                    circleFill="#efdaf4"
                    src="/images/rocks/accessibility.svg"
                  />
                  <Markdown>{accessibility}</Markdown>
                </Feature>
                <Feature>
                  <FeatureImg
                    circleFill="#d6ebdf"
                    src="/images/rocks/dropInReady.svg"
                  />
                  <Markdown>{dropInComponents}</Markdown>
                </Feature>
              </FeatureSection>

              <GetStartedSection
                angles={[-5, -5]}
                clipColor={palette.white}
                point="50%">
                <GetStartedBackground index={themeIndex} />
                <ThemeProvider theme={gettingStartedTheme}>
                  <GetStartedContent>
                    <Logo />
                    <GetStarted scope={{ Logo }}>{getStarted}</GetStarted>
                    <Buttons>
                      <LinkButton to="/getting-started" primary>
                        Read the full documentation
                      </LinkButton>
                      <Media
                        query="(min-width: 43em)"
                        render={() => (
                          <LinkButton href="https://github.com/mineral-ui/mineral-ui">
                            View on GitHub
                          </LinkButton>
                        )}
                      />
                    </Buttons>
                  </GetStartedContent>
                </ThemeProvider>
              </GetStartedSection>

              <ThemeProvider theme={gettingStartedTheme}>
                <Footer />
              </ThemeProvider>
            </Root>
          )}
        </Media>
      </ThemeProvider>
    );
  }

  rotateThemes = (index: number, isClick?: boolean) => {
    if (canUseDOM) {
      if (isClick) {
        global.clearTimeout(this.rotateThemeTimer);
        this.rotateThemeTimer = undefined;
      }
      const newIndex = index < playgroundThemes.length - 1 ? index + 1 : 0;
      this.rotateThemeTimer = global.setTimeout(() => {
        this.setThemeIndex(newIndex);
      }, 12000);
    }
  };

  setThemeIndex = (index: number, isClick?: boolean) => {
    if (this._isMounted) {
      this.setState({ themeIndex: index }, () => {
        this.rotateThemes(index, isClick);
      });
    }
  };
}
