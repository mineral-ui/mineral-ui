/* @flow */
import { func, node, bool, number } from 'prop-types';

export const sideBarPropTypes = {
  children: node,
  inline: bool,
  usePortal: bool
};

export const sideBarPanelPropTypes = {
  children: node,
  hasShadows: bool,
  isCollapsed: bool,
  isOpen: bool,
  width: number
};

export const sideBarOverlayPropTypes = {
  onClick: func,
  show: bool
};
