/* @flow */
import { node, oneOf, string } from 'prop-types';
import { enumToArray } from '../utils';
import { VARIANT } from './constants';

export const linkPropTypes = {
  children: node,
  href: string,
  variant: oneOf(enumToArray(VARIANT))
};
