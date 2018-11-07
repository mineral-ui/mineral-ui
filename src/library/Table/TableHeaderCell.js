/* @flow */
import React, { PureComponent } from 'react';
import memoizeOne from 'memoize-one';
import { isRenderProp } from '../utils';
import TableContext from './TableContext';
import { createTableHeaderCellRootNode } from './styled';
import { COLUMN_ALIGN } from './constants';

import type {
  TableHeaderCellDefaultProps,
  TableHeaderCellProps
} from './types';

export default class TableHeaderCell extends PureComponent<
  TableHeaderCellProps
> {
  static defaultProps: TableHeaderCellDefaultProps = {
    element: 'th',
    textAlign: COLUMN_ALIGN.start
  };

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createTableHeaderCellRootNode,
    (nextProps: TableHeaderCellProps, prevProps: TableHeaderCellProps) =>
      nextProps.element === prevProps.element
  );

  render() {
    return (
      <TableContext.Consumer>
        {(tableContextProps) => {
          const { label, render, ...restProps } = this.props;
          const rootProps = {
            ...tableContextProps,
            'aria-label': label,
            ...restProps
          };

          if (isRenderProp(render)) {
            return render({
              props: {
                ...rootProps,
                label
              }
            });
          }

          const Root = this.getRootNode(
            this.props,
            TableHeaderCell.defaultProps
          );
          return <Root {...rootProps} />;
        }}
      </TableContext.Consumer>
    );
  }
}
