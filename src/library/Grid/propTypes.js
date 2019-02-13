/* @flow */
import { arrayOf, node, number, oneOf, oneOfType, string } from 'prop-types';
import { ALIGN_ITEMS } from './constants';

const stringOrArrayOfStringsPropType = (constant) => {
  const strings = Object.keys(constant);
  return oneOfType([oneOf(strings), arrayOf(oneOf(strings))]);
};

export const gridPropTypes = {
  alignItems: stringOrArrayOfStringsPropType(ALIGN_ITEMS),
  breakpoints: arrayOf(oneOfType([number, string])),
  children: node,
  columns: number,
  gutterWidth: oneOfType([number, string])
};

export const gridItemPropTypes = {
  span: oneOfType([number, arrayOf(number)])
};
