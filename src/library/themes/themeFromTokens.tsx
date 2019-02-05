/* @flow */
import pxToEm from '../styles/pxToEm';
import colorAliases from './generated/colorAliases';

type Aliases = { [string]: string };
type ColorOptions = {
  aliases?: Aliases,
  color: Ramp | string,
  colorName: string,
  newKey?: (string) => string,
  tokens: ColorTokens
};
type ColorTheme = ColorTokens;
type ColorTokens = { [string]: string };
export type Ramp = { [number]: string };
type Theme = Tokens;
type Tokens = { [string]: number | string };

const contains = (string: string, subString: string) =>
  string.indexOf(subString) !== -1;

const newKey = (key) => key.replace('brand', 'theme');

const remToEm = (value: string) => value.replace('rem', 'em');

export default function(tokens: Tokens): Theme {
  return Object.keys(tokens).reduce((acc, key) => {
    let value = tokens[key];
    if (typeof value === 'string') {
      if (value.split('px').length === 2 && !contains(key, 'breakpoint')) {
        value = pxToEm(value);
      } else if (contains(key, 'fontSize')) {
        value = remToEm(value);
      }
    }

    acc[newKey(key)] = value;
    return acc;
  }, {});
}

export function themeFromColorTokens({
  aliases = colorAliases,
  color,
  colorName,
  tokens
}: ColorOptions): ColorTheme {
  return Object.keys(tokens).reduce((acc, key) => {
    let value = tokens[key];
    if (typeof color === 'string') {
      value = color;
    } else {
      const rampKey = parseInt(aliases[key].split('_')[1]);
      if (rampKey) {
        if (color[rampKey]) {
          value = color[rampKey];
        } else {
          throw new Error(`[mineral-ui/themes/createTheme]: colors.${colorName}[${rampKey}] is missing.
  See https://github.com/mineral-ui/mineral-ui/blob/master/packages/mineral-ui-tokens/src/blue.js for an example color ramp.`);
        }
      }
    }

    acc[newKey(key)] = value;
    return acc;
  }, {});
}
