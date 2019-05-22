/* @flow */
import { bool, element, func, node, oneOf, string } from 'prop-types';
import { SIZE, VARIANT } from './constants';

export const buttonPropTypes = {
  width: string,
  justifyContent: string,

  children: node,
  circular: bool,
  disabled: bool,
  fullWidth: bool,
  iconEnd: element,
  iconStart: element,
  minimal: bool,
  onClick: func,
  primary: bool,
  size: oneOf(Object.keys(SIZE)),
  type: string,
  variant: oneOf(Object.keys(VARIANT))
};
