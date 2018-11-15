/* @flow */
import React from 'react';
import { MenuGroupRoot as Root } from './styled';
import MenuGroupTitle from './MenuGroupTitle';

import { menuGroupPropTypes } from './propTypes';
import type { MenuGroupProps } from './types';

const MenuGroup = (props: MenuGroupProps) => {
  const { children, title, ...restProps } = props;
  return (
    <Root {...restProps}>
      {title && <MenuGroupTitle>{title}</MenuGroupTitle>}
      {children}
    </Root>
  );
};

MenuGroup.displayName = 'MenuGroup';
MenuGroup.propTypes = menuGroupPropTypes;

export default MenuGroup;
