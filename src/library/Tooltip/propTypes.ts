/* @flow */
import { any, bool, func, node, object, oneOf, string } from 'prop-types';
import { enumToArray } from '../utils';
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
  placement: oneOf(enumToArray(PLACEMENT)),
  positionFixed: bool,
  subtitle: any,
  title: any,
  usePortal: bool
};
