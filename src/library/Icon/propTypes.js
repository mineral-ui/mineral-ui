/* @flow */
import { bool, node, number, oneOfType, string } from 'prop-types';

export const iconPropTypes = {
  children: node,
  color: string,
  rtl: bool,
  size: oneOfType([number, string]),
  title: string
};
