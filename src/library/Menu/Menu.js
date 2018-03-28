/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import { MenuDivider, MenuGroup, MenuItem } from './index';

type Props = {
  /** [MenuDivider](/components/menu-divider), [MenuGroup](/components/menu-group), or [MenuItem](/components/menu-item) */
  children?: React$Node,
  /** Data used to contruct Menu. See [example](#data) */
  data?: Items | ItemGroups,
  /** @Private Function that returns props to be applied to each item */
  getItemProps?: (props: Object, scope: Object) => Object
};

export type Item = {
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  disabled?: boolean,
  divider?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  render?: (item: Object, props: Object, theme: Object) => React$Element<*>,
  secondaryText?: React$Node,
  text?: React$Node,
  value?: string,
  variant?: 'danger' | 'success' | 'warning'
};

export type ItemGroup = { items: Array<Item>, title?: React$Node };
export type Items = Array<Item>;
export type ItemGroups = Array<ItemGroup>;

const Root = createStyledComponent(
  'div',
  {},
  {
    displayName: 'Menu',
    includeStyleReset: true
  }
);

/**
 * A Menu presents a list of options representing actions or navigation.
 * Composed of [MenuItems](/components/menu-item), Menu is usually combined with [Popover](/components/popover) to create a [Dropdown](/components/dropdown).
 *
 * Menus are great for collecting actions in one place so your users don't need to scan the entire document to find a feature.
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

const isGroupedData = (data: Items | ItemGroups) => {
  return data[0].hasOwnProperty('items');
};

const groupifyData = (data: Items | ItemGroups) => {
  return isGroupedData(data) ? data : [{ items: data }];
};

export const getItems = (data: Items | ItemGroups) => {
  // $FlowFixMe https://github.com/facebook/flow/issues/5885
  const itemGroups: ItemGroups = groupifyData(data);
  return itemGroups.reduce((acc, group) => {
    return group.items && group.items.length
      ? acc.concat(group.items.filter((item) => !item.divider))
      : acc;
  }, []);
};

function renderFromData(data, getItemProps) {
  // $FlowFixMe https://github.com/facebook/flow/issues/5885
  const itemGroups: ItemGroups = groupifyData(data);
  return itemGroups.reduce(
    (acc, group, groupIndex) => {
      acc.groups.push(renderMenuGroup(group, groupIndex, getItemProps, acc));
      return acc;
    },
    { groups: [], itemIndex: 0 }
  ).groups;
}

function renderMenuGroup(group: ItemGroup, groupIndex, getItemProps, acc) {
  return group.items && group.items.length ? (
    <MenuGroup key={groupIndex} title={group.title}>
      {group.items.map((item, itemIndex) => {
        return renderMenuItem(item, itemIndex, getItemProps, acc);
      })}
    </MenuGroup>
  ) : null;
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
