/* @flow */
import {
  arrayOf,
  bool,
  element,
  func,
  node,
  number,
  oneOf,
  shape,
  string
} from 'prop-types';
import { VARIANT } from './constants';

const variant = oneOf(Object.keys(VARIANT));

export const menuItemPropType = shape({
  iconEnd: element,
  iconStart: element,
  disabled: bool,
  divider: bool,
  onClick: func,
  render: func,
  secondaryText: node,
  text: node,
  title: node,
  value: string,
  variant
});

export const menuItemsPropType = arrayOf(menuItemPropType);

export const menuPropTypes = {
  children: node,
  data: menuItemsPropType,
  highlightedIndex: number,
  item: func,
  itemKey: string
};

export const menuDividerPropTypes = {};

export const menuGroupPropTypes = {
  children: node,
  title: node
};

export const menuItemPropTypes = {
  children: node,
  disabled: bool,
  iconEnd: element,
  iconStart: element,
  index: number,
  isHighlighted: bool,
  item: menuItemPropType,
  onClick: func,
  render: func,
  secondaryText: node,
  variant
};
