/* @flow */
import React, { Component } from 'react';
import { createStyledComponent, pxToEm } from '../../../../library/styles';
import {
  createTheme,
  mineralTheme,
  ThemeProvider
} from '../../../../library/themes';
import { type Color } from '../../../../library/themes/generated/palette';
import _Intro from '../../Intro';
import ControlPanel from './ControlPanel';
import Demo from './Demo';
import content from './paletteDemo.md';

type Props = {};

type State = {
  activeColor: Color,
  theme: { [string]: any }
};

const breakpoints = {
  bp_mobile: '@media(max-width: 45em)',
  bp_tablet: '@media(max-width: 70em)'
};
const availableThemes = [
  'magenta',
  'purple',
  'indigo',
  'blue',
  'sky',
  'teal',
  'slate',
  'dusk'
];

const styles = {
  intro: ({ theme }) => ({
    marginBottom: pxToEm(83), // to baseline

    [theme.bp_moreSpacious]: {
      marginBottom: pxToEm(101) // to baseline
    }
  }),
  leftColumn: ({ theme }) => ({
    marginRight: theme.baseline_3,

    [breakpoints.bp_tablet]: {
      marginRight: 0
    }
  }),
  mobileSticky: ({ theme }) => ({
    display: 'none',
    position: 'sticky',
    top: -1,
    zIndex: theme.zIndex_200,

    [breakpoints.bp_tablet]: {
      display: 'block',
      marginBottom: pxToEm(83) // to baseline
    }
  }),
  paragraph: ({ theme }) => ({
    margin: `${parseFloat(theme.fontSize_prose) * theme.lineHeight_prose}em 0`
  }),
  rightColumn: {
    minWidth: '20em',
    width: '20em',

    [breakpoints.bp_tablet]: {
      display: 'none'
    }
  },
  root: ({ theme }) => ({
    display: 'flex',
    position: 'relative',

    '& h1 + p': {
      marginBottom: parseFloat(theme.space_stack_sm) * 10 + 'em'
    }
  })
};

const Root = createStyledComponent('div', styles.root);
const Intro = createStyledComponent(_Intro, styles.intro);
const MobileSticky = createStyledComponent('div', styles.mobileSticky);
const LeftColumn = createStyledComponent('div', styles.leftColumn);
const RightColumn = createStyledComponent('div', styles.rightColumn);

const mineralColor = 'blue';
const defaultTheme = createTheme({
  colors: { theme: mineralColor },
  overrides: {
    ...breakpoints
  }
});

export default class PaletteDemo extends Component<Props, State> {
  state: State = {
    activeColor: mineralColor,
    theme: defaultTheme
  };

  render() {
    const { activeColor, theme } = this.state;
    const controlPanelProps = {
      activeColor,
      availableThemes,
      theme,
      changeTheme: this.handleThemeChange
    };

    return (
      <ThemeProvider theme={{ ...mineralTheme, ...breakpoints }}>
        <Root>
          <LeftColumn {...this.props}>
            <Intro>{content}</Intro>
            <MobileSticky>
              <ControlPanel {...controlPanelProps} />
            </MobileSticky>
            <Demo theme={theme} />
          </LeftColumn>
          <RightColumn>
            <ControlPanel {...controlPanelProps} />
          </RightColumn>
        </Root>
      </ThemeProvider>
    );
  }

  handleThemeChange = (color: Color) => {
    const newTheme = createTheme({ colors: { theme: color } });
    this.setState({ activeColor: color, theme: newTheme });
  };
}
