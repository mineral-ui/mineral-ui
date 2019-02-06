/* @flow */
import React, { PureComponent } from 'react';
import { MenuRoot as Root } from './styled';
import MenuDivider from './MenuDivider';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';

import { menuPropTypes } from './propTypes';
import {
  MenuItems,
  MenuProps,
  MenuItemPropGetter,
  MenuItemProps,
  MenuItemRenderFn
} from './types';

export const getItems = (data: MenuItems): MenuItems =>
  data.filter((item) => !item.divider && !item.group);

export default class Menu extends PureComponent<MenuProps> {
  static displayName = 'Menu';

  static propTypes = menuPropTypes;

  render() {
    const { children, data, ...rootProps } = this.props;

    return (
      <Root {...rootProps}>{data ? this.renderFromData(data) : children}</Root>
    );
  }

  renderFromData = (data: MenuItems): Array<React.ReactNode> => {
    const { highlightedIndex } = this.props;

    let index = 0;
    return data.map((item) =>
      this.renderItem({
        props: {
          isHighlighted: highlightedIndex === index,
          index: item.divider || item.group ? index : index++,
          item
        }
      })
    );
  };

  getItemProps: MenuItemPropGetter<MenuItemProps> = (props) => {
    const itemProps = props['props'];
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

  renderItem: MenuItemRenderFn = (props) => {
    const itemProps = props['props'];

    if (itemProps['item'].group) {
      return (
        <MenuGroup key={itemProps['index']} title={itemProps['item'].title} />
      );
    } else if (itemProps['item'].divider) {
      return <MenuDivider key={itemProps['index']} />;
    } else {
      // FIXME: Revisit once website builds
      return <MenuItem {...this.getItemProps(props)} />;
    }
  };
}
