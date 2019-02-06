/* @flow */
import {
  arrayOf,
  bool,
  element,
  func,
  node,
  object,
  oneOf,
  oneOfType,
  shape,
  string
} from 'prop-types';
import { enumToArray } from '../utils';
import { LABEL_POSITION, SIZE } from './constants';

export const checkboxPropTypes = {
  checked: bool,
  className: string,
  defaultChecked: bool,
  defaultIndeterminate: bool,
  disabled: bool,
  hideLabel: bool,
  indeterminate: bool,
  inputRef: func,
  invalid: bool,
  justify: bool,
  label: oneOfType([string, element]).isRequired,
  labelPosition: oneOf(enumToArray(LABEL_POSITION)),
  name: string,
  onChange: func,
  onClick: func,
  required: bool,
  rootProps: object,
  size: oneOf(enumToArray(SIZE)),
  value: string
};

export const checkboxGroupPropTypes = {
  checked: arrayOf(string),
  children: node,
  data: arrayOf(
    shape({
      label: oneOfType([string, element]).isRequired,
      value: string.isRequired
    })
  ),
  defaultChecked: arrayOf(string),
  inline: bool,
  name: string.isRequired,
  onChange: func,
  rootProps: object
};
