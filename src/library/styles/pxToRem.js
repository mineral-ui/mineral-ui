/* @flow */
import normalizeToDocument from './normalizeToDocument';

const REGEX_NUM_OR_END_IN_PX = /^[\d.]+(px)?$/;

const convert = (input: number, documentFontSize?: number | string): string =>
  normalizeToDocument(input / 16, { documentFontSize });

const errorMsg = (actual) => {
  const value = typeof actual === 'string' ? actual : typeof actual;
  return `[mineral-ui/styles/pxToRem]: Expected a number or string in px units. Instead got: '${value}'.`;
};

/**
 * Helper to convert a px value to rems, relative to the multiplied document root font-size
 */
export default function pxToRem(
  value: number | string,
  { documentFontSize }: { documentFontSize?: number | string } = {}
) {
  if (typeof value === 'number') {
    return convert(value, documentFontSize);
  }
  if (typeof value === 'string' && REGEX_NUM_OR_END_IN_PX.test(value)) {
    return convert(parseFloat(value), documentFontSize);
  }
  throw new Error(errorMsg(value));
}
