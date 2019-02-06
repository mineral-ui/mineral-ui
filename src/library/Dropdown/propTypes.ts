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
import { menuItemsPropType } from '../Menu/propTypes';
import { PLACEMENT } from './constants';

export const dropdownPropTypes = {
  children: oneOfType([node, func]).isRequired,
  data: menuItemsPropType.isRequired,
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
  positionFixed: bool,
  usePortal: bool,
  wide: bool
};
