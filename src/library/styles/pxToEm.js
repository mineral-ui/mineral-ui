/* @flow */
/**
 * Helper to convert a px value to ems, relative to the base font size
 */
import fontSizeBase from '../themes/fontSizeBase';

export default function pxToEm(value: number) {
  return `${value / fontSizeBase}em`;
}
