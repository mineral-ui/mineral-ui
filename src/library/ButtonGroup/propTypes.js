/* @flow */
import {
  arrayOf,
  bool,
  func,
  node,
  number,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import { MODE, SIZE, VARIANT } from './constants';

export const buttonGroupPropTypes = {
  'aria-label': string.isRequired,
  checked: oneOfType([number, arrayOf(number)]),
  children: node.isRequired,
  defaultChecked: oneOfType([number, arrayOf(number)]),
  disabled: bool,
  fullWidth: bool,
  mode: oneOf(Object.keys(MODE)),
  onChange: func,
  onClick: func,
  size: oneOf(Object.keys(SIZE)),
  variant: oneOf(Object.keys(VARIANT))
};
