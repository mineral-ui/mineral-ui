/* @flow */
import React, { PureComponent } from 'react';
import { isRenderProp } from '../utils';
import TableContext from './TableContext';
import { TableCellRoot as Root } from './styled';

import type { TableCellProps } from './types';

export default class TableCell extends PureComponent<TableCellProps> {
  static displayName = 'TableCell';

  render() {
    return (
      <TableContext.Consumer>
        {(tableContextProps) => {
          const { as, primary, render, ...restProps } = this.props;
          const rootProps = {
            as: as || (primary ? 'th' : 'td'),
            ...tableContextProps,
            ...(primary ? { scope: 'row' } : undefined),
            ...restProps
          };

          if (isRenderProp(render)) {
            return render({
              props: rootProps
            });
          }

          return <Root {...rootProps} />;
        }}
      </TableContext.Consumer>
    );
  }
}
