/* @flow */
import React from 'react';
import colors from '../../../../library/colors';
import { createStyledComponent } from '../../../../library/styles';
import { createColorRamp, ThemeProvider } from '../../../../library/themes';
import Paragraph from '../../Paragraph';
import ColorRamp from './ColorRamp';
import Picker from './Picker';

type Props = {
  activeColor: Colors,
  availableThemes: Array<Colors>,
  changeTheme: (Colors) => void,
  theme: { [string]: any }
};

type Colors =
  | 'blue'
  | 'dusk'
  | 'indigo'
  | 'magenta'
  | 'purple'
  | 'sky'
  | 'slate'
  | 'teal';

const styles = {
  description: ({ theme }) => ({
    [theme.bp_tablet]: {
      display: 'none'
    }
  }),
  root: ({ theme }) => ({
    position: 'sticky',
    top: -1,
    backgroundColor: 'white',
    padding: `${theme.space_inset_md} ${theme.space_inset_md} 0`,
    zIndex: theme.zIndex_200,
    [theme.bp_tablet]: {
      padding: `${theme.space_inset_md} 0 0`
    }
  }),
  themeSwatches: ({ theme }) => ({
    display: 'flex',
    '& div': {
      flex: '0 0 50%',
      position: 'relative'
    },
    [theme.bp_tablet]: {
      display: 'none'
    }
  })
};

const Root = createStyledComponent('div', styles.root);
const Description = createStyledComponent(Paragraph, styles.description);
const ThemeSwatches = createStyledComponent('div', styles.themeSwatches);

export default function ControlPanel({
  activeColor,
  availableThemes,
  changeTheme,
  theme
}: Props) {
  const themeRamp = createColorRamp(activeColor, 'color_theme', colors);
  const grayRamp = createColorRamp('gray', 'gray', colors);

  return (
    <Root>
      <ThemeProvider theme={theme}>
        <div>
          <Picker
            activeColor={activeColor}
            availableThemes={availableThemes}
            changeTheme={changeTheme}
          />
          <Description>
            A theme is composed of a hue color ramp and the base gray ramp.
            Every theme uses the base gray ramp.
          </Description>
          <ThemeSwatches>
            <ColorRamp ramp={themeRamp} />
            <ColorRamp ramp={grayRamp} />
          </ThemeSwatches>
        </div>
      </ThemeProvider>
    </Root>
  );
}
