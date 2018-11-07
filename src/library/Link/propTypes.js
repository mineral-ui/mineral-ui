/* @flow */
import { func, node, oneOf, oneOfType, string } from 'prop-types';
import { VARIANT } from './constants';

export const linkPropTypes = {
  children: node,
  href: string,
  element: oneOfType([string, func]),
  variant: oneOf(Object.keys(VARIANT))
};
