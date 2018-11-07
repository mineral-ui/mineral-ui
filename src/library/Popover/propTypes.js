/* @flow */
import { bool, func, node, object, oneOf, oneOfType, string } from 'prop-types';
import { PLACEMENT } from './constants';

export const popoverPropTypes = {
  children: oneOfType([node, func]).isRequired,
  content: oneOfType([node, func]).isRequired,
  cursor: string,
  defaultIsOpen: bool,
  disabled: bool,
  focusTriggerOnClose: bool,
  hasArrow: bool,
  id: string,
  isOpen: bool,
  modifiers: object,
  onClose: func,
  onOpen: func,
  placement: oneOf(Object.keys(PLACEMENT)),
  subtitle: node,
  title: node,
  triggerRef: func,
  usePortal: bool
};
