/* @flow */
import React from 'react';
import Portal from '../Portal';
import { SideBarRoot as Root } from './styled';

import { sideBarPropTypes } from './propTypes';
import type { SideBarProps } from './types';

const SideBar = ({ children, usePortal, ...restProps }: SideBarProps) => {
  const rootProps = {
    usePortal,
    ...restProps
  };

  const output = <Root {...rootProps}>{children}</Root>;

  return usePortal ? <Portal>{output}</Portal> : output;
};

SideBar.defaultProps = {
  inline: false,
  usePortal: true
};
SideBar.displayName = 'SideBar';
SideBar.propTypes = sideBarPropTypes;

export default SideBar;
