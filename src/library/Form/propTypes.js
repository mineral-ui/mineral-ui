/* @flow */
import {
  bool,
  element,
  string,
  node,
  object,
  oneOf,
  oneOfType
} from 'prop-types';
import { component } from '../utils/propTypes';
import { VARIANT } from './constants';

export const formFieldPropTypes = {
  caption: oneOfType([string, element]),
  children: node,
  hideLabel: bool,
  id: string,
  input: component,
  rootProps: object,
  label: oneOfType([string, element]).isRequired,
  required: bool,
  requiredText: oneOfType([string, element]),
  secondaryText: oneOfType([string, element]),
  variant: oneOf(Object.keys(VARIANT))
};

export const formFieldDividerPropTypes = {};

export const formFieldsetPropTypes = {
  children: node,
  disabled: bool,
  legend: oneOfType([string, element])
};
