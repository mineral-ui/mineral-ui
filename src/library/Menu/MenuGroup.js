/* @flow */
import React from 'react';
import { MenuGroupTitle } from './styled';

import { menuGroupPropTypes } from './propTypes';
import type { MenuGroupProps } from './types';

const MenuGroup = (props: MenuGroupProps) => {
  const { children, title } = props;
  return [
    title && <MenuGroupTitle key="MenuGroup">{title}</MenuGroupTitle>,
    children
  ];
};

MenuGroup.displayName = 'MenuGroup';
MenuGroup.propTypes = menuGroupPropTypes;

export default MenuGroup;
