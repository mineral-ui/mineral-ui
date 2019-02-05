/* @flow */
import { node, oneOf, string } from 'prop-types';
import { SHAPE, SIZE } from './constants';

export const avatarPropTypes = {
  abbr: string,
  background: string,
  children: node.isRequired,
  color: string,
  shape: oneOf(Object.keys(SHAPE)),
  size: oneOf(Object.keys(SIZE))
};
