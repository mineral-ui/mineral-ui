import React, { Component } from 'react';
import deepEqual from 'fast-deep-equal';
import TableCell from './TableCell';
import TableRow from './TableRow';

import type { Columns, Row } from './Table';

type Props = {
  columns: Columns,
  data: Row
};

export default class DataRow extends Component<Props> {
  shouldComponentUpdate(nextProps) {
    return !deepEqual(this.props, nextProps);
  }

  render() {
    const { columns, data } = this.props;
    return (
      <TableRow>
        {columns.map(({ cell, key, ...restColumn }) => {
          const cellProps = {
            children: data[key],
            key,
            ...restColumn
          };
          return cell ? (
            cell({ props: cellProps })
          ) : (
            <TableCell {...cellProps} />
          );
        })}
      </TableRow>
    );
  }
}
