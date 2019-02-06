/* @flow */
import {
  bool,
  func,
  node,
  number,
  object,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import { menuItemsPropType } from '../Menu/propTypes';
import { PLACEMENT, SIZE, VARIANT } from './constants';

export const selectPropTypes = {
  data: menuItemsPropType.isRequired,
  defaultHighlightedIndex: number,
  defaultIsOpen: bool,
  defaultSelectedItem: object,
  disabled: bool,
  highlightedIndex: number,
  id: string,
  invalid: bool,
  isOpen: bool,
  item: oneOfType([node, func]),
  itemKey: string,
  menu: oneOfType([node, func]),
  modifiers: object,
  name: string,
  onChange: func,
  onClose: func,
  onOpen: func,
  onSelect: func,
  placeholder: string,
  placement: oneOf(Object.keys(PLACEMENT)),
  positionFixed: bool,
  readOnly: bool,
  required: bool,
  selectedItem: object,
  size: oneOf(Object.keys(SIZE)),
  trigger: oneOfType([node, func]),
  triggerRef: func,
  usePortal: bool,
  variant: oneOf(Object.keys(VARIANT))
};
