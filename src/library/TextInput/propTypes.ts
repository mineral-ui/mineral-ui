/* @flow */
import {
  bool,
  element,
  func,
  number,
  object,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import { enumToArray } from '../utils';
import { SIZE, TYPE, VARIANT } from './constants';

export const textInputPropTypes = {
  className: string,
  defaultValue: string,
  disabled: bool,
  htmlSize: oneOfType([number, string]),
  iconStart: element,
  iconEnd: element,
  inputRef: func,
  rootProps: object,
  invalid: bool,
  onChange: func,
  prefix: oneOfType([string, element]),
  readOnly: bool,
  required: bool,
  size: oneOf(enumToArray(SIZE)),
  suffix: oneOfType([string, element]),
  type: oneOf(enumToArray(TYPE)),
  value: string,
  variant: oneOf(enumToArray(VARIANT))
};
