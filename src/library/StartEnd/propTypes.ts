/* @flow */
import { arrayOf, node, number, oneOf, oneOfType, string } from 'prop-types';
import { DIRECTION, PRIORITY } from './constants';

const stringOrArrayOfStringsPropType = (constant) => {
  const strings = Object.keys(constant);
  return oneOfType([oneOf(strings), arrayOf(oneOf(strings))]);
};

export const gridPropTypes = {
  breakpoints: arrayOf(oneOfType([number, string])),
  children: node.isRequired,
  direction: stringOrArrayOfStringsPropType(DIRECTION),
  priority: oneOf(Object.keys(PRIORITY))
};
