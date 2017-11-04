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
import Helmet from 'react-helmet';
import noScroll from 'no-scroll';
import darken from 'polished/lib/color/darken';
import rgba from 'polished/lib/color/rgba';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../styles';
import { mineralTheme, ThemeProvider } from '../../themes';
import Button from '../../Button';
import IconClose from '../../Icon/IconClose';
import IconMenu from '../../Icon/IconMenu';
import _Canvas from './Canvas';
import _Footer from './Footer';
import Markdown from './Markdown';
import Section from './Section';
import _Nav from './Nav';
import siteColors from './siteColors';
import { heroTheme } from './pages/Home/index';

type Props = {
  children: React$Node,
  chromeless?: boolean,
  demos?: Object,
  headerContent?: React$Node,
  pageMeta?: {
    canonicalLink?: string,
    title?: string
  },
  type?: number
};

type State = {
  isNavOpen: boolean
};

const pageThemes = [
  {
    borderColor_focus: siteColors.teal,
    color_text_primary: siteColors.teal,

    SiteButton_backgroundColor_primary: siteColors.teal,
    SiteButton_backgroundColor_primary_active: siteColors.teal_active,
    SiteButton_backgroundColor_primary_focus: siteColors.teal_focus,
    SiteButton_backgroundColor_primary_hover: siteColors.teal_hover,

    SiteHeading_color_3: siteColors.teal,

    SiteLink_borderColor_focus: siteColors.teal_focus,
    SiteLink_color: siteColors.teal,
    SiteLink_color_active: siteColors.teal_active,
    SiteLink_color_focus: siteColors.teal_focus,
    SiteLink_color_hover: siteColors.teal_hover
  },
  {
    borderColor_focus: siteColors.yellow,
    color_text_primary: siteColors.yellow_dark,
    color_text_onprimary: mineralTheme.color_black,

    SiteButton_backgroundColor_primary: siteColors.yellow,
    SiteButton_backgroundColor_primary_active: siteColors.yellow_active,
    SiteButton_backgroundColor_primary_focus: siteColors.yellow_focus,
    SiteButton_backgroundColor_primary_hover: siteColors.yellow_hover,

    SiteHeading_color_3: siteColors.yellow_dark,

    SiteLink_borderColor_focus: siteColors.yellow_dark_focus,
    SiteLink_color: siteColors.yellow_dark,
    SiteLink_color_active: siteColors.yellow_dark_active,
    SiteLink_color_focus: siteColors.yellow_dark_focus,
    SiteLink_color_hover: siteColors.yellow_dark_hover
  },
  {
    borderColor_focus: siteColors.maroon,
    color_text_primary: siteColors.maroon,

    SiteButton_backgroundColor_primary: siteColors.maroon,
    SiteButton_backgroundColor_primary_active: siteColors.maroon_active,
    SiteButton_backgroundColor_primary_focus: siteColors.maroon_focus,
    SiteButton_backgroundColor_primary_hover: siteColors.maroon_hover,

    SiteHeading_color_3: siteColors.maroon,

    SiteLink_borderColor_focus: siteColors.maroon_focus,
    SiteLink_color: siteColors.maroon,
    SiteLink_color_active: siteColors.maroon_active,
    SiteLink_color_focus: siteColors.maroon_focus,
    SiteLink_color_hover: siteColors.maroon_hover
  }
];

const navTheme = {
  Heading_color_4: mineralTheme.color_gray_30,

  SiteLink_borderColor_focus: mineralTheme.color_white,
  SiteLink_color: mineralTheme.color_gray_30,
  SiteLink_color_focus: mineralTheme.color_white,
  SiteLink_color_hover: mineralTheme.color_white
};

const navThemeWide = {
  Heading_color_4: siteColors.slate,

  SiteLink_borderColor_focus: siteColors.slate_focus,
  SiteLink_color: siteColors.slate,
  SiteLink_color_active: siteColors.slate_active,
  SiteLink_color_focus: siteColors.slate_focus,
  SiteLink_color_hover: siteColors.slate_hover
};

/*
 * [1] The left bleed of the Section needs adjusting due to the nav sidebar.
 *     Point is hardcoded to the Section padding, rather than being prop-driven.
 *     See the comment on Section's styles for more info.
 * [2] Need to target the first `p`s within the Markdown component, up until
 *     an `h2`. Some pages have a wrapping `div` between Content and Markdown
 * [3] These styles provide momentum scrolling on iOS. The overflow value must
 *     be `scroll`
 */
const magic = 18;

