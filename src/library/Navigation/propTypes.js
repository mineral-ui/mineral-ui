/* @flow */
import {
  arrayOf,
  bool,
  element,
  func,
  node,
  number,
  oneOf,
  oneOfType,
  shape,
  string
} from 'prop-types';
import { ALIGN, TYPE } from './constants';

import { menuItemPropType } from '../Menu/propTypes';

const alignPropType = oneOf(Object.keys(ALIGN));
const itemElementPropType = oneOfType([element, string]);
const maxWidthPropType = oneOfType([number, string]);
const navigationItemPropType = shape({
  ...menuItemPropType,
  icon: element,
  maxWidth: oneOfType([number, string])
});
const navigationItemsPropType = arrayOf(navigationItemPropType);
const messagesPropType = shape({
  moreLabel: string.isRequired,
  moreText: string.isRequired
});

export const navItemPropTypes = {
  children: node,
  disabled: bool,
  element: itemElementPropType,
  icon: element,
  maxWidth: maxWidthPropType,
  selected: bool
};

export const primaryNavPropTypes = {
  align: alignPropType,
  children: node,
  itemElement: itemElementPropType,
  items: navigationItemsPropType,
  maxItemWidth: maxWidthPropType,
  messages: messagesPropType,
  minimal: bool,
  onChange: func,
  overflowAtIndex: number,
  selectedIndex: number
};

export const secondaryNavPropTypes = {
  align: alignPropType,
  children: node,
  itemElement: itemElementPropType,
  items: navigationItemsPropType,
  maxItemWidth: maxWidthPropType,
  messages: messagesPropType,
  onChange: func,
  overflowAtIndex: number,
  selectedIndex: number,
  type: oneOf(Object.keys(TYPE))
};
