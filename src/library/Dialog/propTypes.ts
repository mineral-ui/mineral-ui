/* @flow */
import {
  arrayOf,
  bool,
  element,
  func,
  node,
  oneOf,
  oneOfType,
  shape,
  string
} from 'prop-types';
import { enumToArray } from '../utils';
import { thingOrThingArray } from '../utils/propTypes';
import { ACTIONS_SIZE, APPEARANCE, ELEMENT, SIZE, VARIANT } from './constants';

const variant = oneOf(enumToArray(VARIANT));

export const dialogPropTypes = {
  actions: arrayOf(
    shape({
      text: string.isRequired,
      size: oneOf(enumToArray(ACTIONS_SIZE))
    })
  ),
  appSelector: string,
  'aria-label': string,
  children: node,
  closeButtonLabel: string,
  closeOnEscape: bool,
  closeOnClickOutside: bool,
  disableFocusOnOpen: bool,
  disableFocusTrap: bool,
  hideOverlay: bool,
  id: string,
  isOpen: bool,
  modeless: bool,
  onClose: func,
  onOpen: func,
  preventCloseButtonClose: bool,
  showCloseButton: bool,
  size: oneOf(enumToArray(SIZE)),
  title: oneOfType([string, element]),
  usePortal: bool,
  variant
};

export const dialogActionsPropTypes = {
  children: thingOrThingArray(element),
  variant
};

export const dialogBodyPropTypes = {
  children: node
};

export const dialogFooterPropTypes = {
  children: node
};

export const dialogHeaderPropTypes = {
  children: node,
  closeButton: node
};

export const dialogTitlePropTypes = {
  appearance: oneOf(enumToArray(APPEARANCE)),
  as: oneOf(enumToArray(ELEMENT)),
  children: node.isRequired,
  id: string,
  variant
};
