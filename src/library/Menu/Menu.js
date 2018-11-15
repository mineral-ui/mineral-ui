/* @flow */
import React, { PureComponent } from 'react';
import { MenuRoot as Root } from './styled';
import MenuDivider from './MenuDivider';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';

import { menuPropTypes } from './propTypes';
import type {
  MenuItems,
  MenuItemGroup,
  MenuItemGroups,
  MenuPropGetter,
  MenuProps,
  MenuRenderFn
} from './types';

const isGroupedData = (data: MenuItems | MenuItemGroups) => {
  return data.length && data[0].hasOwnProperty('items');
};

const groupifyData = (data: MenuItems | MenuItemGroups) => {
  return isGroupedData(data) ? data : [{ items: data }];
};

export const getItems = (data: MenuItems | MenuItemGroups) => {
  // $FlowFixMe https://github.com/facebook/flow/issues/5885
  const itemGroups: MenuItemGroups = groupifyData(data);
  return itemGroups.reduce((acc, group) => {
    return group.items && group.items.length
      ? acc.concat(group.items.filter((item) => !item.divider))
      : acc;
  }, []);
};

export default class Menu extends PureComponent<MenuProps> {
  static displayName = 'Menu';

  static propTypes = menuPropTypes;

  render() {
    const { children, data, ...rootProps } = this.props;

    return (
      <Root {...rootProps}>{data ? this.renderFromData(data) : children}</Root>
    );
  }

  renderFromData = (data: MenuItems | MenuItemGroups) => {
    const { highlightedIndex } = this.props;
    // $FlowFixMe https://github.com/facebook/flow/issues/5885
    const itemGroups: MenuItemGroups = groupifyData(data);

    return itemGroups.reduce(
      (acc, group: MenuItemGroup, groupIndex: number) => {
        if (!group.items || !group.items.length) {
          return acc;
        }

        const menuGroup = (
          <MenuGroup key={groupIndex} title={group.title}>
            {group.items.map((item) =>
              this.renderItem({
                props: {
                  isHighlighted: highlightedIndex === acc.index,
                  index: item.divider ? acc.index : acc.index++,
                  item
                }
              })
            )}
          </MenuGroup>
        );

        acc.groups.push(menuGroup);

        return acc;
      },
      { groups: [], index: 0 }
    ).groups;
  };

  getItemProps: MenuPropGetter = (props = {}) => {
    const { props: itemProps } = props;
    const { index, item } = itemProps;
    const { item: render, itemKey } = this.props;

    return {
      ...itemProps,
      ...item,
      children: item.text,
      key: item[itemKey] || index,
      render
    };
  };

  renderItem: MenuRenderFn = (props = {}) => {
    const { props: itemProps } = props;
    const { index, item } = itemProps;

    if (item.divider) {
      return <MenuDivider key={index} />;
    } else {
      return <MenuItem {...this.getItemProps(props)} />;
    }
  };
}
