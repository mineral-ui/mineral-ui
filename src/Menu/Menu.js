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
import { createStyledComponent } from '../utils';
import { MenuDivider, MenuGroup, MenuItem } from './index';

type Props = {
  /** [MenuDivider](./menu-divider), [MenuGroup](./menu-group), or [MenuItem](./menu-item) */
  children?: React$Node,
  /** Data used to contruct Menu. See [example](#data) */
  data?: Array<{ items: Array<Item>, title?: React$Node }>,
  /** @Private Function that returns props to be applied to each item */
  getItemProps?: (props: Object, scope: Object) => Object
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

const Root = createStyledComponent(
  'div',
  {},
  {
    displayName: 'Menu',
    includeStyleReset: true
  }
);

/**
 * Menus display a list of [MenuItems](./menu-item). The items can have actions or be used for navigation.
 */
export default function Menu({
  children,
  data,
  getItemProps,
  ...restProps
}: Props) {
  const rootProps = {
    ...restProps
  };

  return (
    <Root {...rootProps}>
      {data ? renderFromData(data, getItemProps) : children}
    </Root>
  );
}

function renderFromData(data, getItemProps) {
  return data.reduce(
    (acc, group, groupIndex) => {
      acc.groups.push(renderMenuGroup(group, groupIndex, getItemProps, acc));
      return acc;
    },
    { groups: [], itemIndex: 0 }
  ).groups;
}

function renderMenuGroup(group, groupIndex, getItemProps, acc) {
  return group.items && group.items.length
    ? <MenuGroup key={groupIndex} title={group.title}>
        {group.items.map((item, itemIndex) => {
          return renderMenuItem(item, itemIndex, getItemProps, acc);
        })}
      </MenuGroup>
    : null;
}

function renderMenuItem(item, itemIndex, getItemProps, acc) {
  if (item.divider) {
    return <MenuDivider key={itemIndex} />;
  } else {
    const index = acc.itemIndex++; // Excludes MenuDividers
    const { text, ...restItemProps } = item;
    const itemProps = getItemProps
      ? getItemProps(
          {
            ...restItemProps,
            item
          },
          { index, item }
        )
      : {
          ...restItemProps,
          item
        };

    return (
      <MenuItem key={itemIndex} {...itemProps}>
        {text}
      </MenuItem>
    );
  }
}
