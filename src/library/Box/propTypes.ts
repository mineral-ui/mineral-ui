/* @flow */
import { arrayOf, bool, number, oneOfType, string } from 'prop-types';
import { thingOrThingArray } from '../utils/propTypes';

export const spacingPropType = thingOrThingArray(oneOfType([number, string]));

export const boxPropTypes = {
  breakpoints: arrayOf(oneOfType([number, string])),
  height: spacingPropType,
  inline: thingOrThingArray(bool),
  margin: spacingPropType,
  marginBottom: spacingPropType,
  marginEnd: spacingPropType,
  marginHorizontal: spacingPropType,
  marginLeft: spacingPropType,
  marginRight: spacingPropType,
  marginStart: spacingPropType,
  marginTop: spacingPropType,
  marginVertical: spacingPropType,
  padding: spacingPropType,
  paddingBottom: spacingPropType,
  padddingEnd: spacingPropType,
  paddingHorizontal: spacingPropType,
  paddingLeft: spacingPropType,
  paddingRight: spacingPropType,
  padddingStart: spacingPropType,
  paddingTop: spacingPropType,
  paddingVertical: spacingPropType,
  width: spacingPropType
};
