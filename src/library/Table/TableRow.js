/* @flow */
import React, { PureComponent } from 'react';
import { isRenderProp } from '../utils';
import TableContext from './TableContext';
import { TableRowRoot as Root } from './styled';

import type { TableRowProps } from './types';

export default class TableRow extends PureComponent<TableRowProps> {
  render() {
    return (
      <TableContext.Consumer>
        {(tableContextProps) => {
          const { render, ...restProps } = this.props;
          const rootProps = { ...tableContextProps, ...restProps };

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
