/* @flow */
import colors from '../colors';
import createColorRamp from './createColorRamp';
import tokens from './tokens';

type Colors =
  | 'blue'
  | 'bronze'
  | 'dusk'
  | 'gray'
  | 'green'
  | 'indigo'
  | 'magenta'
  | 'purple'
  | 'red'
  | 'sky'
  | 'slate'
  | 'teal';

export const defaultBaseColor = 'blue';

export default function createTheme(
  baseColor?: Colors = defaultBaseColor,
  overrides?: { [string]: any } = {}
): { [string]: any } {
  const themeRamp = createColorRamp(baseColor, 'color_theme', colors);

  return {
    ...tokens.reduce((acc, token) => {
      const values = Object.keys(token).map((key) => token[key])[0];
      const returnedValues =
        typeof values === 'function' ? values(themeRamp) : values;
      return Object.assign(acc, returnedValues);
    }, {}),
    ...overrides
  };
}
