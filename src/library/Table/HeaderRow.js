import React, { Component } from 'react';
import deepEqual from 'fast-deep-equal';
import TableColumnHeader from './TableColumnHeader';
import TableRow from './TableRow';

import type { Columns } from './Table';

type Props = {
  columns: Columns
};

export default class HeaderRow extends Component<Props> {
  shouldComponentUpdate(nextProps) {
    return !deepEqual(this.props, nextProps);
  }

  render() {
    return (
      <TableRow>
        {this.props.columns.map(({ content, label, key, ...restColumn }) => {
          if (typeof content !== 'string' && !label) {
            throw new Error(
              'Columns with non-string content must define a `label` property.'
            );
          }

          const cellProps = {
            children: content,
            label: label || content,
            ...restColumn
          };

          return <TableColumnHeader key={key} {...cellProps} />;
        })}
      </TableRow>
    );
  }
}
