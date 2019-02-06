/* @flow */
import { arrayOf, node, number, oneOf, oneOfType, string } from 'prop-types';
import { enumToArray } from '../utils';
import { stringOrStringArray } from '../utils/propTypes';
import { DIRECTION, PRIORITY } from './constants';

export const gridPropTypes = {
  breakpoints: arrayOf(oneOfType([number, string])),
  children: node.isRequired,
  direction: stringOrStringArray(DIRECTION),
  priority: oneOf(enumToArray(PRIORITY))
};
