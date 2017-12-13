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
import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';
import rgba from 'polished/lib/color/rgba';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../styles';
import { mineralTheme, ThemeProvider } from '../../themes';
import Button from '../../Button';
import IconClose from 'mineral-ui-icons/IconClose';
import IconMenu from 'mineral-ui-icons/IconMenu';
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
  demoRoutes?: { [string]: DemoRoute },
  headerContent?: React$Node,
  pageMeta?: {
    canonicalLink?: string,
    description?: string,
    title?: string
  },
  type?: number
};

type DemoRoute = { slug: string, title: string, description: string };

type State = {
  isNavOpen: boolean
};

const pageThemes = [
  {
    borderColor_focus: siteColors.cranberry,
    color_text_primary: siteColors.cranberry,

    navLink_color_active_narrow: lighten(0.19, siteColors.cranberry),

    SiteButton_backgroundColor_primary: siteColors.cranberry,
    SiteButton_backgroundColor_primary_active: siteColors.cranberry_active,
    SiteButton_backgroundColor_primary_focus: siteColors.cranberry_focus,
    SiteButton_backgroundColor_primary_hover: siteColors.cranberry_hover,

    SiteHeading_color_3: siteColors.cranberry,

    SiteLink_borderColor_focus: siteColors.cranberry_focus,
    SiteLink_color: siteColors.cranberry,
    SiteLink_color_active: siteColors.cranberry_active,
    SiteLink_color_focus: siteColors.cranberry_focus,
    SiteLink_color_hover: siteColors.cranberry_hover
  },
  {
    borderColor_focus: siteColors.grape,
    color_text_primary: siteColors.grape,

    navLink_color_active_narrow: lighten(0.18, siteColors.grape),

    SiteButton_backgroundColor_primary: siteColors.grape,
    SiteButton_backgroundColor_primary_active: siteColors.grape_active,
    SiteButton_backgroundColor_primary_focus: siteColors.grape_focus,
    SiteButton_backgroundColor_primary_hover: siteColors.grape_hover,

    SiteHeading_color_3: siteColors.grape,

    SiteLink_borderColor_focus: siteColors.grape_focus,
    SiteLink_color: siteColors.grape,
    SiteLink_color_active: siteColors.grape_active,
    SiteLink_color_focus: siteColors.grape_focus,
    SiteLink_color_hover: siteColors.grape_hover
  },
  {
    borderColor_focus: siteColors.orangePunch,
    color_text_primary: siteColors.orangePunch,

    navLink_color_active_narrow: lighten(0.23, siteColors.orangePunch),

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
  Heading_color_4: siteColors.slateDarker,

  SiteLink_borderColor_focus: siteColors.slateDarker_focus,
  SiteLink_color: siteColors.slateDarker,
  SiteLink_color_active: siteColors.slateDarker_active,
  SiteLink_color_focus: siteColors.slateDarker_focus,
  SiteLink_color_hover: siteColors.slateDarker_hover
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
      overflow: 'hidden', // Neccessary because the nav sidebar is floated
      padding: `0 ${theme.SectionPaddingHorizontalWide} ${theme.baseline_6}`,

      '& > *': {
        boxSizing: 'border-box',

        '& *': {
          boxSizing: 'inherit'
        }
      }
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
        },

        '& a > [role="img"]': {
          borderBottomWidth: 2,
          top: 4
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
          maxWidth: theme.maxTextWidth,

          '& a > [role="img"]': {
            borderBottomWidth: 1,
            top: 2
          }
        }
      }
    }
  }),
  dialog: ({ theme }) => ({
    backgroundColor: rgba(darken(0.3, siteColors.slate), 0.9),
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: theme.zIndex_1600
  }),
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
      textShadow: theme.textShadow,

      [theme.bp_moreSpacious]: {
        marginTop: pxToEm(5)
      }
    },

    '& h1': {
      fontSize: theme.SiteHeading_fontSize_2,
      margin: 0,
      textShadow: theme.textShadow,

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
    zIndex: theme.zIndex_100,

    '&:focus': {
      backgroundColor: theme.color_black,
      boxShadow: 'none'
    },

    '&:hover': {
      backgroundColor: theme.color_gray_100
    },

    '&:active': {
      backgroundColor: siteColors.slateDarker_active
    },

    '& [role="img"]': {
      fill: theme.color_white
    }
  }),
  nav: ({ wide, theme }) => {
    return wide
      ? {
          float: 'left',
          overflow: 'auto',
          paddingRight: pxToEm(20), // room for scrollbar
          paddingTop: pxToEm(21), // Optical adjustment
          position: 'relative',
          textAlign: 'right',
          top: -1,
          width: theme.sidebarWidth,

          '@supports(position:sticky)': {
            maxHeight: '100vh',
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
              color: darken(0.1, theme.color_text_primary),
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
              color: theme.navLink_color_active_narrow,
              position: 'relative',

              '&::before': {
                backgroundColor: theme.navLink_color_active_narrow,
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
    fontFamily: theme.fontFamily_system,

    '& ::selection': {
      backgroundColor: rgba(theme.color_text_primary, 0.2)
    }
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
  },
  wrapInner: {
    minHeight: `calc(100vh - ${pxToEm(39)})` // Footer height
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
const WrapInner = createStyledComponent('div', styles.wrapInner);

export default class Page extends Component<Props, State> {
  state: State = {
    isNavOpen: false
  };

  componentWillUnmount() {
    noScroll.off();
  }

  render() {
    const {
      children,
      chromeless,
      demoRoutes,
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
        {pageMeta.canonicalLink && (
          <link rel="canonical" href={pageMeta.canonicalLink} />
        )}
        <title>{pageMeta.title}</title>
        {pageMeta.description && (
          <meta name="description" content={pageMeta.description} />
        )}
      </Helmet>
    );

    const navNarrow = moreSpacious => {
      if (moreSpacious) {
        noScroll.off();
      } else {
        if (isNavOpen) {
          noScroll.on();

          return (
            <div>
              <Dialog>
                <MenuButton
                  iconStart={<IconClose />}
                  inDialog
                  onClick={this.close.bind(this)}
                />
                <Nav demoRoutes={demoRoutes} contextualTheme={navTheme} />
              </Dialog>
            </div>
          );
        } else {
          noScroll.off();

          return (
            <div>
              <MenuButton
                iconStart={<IconMenu />}
                onClick={this.open.bind(this)}
              />
            </div>
          );
        }
      }
    };

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
              {navNarrow(moreSpacious)}
              <Wrap {...wrapProps}>
                <WrapInner>
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
                    <Nav
                      demoRoutes={demoRoutes}
                      contextualTheme={navThemeWide}
                      wide
                    />
                  )}
                  <Content>{children}</Content>
                </WrapInner>
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
