/* @flow */
import React, { PureComponent } from 'react';
import memoizeOne from 'memoize-one';
import { isRenderProp } from '../utils';
import TableContext from './TableContext';
import { createTableCellRootNode } from './styled';

import type { TableCellDefaultProps, TableCellProps } from './types';

export default class TableCell extends PureComponent<TableCellProps> {
  static defaultProps: TableCellDefaultProps = {
    element: 'td'
  };

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createTableCellRootNode,
    (nextProps: TableCellProps, prevProps: TableCellProps) =>
      nextProps.element === prevProps.element &&
      nextProps.primary === prevProps.primary
  );

  render() {
    return (
      <TableContext.Consumer>
        {(tableContextProps) => {
          const { primary, render, ...restProps } = this.props;
          const rootProps = {
            ...tableContextProps,
            ...(primary ? { scope: 'row' } : undefined),
            ...restProps
          };

          if (isRenderProp(render)) {
            return render({
              props: rootProps
            });
          }

          const Root = this.getRootNode(this.props, TableCell.defaultProps);
          return <Root {...rootProps} />;
        }}
      </TableContext.Consumer>
    );
  }
}
