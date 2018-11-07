/* @flow */
import { bool, func, number, object, oneOf, string } from 'prop-types';
import { SIZE, VARIANT } from './constants';

export const textAreaPropTypes = {
  autoSize: bool,
  className: string,
  defaultValue: string,
  disabled: bool,
  inputRef: func,
  rootProps: object,
  invalid: bool,
  onInput: func,
  onChange: func,
  readOnly: bool,
  required: bool,
  resizeable: bool,
  rows: number,
  size: oneOf(Object.keys(SIZE)),
  value: string,
  variant: oneOf(Object.keys(VARIANT))
};
