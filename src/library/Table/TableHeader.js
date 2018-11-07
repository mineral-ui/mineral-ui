/* @flow */
import React, { PureComponent } from 'react';
import TableContext from './TableContext';
import { TableHeaderRoot as Root } from './styled';

import type { TableHeaderProps } from './types';

export default class TableHeader extends PureComponent<TableHeaderProps> {
  render() {
    return (
      <TableContext.Consumer>
        {({ highContrast }) => {
          const { children, ...restProps } = this.props;
          const rootProps = { highContrast, ...restProps };
          return <Root {...rootProps}>{children}</Root>;
        }}
      </TableContext.Consumer>
    );
  }
}
