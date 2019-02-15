/* @flow */
import React, { Children, cloneElement } from 'react';
import { hasDisplayName } from '../utils';
import { GridRoot as Root } from './styled';
import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

import { gridPropTypes } from './propTypes';
import { GridDefaultProps, GridProps, GetGridItems } from './types';

const getGridItems: GetGridItems = ({
  breakpoints,
  children,
  columns,
  gutterWidth
}) =>
  Children.map(children, (child) =>
    hasDisplayName(child, /GridItem/)
      ? cloneElement(child, { breakpoints, columns, gutterWidth })
      : child
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
