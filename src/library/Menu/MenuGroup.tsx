/* @flow */
import React from 'react';
import { MenuGroupTitle } from './styled';

import { menuGroupPropTypes } from './propTypes';
import { MenuGroupProps } from './types';

const MenuGroup = (props: MenuGroupProps) => {
  const { children, title, ...restProps } = props;
  return [
    title && (
      <MenuGroupTitle {...restProps} key="MenuGroup">
        {title}
      </MenuGroupTitle>
    ),
    children
  ];
};

MenuGroup.displayName = 'MenuGroup';
MenuGroup.propTypes = menuGroupPropTypes;

export default MenuGroup;
