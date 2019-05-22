/* @flow */
import { node, number, oneOf, oneOfType, string } from 'prop-types';
import { SHAPE, SIZE } from './constants';

export const avatarPropTypes = {
  abbr: string,
  background: string,
  children: node.isRequired,
  color: string,
  shape: oneOf(Object.keys(SHAPE)),
  size: oneOfType([number, oneOf(Object.keys(SIZE))])
};
