/* @flow */
import { bool, node, string } from 'prop-types';

export const iconPropTypes = {
  children: node,
  color: string,
  rtl: bool,
  size: string,
  title: string
};
