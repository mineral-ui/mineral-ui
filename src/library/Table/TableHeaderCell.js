/* @flow */
import React, { PureComponent } from 'react';
import { isRenderProp } from '../utils';
import TableContext from './TableContext';
import { TableHeaderCellRoot as Root } from './styled';
import { COLUMN_ALIGN } from './constants';

import type {
  TableHeaderCellDefaultProps,
  TableHeaderCellProps
} from './types';

export default class TableHeaderCell extends PureComponent<TableHeaderCellProps> {
  static displayName = 'TableHeaderCell';

  static defaultProps: TableHeaderCellDefaultProps = {
    textAlign: COLUMN_ALIGN.start
  };

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

          return <Root {...rootProps} />;
        }}
      </TableContext.Consumer>
    );
  }
}
