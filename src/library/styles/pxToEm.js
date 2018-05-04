/* @flow */
/**
 * Helper to convert a px value to ems, relative to the base font size
 */
import fontSize_base from '../themes/fontSizeBase';

const REGEX_NUM_OR_END_IN_PX = /^[\d.]+(px)?$/;

const convert = (input: number): string =>
  `${input / parseInt(fontSize_base)}em`;

const errorMsg = (actual) => {
  const value = typeof actual === 'string' ? actual : typeof actual;
  return `[mineral-ui/styles/pxToEm]: Expected a number or string in px units. Instead got: '${value}'.`;
};

export default function pxToEm(value: number | string) {
  if (typeof value === 'number') {
    return convert(value);
  }
  if (typeof value === 'string' && REGEX_NUM_OR_END_IN_PX.test(value)) {
    return convert(parseFloat(value));
  }
  throw new Error(errorMsg(value));
}
