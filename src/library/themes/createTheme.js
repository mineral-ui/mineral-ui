/* @flow */
import tokens from 'mineral-ui-tokens';
import createColorRamp from './createColorRamp';
import fontSize_base from './fontSizeBase';
import colorAliases from './generated/colorAliases';
import rampTokens from './generated/groupedByRampJsTokens';
import palette, { type Color } from './generated/palette';
import themeFromTokens, {
  themeFromColorTokens,
  type Ramp
} from './themeFromTokens';

type RampWithInflection = { [number]: string, inflection?: number };
type Colors = {
  black?: string,
  danger?: Color | RampWithInflection,
  gray?: RampWithInflection,
  success?: Color | RampWithInflection,
  theme?: Color | RampWithInflection,
  warning?: Color | RampWithInflection,
  white?: string
};
type Options = ?{
  colors?: Colors,
  overrides?: Object
};
type PrimaryColor = 'theme' | 'danger' | 'success' | 'warning';

const primaryColors: Array<PrimaryColor> = [
  'theme',
  'danger',
  'success',
  'warning'
];

export const nonTokenVariables = (colors: ?Colors) => ({
  boxShadow_focusInner: (colors && colors.white) || palette.white,
  direction: 'ltr',
  fontSize_base
});

const colorOverrides = (colors) =>
  Object.keys(rampTokens).reduce((acc, color) => {
    return colors[color]
      ? {
          ...acc,
          ...themeFromColorTokens({
            color: correctColorType(colors[color], color),
            colorName: color,
            tokens: rampTokens[color]
          })
        }
      : acc;
  }, {});

const correctColorType = (
  colorValue: string | RampWithInflection,
  color: string
): string | Ramp => {
  const isStringColor = ['black', 'white'].indexOf(color) !== -1;

  return typeof colorValue === 'string' && isStringColor
    ? colorValue
    : getRamp(colorValue, color);
};

const getRamp = (color: string | RampWithInflection, keyName: string): Ramp => {
  if (typeof color === 'string') {
    if (palette[color]) {
      return palette[color];
    } else {
      throw new Error(`[mineral-ui/themes/createTheme]: Expected colors.${keyName} to be a color ramp from the mineral-ui palette or a custom color ramp, but got '${color}'.
See https://mineral-ui.com/color#guidelines-ramps for the palette ramps.
See https://github.com/mineral-ui/mineral-ui/blob/master/packages/mineral-ui-tokens/src/blue.js for an example color ramp.`);
    }
  }

  const { inflection: ignoreInflection, ...ramp } = color;
  return ramp;
};

const getWhiteOrBlackTextColor = (color, colors, override) => {
  const black = colors.black || palette.black;
  const white = colors.white || palette.white;

  const inflectionPoints: { [PrimaryColor]: number } = primaryColors.reduce(
    (acc, color) => {
      acc[color] = colorAliases[
        `backgroundColor_${color === 'theme' ? 'brand' : color}Primary`
      ].split('_')[1];
      return acc;
    },
    {}
  );

  return override && typeof override.inflection === 'number'
    ? override.inflection > inflectionPoints[color] ? black : white
    : white;
};

const primaryColorsByVariation = (colors?: Colors = {}) => {
  return primaryColors.reduce((acc, color) => {
    const override = colors[color];
    acc[`color_${color}Primary`] = getWhiteOrBlackTextColor(
      color,
      colors,
      override
    );
    return acc;
  }, {});
};

export default function createTheme(options: Options): Object {
  const colors = options && options.colors;

  const grayRamp =
    colors && colors.gray
      ? createColorRamp(getRamp(colors.gray, 'gray'), 'color_gray_')
      : createColorRamp(palette.gray, 'color_gray_');
  const themeRamp =
    colors && colors.theme
      ? createColorRamp(getRamp(colors.theme, 'theme'), 'color_theme_')
      : createColorRamp(palette.brand, 'color_theme_');

  return {
    ...themeFromTokens(tokens),
    ...nonTokenVariables(colors),

    ...(colors ? colorOverrides(colors) : undefined),
    ...(colors ? primaryColorsByVariation(colors) : undefined),

    ...grayRamp,
    ...themeRamp,
    color_black: (colors && colors.black) || palette.black,
    color_white: (colors && colors.white) || palette.white,

    ...(options && options.overrides)
  };
}
