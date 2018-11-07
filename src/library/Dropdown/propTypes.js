/* @flow */
import {
  bool,
  func,
  number,
  node,
  object,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import { menuItemsPropType, menuItemGroupsPropType } from '../Menu/propTypes';
import { PLACEMENT } from './constants';

export const dropdownPropTypes = {
  children: oneOfType([node, func]).isRequired,
  data: oneOfType([menuItemsPropType, menuItemGroupsPropType]).isRequired,
  defaultHighlightedIndex: number,
  defaultIsOpen: bool,
  disabled: bool,
  highlightedIndex: number,
  id: string,
  isOpen: bool,
  item: func,
  itemKey: string,
  menu: func,
  modifiers: object,
  onClose: func,
  onOpen: func,
  placement: oneOf(Object.keys(PLACEMENT)),
  usePortal: bool,
  wide: bool
};
