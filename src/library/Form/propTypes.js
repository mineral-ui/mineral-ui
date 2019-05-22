/* @flow */
import {
  bool,
  element,
  string,
  node,
  number,
  object,
  oneOf,
  oneOfType
} from 'prop-types';
import { component } from '../utils/propTypes';
import { VARIANT } from './constants';

export const formFieldPropTypes = {
  /* TargetX Custom Props */
  labelFor: string,
  marginBottom: oneOfType([number, string]),
  marginTop: oneOfType([number, string]),
  marginVertical: oneOfType([number, string]),
  width: oneOfType([number, string]),

  /* Built-In Props */
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
