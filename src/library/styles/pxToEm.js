/* @flow */
/**
 * Helper to convert a px value to ems, relative to the base font size
 */
import fontSize_base from '../themes/fontSizeBase';

export default function pxToEm(value: number | string) {
  const input =
    typeof value === 'string' ? parseInt(value.replace('px', '')) : value;
  return `${input / parseInt(fontSize_base)}em`;
}
