/* @flow */
/**
 * Generates an object of colors with renamed keys from a color palette.
 * This is primarily used to translate plain color objects into theme variables.
 *
 * e.g.
 *    createColorRamp('blue', 'color_theme', color);
 *
 *    returns
 *      {
 *        color_theme_10: '#e6eefc',
 *        color_theme_20: '#c2dbfc',
 *        color_theme_30: '#9dc2fa',
 *        color_theme_40: '#72a5f2',
 *        color_theme_50: '#4a89e8',
 *        color_theme_60: '#2e6fd9',
 *        color_theme_70: '#1f5dc2',
 *        color_theme_80: '#164ea8',
 *        color_theme_90: '#114091',
 *        color_theme_100: '#0f397d
 *      }
 */
export default function createColorRamp(
  inKey: string, // The key of the color in the color palette, excluding the index
  outKey: string, // The key of the color in the returned object, excluding the index
  colors: { [string]: any } // The palette of colors
): {
  [string]: any
} {
  const REGEX_IN_KEY = new RegExp(`^${inKey}`);
  return Object.keys(colors)
    .filter((key) => REGEX_IN_KEY.test(key))
    .reduce((acc, key) => {
      const newKey = key.replace(REGEX_IN_KEY, outKey);
      acc[newKey] = colors[key];
      return acc;
    }, {});
}
