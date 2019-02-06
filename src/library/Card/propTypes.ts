/* @flow */
import {
  bool,
  element,
  func,
  node,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import { enumToArray } from '../utils';
import { menuItemsPropType } from '../Menu/propTypes';
import { VARIANT } from './constants';

const variant = oneOf(enumToArray(VARIANT));

export const cardPropTypes = {
  children: node.isRequired,
  onClick: func
};

export const cardActionsPropTypes = {
  children: node.isRequired
};

export const cardBlockPropTypes = {
  children: node.isRequired
};

export const cardDividerPropTypes = {};

export const cardFooterPropTypes = {
  children: node,
  defaultIsOpen: bool,
  expandable: bool,
  isOpen: bool,
  onClose: func,
  onOpen: func,
  title: oneOfType([string, element]),
  triggerTitle: func,
  variant
};

export const cardImagePropTypes = {};

export const cardStatusPropTypes = {
  children: string.isRequired,
  variant
};

export const cardTitlePropTypes = {
  actions: node,
  avatar: oneOfType([string, element]),
  children: node.isRequired,
  secondaryText: oneOfType([string, element]),
  subtitle: node,
  variant
};

export const cardTitleMenuPropTypes = {
  data: menuItemsPropType.isRequired,
  triggerTitle: string
};
