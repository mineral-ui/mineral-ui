/* @flow */
import { canUseDOM } from 'exenv';

const REGEX_INT_OR_END_IN_PX = /^[\d]+(px)?$/;
const REGEX_PERCENTAGE = /^[\d.]+%$/;

const errorMsg = (actual) => {
  const value = typeof actual === 'string' ? `'${actual}'` : typeof actual;
  // TODO: Make this error message more specific
  return `[mineral-ui]: Expected a number or string in px units or a string in % units for documentFontSize. Instead got: ${value}.`;
};

export default function getDocumentFontSize(
  documentFontSize?: number | string
): number | typeof undefined {
  if (documentFontSize) {
    if (
      typeof documentFontSize === 'number' ||
      (typeof documentFontSize === 'string' &&
        REGEX_INT_OR_END_IN_PX.test(documentFontSize))
    ) {
      return parseFloat(documentFontSize);
    } else if (
      typeof documentFontSize === 'string' &&
      REGEX_PERCENTAGE.test(documentFontSize)
    ) {
      return (parseFloat(documentFontSize) / 100) * 16;
    } else {
      throw new Error(errorMsg(documentFontSize));
    }
  } else if (canUseDOM) {
    return parseFloat(
      window.getComputedStyle(document.documentElement).fontSize
    );
  }

  // TODO: Fallback default for !documentFontSize && !canUseDOM?
}
