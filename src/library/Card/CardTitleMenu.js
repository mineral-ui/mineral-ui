/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../styles';
import Button from '../Button';
import Dropdown from '../Dropdown';
import IconMoreHoriz from '../Icon/IconMoreHoriz';

import type { Items, ItemGroups } from '../Menu/Menu';

type Props = {
  /** See the [Actions Menu](#actions-menu) example */
  data?: Items | ItemGroups,
  /** Title for the actions menu [Icon](/components/Icon) */
  triggerTitle?: string
};

/*
 * A large Button, even with zero'd padding, is still a bit too large in this
 * context. These styles allow the Button to shrink, but the Icon remains the
 * same size.
 */
const MenuButton = createStyledComponent(Button, ({ theme }) => ({
  height: 'auto',
  minWidth: 0,
  overflow: 'hidden',
  padding: 0,

  // Inner
  '& > span': {
    display: 'block',
    margin: `-${pxToEm(2)}`
  },

  // Icon
  '& [role="img"]': {
    color: theme.icon_color
  }
}));

/**
 * CardTitleMenu
 */
export default function CardTitleMenu({
  data,
  triggerTitle = 'Card actions',
  ...restProps
}: Props) {
  const rootProps = {
    data,
    placement: 'bottom-end',
    ...restProps
  };
  const buttonProps = {
    iconStart: <IconMoreHoriz title={triggerTitle} />,
    minimal: true
  };

  return (
    <Dropdown {...rootProps}>
      <MenuButton {...buttonProps} />
    </Dropdown>
  );
}
