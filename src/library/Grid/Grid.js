/* @flow */
import React, { Children, cloneElement } from 'react';
import { createStyledComponent } from '../styles';
import Flex from '../Flex';

type Props = {
  /**
   * Align grid items vertically
   * [[Responsive-capable]](/components/flex#responsive)
   */
  alignItems?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | Array<'start' | 'end' | 'center' | 'stretch' | null>,
  /**
   * Media query (min-width) breakpoints along which to apply props marked
   * "&#xfeff;[[Responsive-capable]](/components/flex#responsive)&#xfeff;"
   */
  breakpoints?: Array<number | string>,
  /** Must be [GridItem(s)](./grid-item). */
  children: React$Node,
  /** Number of columns (see [GridItem's `span`](/components/grid-item#span)) */
  columns?: number,
  /** Size of horizontal gap between grid items */
  gutterWidth?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
};

const Root = createStyledComponent(
  Flex,
  { display: 'flex' },
  {
    displayName: 'Grid',
    filterProps: ['direction', 'inline', 'justifyContent']
  }
).withProps({ wrap: true });

const getGridItems = ({ breakpoints, children, columns, gutterWidth }) =>
  Children.map(children, (child) =>
    cloneElement(child, { breakpoints, columns, gutterWidth })
  );

/**
 * Grid component is used together with [GridItem](/components/grid-item) to lay
 * out other components in a columnar, and optionally responsive, manner.
 */
const Grid = (props: Props) => <Root {...props}>{getGridItems(props)}</Root>;

Grid.defaultProps = {
  alignItems: 'stretch', // Same as Flex
  columns: 12,
  gutterWidth: 'md' // Same as Flex
};

export default Grid;
