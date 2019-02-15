/* @flow */
import { arrayOf, func, string, oneOf, oneOfType, shape } from 'prop-types';
import enumToArray from './enumToArray';

export const component = oneOfType([
  func,
  string,
  shape({ render: func.isRequired })
]);

export const thingOrThingArray = (constant) =>
  oneOfType([constant, arrayOf(constant)]);

export const stringOrStringArray = (constant) =>
  thingOrThingArray(oneOf(enumToArray(constant)));
