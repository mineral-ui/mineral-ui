/* @flow */
import {
  bool,
  element,
  func,
  node,
  number,
  object,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import { ALIGN, POSITION } from './constants';

export const tabsPropTypes = {
  align: oneOf(Object.keys(ALIGN)),
  'aria-labelledby': string,
  children: node,
  defaultSelectedTabIndex: number,
  id: string,
  label: string.isRequired,
  height: oneOfType([number, string]),
  maxTabWidth: oneOfType([number, string]),
  onChange: func,
  position: oneOf(Object.keys(POSITION)),
  selectedTabIndex: number,
  theme: object
};

export const tabPropTypes = {
  children: node,
  disabled: bool,
  icon: element,
  id: string,
  index: number,
  maxWidth: oneOfType([number, string]),
  panelId: string,
  selected: bool,
  title: node.isRequired
};
