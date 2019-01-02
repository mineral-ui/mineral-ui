/* @flow */
import { node, oneOf, string } from 'prop-types';
import { VARIANT } from './constants';

export const linkPropTypes = {
  children: node,
  href: string,
  variant: oneOf(Object.keys(VARIANT))
};
