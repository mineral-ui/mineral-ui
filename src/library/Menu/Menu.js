/* @flow */
import React, { Component } from 'react';
import { createStyledComponent } from '../styles';
import { MenuDivider, MenuGroup, MenuItem } from './index';

type Props = {
  /** [MenuDivider](/components/menu-divider), [MenuGroup](/components/menu-group), or [MenuItem](/components/menu-item) */
  children?: React$Node,
  /** Data used to contruct Menu. See [example](#data) */
  data?: Items | ItemGroups,
  /**
   * Specifies a key in the item data that gives an item its unique identity. See
   * the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).
   */
  itemKey?: string,
  /** Provides custom rendering control for the items. See the [render item example](/components/menu#render-item) and [React docs](https://reactjs.org/docs/render-props.html). */
  renderItem?: RenderItem
};

export type Item = {
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  disabled?: boolean,
  divider?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  render?: RenderItem,
  secondaryText?: React$Node,
  text?: React$Node,
  value?: string,
  variant?: 'danger' | 'success' | 'warning'
};

type PropGetter = (props?: Object) => Object;

export type RenderMenu = (props: RenderMenuProps) => React$Node;
export type RenderMenuProps = {
  menuProps: Object
};

export type RenderItem = (props: RenderItemProps) => React$Node;
export type RenderItemProps = {
  index: number,
  item: Item,
  itemProps: Object
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

/**
 * A Menu presents a list of options representing actions or navigation.
 * Composed of [MenuItems](/components/menu-item), Menu is usually combined with [Popover](/components/popover) to create a [Dropdown](/components/dropdown).
 *
 * Menus are great for collecting actions in one place so your users don't need to scan the entire document to find a feature.
 */
export default class Menu extends Component<Props> {
  render() {
    const { children, data, ...rootProps } = this.props;

    return (
      <Root {...rootProps}>{data ? this.renderFromData(data) : children}</Root>
    );
  }

  renderFromData = (data: Items | ItemGroups) => {
    // $FlowFixMe https://github.com/facebook/flow/issues/5885
    const itemGroups: ItemGroups = groupifyData(data);
    return itemGroups.map(this.renderMenuGroup);
  };

  renderMenuGroup = (group: ItemGroup, groupIndex: number) => {
    const getItemProps = (props) => ({ ...props });
    return group.items && group.items.length ? (
      <MenuGroup key={groupIndex} title={group.title}>
        {
          group.items.reduce(
            ({ items, index }, item) => ({
              items: items.concat(
                this.renderItem({
                  getItemProps,
                  index,
                  item
                })
              ),
              index: item.divider ? index : index + 1
            }),
            { items: [], index: 0 }
          ).items
        }
      </MenuGroup>
    ) : null;
  };

  getItemProps: PropGetter = (props = {}) => {
    const { item, itemProps, index } = props;
    const { renderItem, itemKey } = this.props;

    return {
      ...item,
      ...itemProps,
      children: item.text,
      index,
      item,
      key: item[itemKey] || index,
      render: renderItem
    };
  };

  renderItem = (props: Object = {}) => {
    const { item, index } = props;

    if (item.divider) {
      return <MenuDivider key={index} />;
    } else {
      return <MenuItem {...this.getItemProps(props)} />;
    }
  };
}
