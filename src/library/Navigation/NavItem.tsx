/* @flow */
import React from 'react';
import { SIZE as BUTTON_SIZE } from '../Button/constants';
import Truncate from '../Truncate';
import { INTERNAL_TYPE } from './constants';
import { NavItemRoot } from './styled';

import type { NavItemProps } from './types';

const NavItem = (props: NavItemProps) => {
  const {
    children,
    disabled,
    icon,
    index,
    minimal: ignoreMinimal,
    selected,
    type,
    ...restProps
  } = props;

  const rootProps = {
    'aria-disabled': disabled,
    'aria-current': selected ? 'page' : undefined,
    circular: type === INTERNAL_TYPE.pills,
    'data-index': index,
    disabled,
    iconStart: icon,
    selected,
    size:
      type === INTERNAL_TYPE.pills
        ? BUTTON_SIZE.small
        : type === INTERNAL_TYPE.tabs
        ? BUTTON_SIZE.medium
        : BUTTON_SIZE.large,
    type,
    ...restProps
  };

  return (
    <NavItemRoot {...rootProps}>
      <Truncate>{children}</Truncate>
    </NavItemRoot>
  );
};

NavItem.displayName = 'NavItem';

export default NavItem;
