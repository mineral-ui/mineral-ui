/* @flow */
import { bool, node, oneOf, string } from 'prop-types';
import { VARIANT } from './constants';

export const linkPropTypes = {
  /* TargetX Custom Props */
  fontSize: string,
  textDecoration: string,
  underline: bool,

  /* Built-In Props */
  children: node,
  href: string,
  variant: oneOf(Object.keys(VARIANT))
};
