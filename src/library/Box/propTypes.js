/* @flow */
import { arrayOf, bool, number, oneOfType, string } from 'prop-types';

const spacingPropType = oneOfType([
  number,
  string,
  arrayOf(oneOfType([number, string]))
]);

export const boxPropTypes = {
  breakpoints: arrayOf(oneOfType([number, string])),
  element: string,
  height: spacingPropType,
  inline: oneOfType([bool, arrayOf(bool)]),
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
