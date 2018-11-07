/* @flow */
import { any, bool, func, node, object, oneOf, string } from 'prop-types';
import { PLACEMENT } from './constants';

export const tooltipPropTypes = {
  children: node.isRequired,
  cursor: string,
  content: string.isRequired,
  defaultIsOpen: bool,
  disabled: bool,
  hasArrow: bool,
  id: string,
  isOpen: bool,
  modifiers: object,
  onClose: func,
  onOpen: func,
  placement: oneOf(Object.keys(PLACEMENT)),
  subtitle: any,
  title: any,
  usePortal: bool
};
