/* @flow */
import { bool, func, node, number, oneOf, string } from 'prop-types';
import { enumToArray } from '../utils';
import { thingOrThingArray } from '../utils/propTypes';
import { MODE, SIZE, VARIANT } from './constants';

export const buttonGroupPropTypes = {
  'aria-label': string.isRequired,
  checked: thingOrThingArray(number),
  children: node.isRequired,
  defaultChecked: thingOrThingArray(number),
  disabled: bool,
  fullWidth: bool,
  mode: oneOf(enumToArray(MODE)),
  onChange: func,
  onClick: func,
  size: oneOf(enumToArray(SIZE)),
  variant: oneOf(enumToArray(VARIANT))
};
