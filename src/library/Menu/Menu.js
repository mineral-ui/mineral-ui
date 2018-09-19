/* @flow */
import React, { cloneElement, PureComponent } from 'react';
import { createStyledComponent } from '../styles';
import { MenuDivider, MenuGroup, MenuItem } from './index';

// Ensure we don't import the whole package
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import CellMeasurer from 'react-virtualized/dist/commonjs/CellMeasurer';
import CellMeasurerCache from 'react-virtualized/dist/commonjs/CellMeasurer/CellMeasurerCache';
import List from 'react-virtualized/dist/commonjs/List';

type Props = {
  /**
   * [MenuDivider](/components/menu-divider),
   * [MenuGroup](/components/menu-group),
   * or [MenuItem](/components/menu-item)
   */
  children?: React$Node,
  /** Data used to contruct Menu. See [example](#data) */
  data?: Items | ItemGroups,
  /** @Private Index of the highlighted item. Used by Dropdown and Select. */
  highlightedIndex?: number,
  /**
   * Provides custom rendering control for the items. See the
   * [custom item example](/components/menu#custom-item) and
   * our [render props guide](/render-props).
   */
  item?: RenderFn,
  /**
   * Specifies a key in the item data that gives an item its unique identity.
   * See the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).
   */
  itemKey?: string,
  /** TODO */
  listRef?: (node: ?React$Component<*, *>) => void
};

export type Item = {
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  disabled?: boolean,
  divider?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  render?: RenderFn,
  secondaryText?: React$Node,
  text?: React$Node,
  value?: string,
  variant?: 'danger' | 'success' | 'warning'
};
export type Items = Array<Item>;
export type ItemGroup = { items: Array<Item>, title?: React$Node };
export type ItemGroups = Array<ItemGroup>;

type PropGetter = (props?: Object) => Object;
type RenderFn = (props?: RenderProps) => React$Node;
type RenderProps = {
  props: Object
};

const Root = createStyledComponent(
  'div',
  {
    height: '200px' // TODO
  },
  {
    displayName: 'Menu',
    includeStyleReset: true
  }
);

const isGroupedData = (data: Items | ItemGroups) => {
  return data.length && data[0].hasOwnProperty('items');
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
 * Composed of [MenuItems](/components/menu-item), Menu is usually combined with
 * [Popover](/components/popover) to create a [Dropdown](/components/dropdown).
 *
 * Menus are great for collecting actions in one place so your users don't need
 * to scan the entire document to find a feature.
 */
export default class Menu extends PureComponent<Props> {
  rows: Array<any>; // TODO

  list: ?React$Component<*, *>;

  render() {
    const { children, data, ...rootProps } = this.props;

    return (
      <Root {...rootProps}>{data ? this.renderFromData(data) : children}</Root>
    );
  }

  renderFromData = (data: Items | ItemGroups) => {
    const { highlightedIndex } = this.props;
    // $FlowFixMe https://github.com/facebook/flow/issues/5885
    const itemGroups: ItemGroups = groupifyData(data);

    this.rows = itemGroups.reduce(
      (acc, group: ItemGroup, groupIndex: number) => {
        if (!group.items || !group.items.length) {
          return acc;
        }

        if (group.title) {
          acc.items.push(<MenuGroup key={groupIndex} title={group.title} />);
        }

        const items = group.items.map((item) =>
          this.renderItem({
            props: {
              isHighlighted: highlightedIndex === acc.index,
              index: item.divider ? acc.index : acc.index++,
              item
            }
          })
        );

        acc.items.push(...items);

        return acc;
      },
      { items: [], index: 0 }
    ).items;

    // TODO:
    // - Virtualization opt-in
    // - Allow cache options for tweaking performance

    const cache = new CellMeasurerCache({
      // fixedHeight: true,
      fixedWidth: true,
      defaultHeight: 40
      // keyMapper: () => 1
    });

    const rowRenderer = ({ key, index, parent, style }) => (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}>
        {cloneElement(this.rows[index], { style })}
      </CellMeasurer>
    );

    return (
      <AutoSizer>
        {({ height, width }) => (
          <List
            ref={this.setListRef}
            height={height}
            deferredMeasurementCache={cache}
            // overscanRowCount={0}
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
            rowCount={this.rows.length}
            scrollToIndex={this.getRowIndex(highlightedIndex || 0)}
            width={width}
          />
        )}
      </AutoSizer>
    );
  };

  setListRef = (node: ?React$Component<*, *>) => {
    this.list = node;
  };

  scrollToIndex = (index: number) => {
    // $FlowFixMe
    this.list && this.list.scrollToRow(this.getRowIndex(index));
  };

  getRowIndex = (index: number) => {
    const items = this.rows.filter(
      (item) => item.type !== MenuDivider && item.type !== MenuGroup
    );
    const item = items[index];
    return this.rows.indexOf(item);
  };

  getItemProps: PropGetter = (props = {}) => {
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

  renderItem: RenderFn = (props = {}) => {
    const { props: itemProps } = props;
    const { index, item } = itemProps;

    if (item.divider) {
      return <MenuDivider key={index} />;
    } else {
      return <MenuItem {...this.getItemProps(props)} />;
    }
  };
}
