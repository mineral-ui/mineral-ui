/* @flow */
import { bool, node, number, oneOf, oneOfType, string } from 'prop-types';
import { enumToArray } from '../utils';
import { ALIGN, APPEARANCE, FONT_WEIGHT } from './constants';

export const textPropTypes = {
  align: oneOf(enumToArray(ALIGN)),
  appearance: oneOf(enumToArray(APPEARANCE)),
  children: node.isRequired,
  color: string,
  fontWeight: oneOfType([oneOf(enumToArray(FONT_WEIGHT)), number]),
  inherit: bool,
  noMargins: bool,
  parentAs: string,
  truncate: oneOfType([bool, number, string])
};
