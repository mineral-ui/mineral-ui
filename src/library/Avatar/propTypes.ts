/* @flow */
import { node, oneOf, string } from 'prop-types';
import { enumToArray } from '../utils';
import { SHAPE, SIZE } from './constants';

export const avatarPropTypes = {
  abbr: string,
  background: string,
  children: node.isRequired,
  color: string,
  shape: oneOf(enumToArray(SHAPE)),
  size: oneOf(enumToArray(SIZE))
};
