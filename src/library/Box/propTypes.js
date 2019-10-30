/* @flow */
import { arrayOf, bool, number, oneOfType, string } from 'prop-types';

export const spacingPropType = oneOfType([
  number,
  string,
  arrayOf(oneOfType([number, string]))
]);

export const boxPropTypes = {
  /* TargetX Custom Props */
  background: string,
  backgroundColor: string,
  blur: number,
  border: string,
  borderBottom: string,
  borderLeft: string,
  borderRadius: oneOfType([string, arrayOf(string)]),
  borderRight: string,
  borderTop: string,
  boxShadow: string,
  cursor: string,
  filter: string,
  maxHeight: oneOfType([string, number]),
  maxWidth: oneOfType([string, number]),
  minHeight: oneOfType([string, number]),
  minWidth: oneOfType([string, number]),
  overflow: string,
  position: string,
  scrollable: bool,
  top: string,
  zIndex: oneOfType([string, number]),

  /* Built-In Props */
  breakpoints: arrayOf(oneOfType([number, string])),
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
