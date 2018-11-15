/* @flow */
import React, { Children, cloneElement } from 'react';
import { GridRoot as Root } from './styled';
import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

import { gridPropTypes } from './propTypes';
import type { GridDefaultProps, GridProps } from './types';

const getGridItems = ({ breakpoints, children, columns, gutterWidth }) =>
  Children.map(children, (child) =>
    cloneElement(child, { breakpoints, columns, gutterWidth })
  );

const Grid = (props: GridProps) => (
  <Root {...props}>{getGridItems(props)}</Root>
);

Grid.displayName = 'Grid';
const defaultProps: GridDefaultProps = {
  alignItems: ALIGN_ITEMS.stretch, // Same as Flex
  columns: 12,
  gutterWidth: GUTTER_WIDTH.md // Same as Flex
};
Grid.defaultProps = defaultProps;
Grid.propTypes = gridPropTypes;

export default Grid;
