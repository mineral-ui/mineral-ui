/* @flow */
import tokens, { black, brand, gray, palette, white } from 'mineral-ui-tokens';
import createColorRamp from './createColorRamp';
import fontSize_base from './fontSizeBase';
import themeFromTokens from './themeFromTokens';

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
type Ramp = { [string]: string };

const defaultBaseColor = 'blue';

const grayRamp = createColorRamp(gray, 'color_gray_');

const getThemeRamp = (themeRamp?: Ramp) => {
  return themeRamp || createColorRamp(brand, 'color_theme_');
};

export const nonTokenVariables = {
  boxShadow_focusInner: white,
  direction: 'ltr',
  fontSize_base
};

export default function createTheme(
  baseColor?: Colors = defaultBaseColor,
  overrides?: { [string]: any } = {}
): { [string]: any } {
  let themeRamp;
  if (baseColor !== defaultBaseColor) {
    themeRamp = createColorRamp(palette, 'color_theme', baseColor);
  }

  return {
    ...themeFromTokens({ themeRamp, tokens }),
    ...nonTokenVariables,

    ...getThemeRamp(themeRamp),
    color_white: white,
    ...grayRamp,
    color_black: black,

    ...overrides
  };
}
