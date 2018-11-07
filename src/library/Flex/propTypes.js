/* @flow */
import {
  arrayOf,
  bool,
  node,
  number,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import {
  ALIGN_ITEMS,
  ALIGN_SELF,
  DIRECTION,
  JUSTIFY_CONTENT
} from './constants';

const stringOrArrayOfStringsPropType = (constant) => {
  const strings = Object.keys(constant);
  return oneOfType([oneOf(strings), arrayOf(oneOf(strings))]);
};

export const flexPropTypes = {
  alignItems: stringOrArrayOfStringsPropType(ALIGN_ITEMS),
  breakpoints: arrayOf(oneOfType([number, string])),
  children: node.isRequired,
  direction: stringOrArrayOfStringsPropType(DIRECTION),
  gutterWidth: oneOfType([number, string]),
  justifyContent: stringOrArrayOfStringsPropType(JUSTIFY_CONTENT),
  wrap: oneOfType([bool, arrayOf(oneOfType([bool]))])
};

export const flexItemPropTypes = {
  alignSelf: stringOrArrayOfStringsPropType(ALIGN_SELF),
  breakpoints: arrayOf(oneOfType([number, string])),
  flex: bool,
  grow: oneOfType([number, arrayOf(number)]),
  shrink: oneOfType([number, arrayOf(number)])
};
