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
  icon: element,
  maxWidth: maxWidthPropType,
  selected: bool
};

const baseNavPropTypes = {
  align: alignPropType,
  children: node,
  itemAs: itemElementPropType,
  items: navigationItemsPropType,
  maxItemWidth: maxWidthPropType,
  messages: messagesPropType,
  onChange: func,
  overflowAtIndex: number,
  selectedIndex: number
};

export const primaryNavPropTypes = {
  ...baseNavPropTypes,
  minimal: bool
};

export const secondaryNavPropTypes = {
  ...baseNavPropTypes,
  type: oneOf(Object.keys(TYPE))
};