const styles = {
  canvas: ({ theme }) => ({
    backgroundColor:
      theme.PageHeader_backgroundColor || theme.color_text_primary,

    [theme.bp_moreSpacious]: {
      left: `calc(-50vw + 50% - ${parseFloat(theme.sidebarWidth) / 2}em)`, // [1]
      right: `calc(-50vw + 50% - ${magic}%)`
    }
  }),
  content: ({ theme }) => ({
    padding: `0 ${theme.SectionPaddingHorizontal} ${theme.baseline_3}`,

    [theme.bp_moreSpacious]: {
      boxSizing: 'content-box',
      marginLeft: theme.sidebarWidth,
      maxWidth: theme.maxContentWidth,
      padding: `0 ${theme.SectionPaddingHorizontalWide} ${theme.baseline_6}`
    },

    // [2]
    '& > .markdown, & > div > .markdown': {
      '& > p': {
        color: theme.color_gray_70,
        fontSize: pxToEm(20),
        fontWeight: '300',
        maxWidth: getNormalizedValue(theme.maxTextWidth, pxToEm(20)),

        [theme.bp_moreSpacious]: {
          fontSize: pxToEm(24),
          maxWidth: getNormalizedValue(theme.maxTextWidth, pxToEm(24))
        }
      },

      // [2]
      '& > h2:first-of-type': {
        marginTop: getNormalizedValue(
          pxToEm(82), // to baseline
          theme.SiteHeading_fontSize_2
        ),

        [theme.bp_moreSpacious]: {
          marginTop: getNormalizedValue(
            pxToEm(97), // to baseline
            theme.SiteHeading_fontSize_2_wide
          )
        },

        '& ~ p': {
          color: 'inherit',
          fontSize: theme.fontSize_prose,
          fontWeight: 'inherit',
          maxWidth: theme.maxTextWidth
        }
      }
    }
  }),
  dialog: {
    backgroundColor: rgba(darken(0.3, siteColors.slate), 0.9),
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 4
  },
  footer: ({ theme }) => ({
    // Inner
    '& > div': {
      margin: 0
    },

    [theme.bp_moreSpacious]: {
      clear: 'both',
      paddingLeft: theme.sidebarWidth
    }
  }),
  header: ({ theme }) => ({
    marginBottom: theme.baseline_3,

    [theme.bp_moreSpacious]: {
      marginBottom: theme.baseline_6
    },

    // Inner
    '& > div': {
      paddingBottom: pxToEm(43), // roughly theme.baseline_4
      paddingTop: pxToEm(29), // roughly theme.baseline_2

      [theme.bp_moreSpacious]: {
        marginLeft: theme.sidebarWidth,
        paddingBottom: pxToEm(74), // roughly theme.baseline_6
        paddingTop: pxToEm(53), // roughly theme.baseline_5

        '&::before': {
          left: `calc(-50vw + 50% - ${theme.SectionPaddingHorizontalWide} -
            ${parseFloat(theme.sidebarWidth) / 2}em)`, // [1]
          width: `calc(50vw - 50% + 2 * ${theme.SectionPaddingHorizontalWide} +
            ${parseFloat(theme.sidebarWidth) / 2}em)` // [1]
        },

        '&::after': {
          right: `calc(-50vw + 50% - ${magic + 1}%)`,
          width: `calc(50vw - 50% + 100% -
            ${theme.SectionPaddingHorizontalWide} + ${magic + 1}%)` // [1]
        }
      }
    },

    // Specificity hack
    '& p[class]': {
      fontFamily: theme.fontFamily_headline,
      fontWeight: '300',
      margin: 0,

      [theme.bp_moreSpacious]: {
        marginTop: pxToEm(5)
      }
    },

    '& h1': {
      fontSize: theme.SiteHeading_fontSize_2,
      margin: 0,

      [theme.bp_moreSpacious]: {
        fontSize: theme.SiteHeading_fontSize_2_wide
      }
    }
  }),
  menuButton: ({ theme }) => ({
    backgroundColor: theme.color_black,
    border: 0,
    position: 'absolute',
    right: pxToEm(30), // Matches Section padding
    top: pxToEm(38), // Matches Section padding + optical adjustment for logo alignment
    zIndex: 3,

    '&:focus': {
      backgroundColor: theme.color_black,
      boxShadow: 'none'
    },

    '&:hover': {
      backgroundColor: theme.color_gray_100
    },

    '&:active': {
      backgroundColor: siteColors.slate_active
    },

    '& [role="icon"]': {
      fill: theme.color_white
    }
  }),
  nav: ({ wide, theme }) => {
    return wide
      ? {
          float: 'left',
          marginTop: pxToEm(20), // to align with baseline of second intro line
          overflow: 'auto',
          paddingRight: pxToEm(20), // room for scrollbar
          position: 'relative',
          textAlign: 'right',
          top: 21, // Optical adjustment
          width: theme.sidebarWidth,

          '@supports(position:sticky)': {
            maxHeight: `calc(100vh - ${pxToEm(39)} - ${pxToEm(20)})`, // Footer height & marginTop
            position: 'sticky'
          },

          '& h2': {
            paddingRight: getNormalizedValue(pxToEm(8), theme.fontSize_h4)
          },

          '& a': {
            paddingLeft: getNormalizedValue(pxToEm(8), theme.fontSize_ui),
            paddingRight: getNormalizedValue(pxToEm(8), theme.fontSize_ui),

            '&.active': {
              backgroundColor: rgba(theme.color_text_primary, 0.15),
              color: theme.color_text_primary,
              position: 'relative',

              '&::before': {
                backgroundColor: theme.color_text_primary,
                bottom: 0,
                content: '""',
                position: 'absolute',
                right: `-${pxToEm(3)}`,
                top: 0,
                width: pxToEm(3)
              }
            }
          }
        }
      : {
          fontSize: pxToEm(20),
          height: '100vh',
          overflowY: 'scroll', // [3]
          WebkitOverflowScrolling: 'touch', // [3]
          // 30px to match Section padding, 80px to make room for close button
          padding: `${pxToEm(30)} ${pxToEm(80)} ${pxToEm(30)} ${pxToEm(30)}`,

          '& a': {
            paddingLeft: 0,

            '&.active': {
              position: 'relative',

              '&::before': {
                backgroundColor: theme.color_text_primary,
                bottom: 2,
                content: '""',
                left: `-${pxToEm(18)}`,
                position: 'absolute',
                top: 2,
                width: pxToEm(6)
              }
            }
          }
        };
  },
  root: ({ theme }) => ({
    fontFamily: theme.fontFamily_system
  }),
  wrap: ({ isNavOpen, theme }) => {
    return isNavOpen
      ? {
          filter: 'blur(5px)',

          [theme.bp_moreSpacious]: {
            filter: 'none'
          }
        }
      : null;
  }
};

