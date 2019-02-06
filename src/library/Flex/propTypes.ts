/* @flow */
import { arrayOf, bool, node, number, oneOfType, string } from 'prop-types';
import { stringOrStringArray, thingOrThingArray } from '../utils/propTypes';
import { spacingPropType } from '../Box/propTypes';
import {
  ALIGN_ITEMS,
  ALIGN_SELF,
  DIRECTION,
  JUSTIFY_CONTENT
} from './constants';

export const flexPropTypes = {
  alignItems: stringOrStringArray(ALIGN_ITEMS),
  breakpoints: arrayOf(oneOfType([number, string])),
  children: node,
  direction: stringOrStringArray(DIRECTION),
  gutterWidth: oneOfType([number, string]),
  minWidth: spacingPropType,
  justifyContent: stringOrStringArray(JUSTIFY_CONTENT),
  wrap: thingOrThingArray(bool)
};

export const flexItemPropTypes = {
  alignSelf: stringOrStringArray(ALIGN_SELF),
  breakpoints: arrayOf(oneOfType([number, string])),
  flex: bool,
  grow: thingOrThingArray(number),
  shrink: thingOrThingArray(number)
};
