/* @flow */
import getDocumentFontSize from '../utils/getDocumentFontSize';

const REGEX_NUM_OR_END_IN_REM = /^[\d.]+(rem)?$/;

const normalize = (input: number, documentFontSize?: number | string): string =>
  `${input * (16 / (getDocumentFontSize(documentFontSize) || 16))}rem`;

const errorMsg = (actual) => {
  const value = typeof actual === 'string' ? actual : typeof actual;
  return `[mineral-ui/styles/normalizeToDocument]: Expected a number or string in rem units. Instead got: '${value}'.`;
};

/**
 * Helper to normalize a rem value relative to the documentFontSize
 */
export default function normalizeToDocument(
  value: number | string,
  { documentFontSize }: { documentFontSize?: number | string } = {}
) {
  if (typeof value === 'number') {
    return normalize(value, documentFontSize);
  }
  if (typeof value === 'string' && REGEX_NUM_OR_END_IN_REM.test(value)) {
    return normalize(parseFloat(value), documentFontSize);
  }
  throw new Error(errorMsg(value));
}
