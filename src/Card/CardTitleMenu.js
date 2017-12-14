/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../styles';
import Button from '../Button';
import Dropdown from '../Dropdown';
import IconMoreHoriz from '../Icon/IconMoreHoriz';

type Props = {
  /** See the [Actions Menu](#actions-menu) example */
  data?: Array<{ items: Array<Item>, title?: React$Node }>,
  /** Title for the actions menu [Icon](../Icon) */
  triggerTitle?: string
};

type Item = {
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  disabled?: boolean,
  divider?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  render?: (item: Object, props: Object, theme: Object) => React$Element<*>,
  secondaryText?: React$Node,
  text?: React$Node,
  variant?: 'regular' | 'danger' | 'success' | 'warning'
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

  '& [role="img"]': {
    fill: theme.color_text
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
