/* @flow */
import React, { Component } from 'react';
import TableCell from './TableCell';
import TableHeaderCell from './TableHeaderCell';
import TableContext from './TableContext';
import { PaddedCheckbox } from './styled';

import type { TableSelectableCellProps } from './types';

export default class TableSelectableCell extends Component<
  TableSelectableCellProps
> {
  shouldComponentUpdate(nextProps: TableSelectableCellProps) {
    return (
      this.props.checked !== nextProps.checked ||
      this.props.indeterminate !== nextProps.indeterminate
    );
  }

  render() {
    return (
      <TableContext.Consumer>
        {({ density }) => {
          const {
            checked,
            disabled,
            indeterminate,
            isHeader,
            label,
            onChange,
            ...restProps
          } = this.props;

          const Root = isHeader ? TableHeaderCell : TableCell;
          const rootProps = {
            noPadding: true,
            width: isHeader ? 1 : undefined,
            ...restProps
          };
          const checkboxProps = {
            checked,
            disabled,
            density,
            hideLabel: true,
            indeterminate,
            isHeader,
            label,
            onChange
          };

          return (
            <Root {...rootProps}>
              <PaddedCheckbox {...checkboxProps} />
            </Root>
          );
        }}
      </TableContext.Consumer>
    );
  }
}