const Root = createStyledComponent('div', styles.root, {
  includeStyleReset: true
});
const Canvas = createStyledComponent(_Canvas, styles.canvas);
const Content = createStyledComponent('main', styles.content);
const Dialog = createStyledComponent('div', styles.dialog);
const Footer = createStyledComponent(_Footer, styles.footer);
const Header = createStyledComponent(Section, styles.header).withProps({
  element: 'header'
});
const MenuButton = createStyledComponent(Button, styles.menuButton).withProps({
  circular: true
});
const Nav = createStyledComponent(_Nav, styles.nav, { filterProps: ['wide'] });
const Wrap = createStyledComponent('div', styles.wrap);

export default class Page extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isNavOpen: false
    };
  }

  componentDidMount() {
    noScroll.off();
  }

  render() {
    const {
      children,
      chromeless,
      demos,
      headerContent,
      pageMeta,
      type,
      ...restProps
    } = this.props;
    const { isNavOpen } = this.state;

    const rootProps = { ...restProps };
    const wrapProps = {
      isNavOpen,
      tabIndex: isNavOpen ? '-1' : undefined
    };

    const helmetItems = pageMeta && (
      <Helmet>
        <link rel="canonical" href={pageMeta.canonicalLink} />
        <title>{pageMeta.title}</title>
      </Helmet>
    );

    const navNarrow = (
      <div>
        <MenuButton
          iconStart={<IconMenu />}
          onClick={() => {
            this.open();
          }}
        />
        {isNavOpen && (
          <Dialog>
            <MenuButton
              iconStart={<IconClose />}
              inDialog
              onClick={() => {
                this.close();
              }}
            />
            <Nav demos={demos} contextualTheme={navTheme} />
          </Dialog>
        )}
      </div>
    );

    return chromeless ? (
      <div>
        {helmetItems}
        {children}
      </div>
    ) : (
      <ThemeProvider theme={type !== undefined ? pageThemes[type] : {}}>
        <Media query="(min-width: 48em)">
          {moreSpacious => (
            <Root {...rootProps}>
              {helmetItems}
              {!moreSpacious && navNarrow}
              <Wrap {...wrapProps}>
                {headerContent && (
                  <ThemeProvider theme={heroTheme}>
                    <Header
                      angles={moreSpacious ? [5, 6] : [4, 4]}
                      as="header"
                      point={1 / 1000}>
                      <Canvas />
                      {typeof headerContent === 'string' ? (
                        <Markdown>{headerContent}</Markdown>
                      ) : (
                        headerContent
                      )}
                    </Header>
                  </ThemeProvider>
                )}
                {moreSpacious && (
                  <Nav demos={demos} contextualTheme={navThemeWide} wide />
                )}
                <Content>{children}</Content>
                <Footer />
              </Wrap>
            </Root>
          )}
        </Media>
      </ThemeProvider>
    );
  }

  close() {
    this.setState({ isNavOpen: false }, () => {
      noScroll.off();
    });
  }

  open() {
    this.setState({ isNavOpen: true }, () => {
      noScroll.on();
    });
  }
}
