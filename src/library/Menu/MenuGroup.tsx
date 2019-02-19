/* @flow */
import React, { Fragment } from 'react';
import { MenuGroupTitle } from './styled';

import { menuGroupPropTypes } from './propTypes';
import { MenuGroupProps } from './types';

const MenuGroup = (props: MenuGroupProps) => {
  const { children, title, ...restProps } = props;
  return (
    <Fragment>
      {title && (
        <MenuGroupTitle {...restProps} key="MenuGroup">
          {title}
        </MenuGroupTitle>
      )}
      {children}
    </Fragment>
  );
};

MenuGroup.displayName = 'MenuGroup';
MenuGroup.propTypes = menuGroupPropTypes;

export default MenuGroup;
