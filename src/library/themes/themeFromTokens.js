/* @flow */
import colorAliases from 'mineral-ui-tokens/colorAliases';
import pxToEm from '../styles/pxToEm';

type Args = { themeRamp?: Ramp, tokens: Tokens };
export type Ramp = { [string]: string };
export type Theme = Tokens;
type Tokens = { [string]: number | string };

const contains = (string: string, subString: string) =>
  string.indexOf(subString) !== -1;

const remToEm = (value: string) => value.replace('rem', 'em');

/*
 * Tokens can have "brand" values, e.g. `color_brand: 'brand_60'`. This creates
 * a map between those keys and the appropriate `color_theme` (60, above), which
 * is then used when a non-default base color is used to create a theme. In the
 * default case, the `color_brand` token's value is simply used directly.
 */
const themeRampMap = Object.keys(colorAliases)
  .filter((key) => key.indexOf('brand') !== -1)
  .reduce((acc, key) => {
    acc[key] = colorAliases[key].replace('brand', 'color_theme');
    return acc;
  }, {});

export default function themeFromTokens({ themeRamp, tokens }: Args): Theme {
  return Object.keys(tokens).reduce((acc, key) => {
    const isBrandKey = contains(key, 'brand');
    const value = tokens[key];

    const newKey = isBrandKey ? key.replace('brand', 'theme') : key;
    let newValue = value;

    if (typeof value === 'string') {
      if (isBrandKey) {
        newValue = (themeRamp && themeRamp[themeRampMap[key]]) || tokens[key];
      } else if (contains(key, 'fontSize')) {
        newValue = remToEm(value);
      } else if (
        value.split('px').length === 2 &&
        !contains(key, 'breakpoint')
      ) {
        newValue = pxToEm(value);
      }
    }

    acc[newKey] = newValue;
    return acc;
  }, {});
}
