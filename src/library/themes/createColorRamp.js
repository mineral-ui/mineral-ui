/* @flow */
/**
 * Generates an object of colors with renamed keys from a color palette.
 * This is primarily used to translate plain color objects into theme variables.
 *
 * e.g.
 *    createColorRamp(palette.blue, 'color_theme_');
 *
 *    returns
 *      {
 *        color_theme_10: '#f0f5fc',
 *        color_theme_20: '#cfe0fc',
 *        color_theme_30: '#accbfc',
 *        color_theme_40: '#84b1fa',
 *        color_theme_50: '#5691f0',
 *        color_theme_60: '#3272d9',
 *        color_theme_70: '#1d5bbf',
 *        color_theme_80: '#114599',
 *        color_theme_90: '#103570',
 *        color_theme_100: '#15233b'
 *      }
 */
export default function createColorRamp(
  colors: { [number]: string }, // The palette of colors
  outKey: string // The key of the color in the returned object, excluding the index
): {
  [string]: string
} {
  return Object.keys(colors).reduce((acc, key) => {
    acc[`${outKey}${key}`] = colors[parseInt(key)];
    return acc;
  }, {});
}
