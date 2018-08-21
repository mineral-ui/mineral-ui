/* @flow */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { canUseDOM } from 'exenv';
import lighten from 'polished/lib/color/lighten';
import { pxToEm } from '../../library/styles';
import { mineralTheme, ThemeProvider } from '../../library/themes';
import BaselineGrid from './BaselineGrid';
import Router from './Router';
import RenderCounter from './RenderCounter';
import siteColors from './siteColors';

declare var GOOGLE_TRACKING_ID: string;

type Props = {
  children?: any,
  className?: string,
  history: Object,
  location?: {
    search: string
  }
};

const siteTheme = {
  baseline_1: pxToEm(12),
  baseline_2: pxToEm(12 * 2),
  baseline_3: pxToEm(12 * 3),
  baseline_4: pxToEm(12 * 4),
  baseline_5: pxToEm(12 * 5),
  baseline_6: pxToEm(12 * 6),
  baseline_7: pxToEm(12 * 7),
  baseline_8: pxToEm(12 * 8),
  baseline_9: pxToEm(12 * 9),
  baseline_10: pxToEm(12 * 10),

  bp_moreSpacious: '@media(min-width: 48em)',

  bp_home_smallH3AndDown: '@media(max-width: 28.999em)',
  bp_home_bigH3: '@media(min-width: 29em)',
  bp_home_navCollapsedAndDown: '@media(max-width: 38.999em)',
  bp_home_navExpanded: '@media(min-width: 39em)',
  bp_home_getStartedLeftAlign: '@media(min-width: 43em)',
  bp_home_betweenMoreSpaciousAndGuidelinesMultiColumn:
    '@media(min-width: 48em) and (max-width: 60.999em)',
  bp_home_guidelinesMultiColumn: '@media(min-width: 61em)',

  bp_interior_bestPracticesMultiColumn: '@media(min-width: 61em)',

  maxContentWidth: '70em',
  maxTextWidth: '50em',
  navLink_color_active_narrow: lighten(0.12, siteColors.jade),
  sidebarWidth: pxToEm(200), // 180 + 20 for scrollbar
  textShadow: '2px 2px 2px rgba(0,0,0,0.2)',

  borderColor: siteColors.slate,
  borderColor_theme: siteColors.jade,
  borderColor_theme_focus: siteColors.jade_focus,
  borderColor_theme_hover: siteColors.jade_hover,
  color: mineralTheme.color_gray_80,
  color_theme: siteColors.jade,
  fontFamily: null,
  fontFamily_headline: `franklin-gothic-urw, ${mineralTheme.fontFamily_system}`,
  fontWeight_medium: 500,

  icon_color_theme: siteColors.jade,

  SectionPaddingHorizontal: pxToEm(30),
  SectionPaddingHorizontalWide: pxToEm(100),
  SectionPaddingVertical: pxToEm(12 * 6), // theme.baseline_6
  SectionPaddingVerticalWide: pxToEm(12 * 10), // theme.baseline_10

  SiteButton_backgroundColor_hover: mineralTheme.color_white,
  SiteButton_backgroundColor_primary: siteColors.jade,
  SiteButton_backgroundColor_primary_active: siteColors.jade_active,
  SiteButton_backgroundColor_primary_focus: siteColors.jade_focus,
  SiteButton_backgroundColor_primary_hover: siteColors.jade_hover,

  SiteHeading_color_2: siteColors.slateDarker,
  SiteHeading_color_3: siteColors.jade,
  SiteHeading_color_4: siteColors.slateDarker,
  SiteHeading_fontFamily: `franklin-gothic-urw, ${
    mineralTheme.fontFamily_system
  }`,
  SiteHeading_fontSize_1: pxToEm(40),
  SiteHeading_fontSize_1_wide: pxToEm(48),
  SiteHeading_fontSize_2: pxToEm(33),
  SiteHeading_fontSize_2_wide: pxToEm(40),
  SiteHeading_fontSize_3: pxToEm(23),
  SiteHeading_fontSize_3_wide: pxToEm(28),
  SiteHeading_fontSize_4: pxToEm(18),
  SiteHeading_fontSize_4_wide: pxToEm(22),
  SiteHeading_fontWeight_1: '300',
  SiteHeading_fontWeight_2: '300',
  SiteHeading_fontWeight_3: '300',
  SiteHeading_fontWeight_4: '500',
  SiteHeading_lineHeight_1: '1.1',
  SiteHeading_lineHeight_2: '1.2',
  SiteHeading_lineHeight_3: '1.5',
  SiteHeading_lineHeight_4: '1.5',

  SiteLink_borderColor_focus: siteColors.jade_focus,
  SiteLink_color: siteColors.jade,
  SiteLink_color_active: siteColors.jade_active,
  SiteLink_color_focus: siteColors.jade_focus,
  SiteLink_color_hover: siteColors.jade_hover
};

class App extends Component<Props> {
  constructor(props) {
    super(props);

    if (GOOGLE_TRACKING_ID) {
      // Analytics tracking of push state page views
      props.history.listen((location, action) => {
        if (canUseDOM && action === 'PUSH') {
          global.window.gtag('config', GOOGLE_TRACKING_ID, {
            page_path: location.pathname
          });
        }
      });
    }
  }

  showRenderCounter = () => {
    const { search } = this.props.location || '';
    return (
      process.env.NODE_ENV !== 'production' && search.includes('chromeless')
    );
  };

  render() {
    return (
      <ThemeProvider>
        <ThemeProvider theme={siteTheme}>
          <div>
            <Router />
            <BaselineGrid />
            {this.showRenderCounter() && <RenderCounter />}
          </div>
        </ThemeProvider>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
