/* @flow */
import { arrayOf, node, number, oneOfType, string } from 'prop-types';
import { stringOrStringArray, thingOrThingArray } from '../utils/propTypes';
import { ALIGN_ITEMS } from './constants';

export const gridPropTypes = {
  alignItems: stringOrStringArray(ALIGN_ITEMS),
  breakpoints: arrayOf(oneOfType([number, string])),
  children: node,
  columns: number,
  gutterWidth: oneOfType([number, string])
};

export const gridItemPropTypes = {
  span: thingOrThingArray(number)
};
