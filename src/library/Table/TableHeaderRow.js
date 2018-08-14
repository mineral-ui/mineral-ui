/* @flow */
import React, { Component } from 'react';
import deepEqual from 'react-fast-compare';
import TableSelectableCell from './TableSelectableCell';
import TableHeaderCell from './TableHeaderCell';
import TableSortableHeaderCell from './TableSortableHeaderCell';
import TableRow from './TableRow';

import type { ToggleAll } from './Selectable';
import type { SortableType } from './Sortable';
import type { Columns, Messages } from './Table';

type Props = {
  checked?: boolean,
  columns: Columns,
  indeterminate?: boolean,
  isSortable?: boolean,
  messages: Messages,
  sortable?: SortableType,
  toggle?: ToggleAll
};

export default class TableHeaderRow extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    return !deepEqual(this.props, nextProps);
  }

  toggle = () => {
    const { toggle } = this.props;
    toggle && toggle();
  };

  render() {
    const {
      checked,
      columns,
      indeterminate,
      isSortable,
      sortable: tableSortable,
      messages,
      toggle,
      ...restProps
    } = this.props;
    const selectable = Boolean(toggle);

    const cells = columns.map(
      ({
        headerCell: render,
        content,
        sortable: columnSortable,
        key,
        label,
        ...restColumn
      }) => {
        if (typeof content !== 'string' && !label) {
          throw new Error(
            'Columns with non-string content must define a `label` property.'
          );
        }

        const cellProps = {
          children: content,
          key,
          label: label || (typeof content === 'string' ? content : undefined),
          messages,
          render,
          sortable:
            columnSortable === false
              ? undefined
              : isSortable || columnSortable
                ? tableSortable
                : undefined,
          ...restColumn
        };

        return cellProps.sortable ? (
          <TableSortableHeaderCell name={key} {...cellProps} />
        ) : (
          <TableHeaderCell {...cellProps} />
        );
      }
    );

    if (selectable) {
      cells.unshift(
        <TableSelectableCell
          key={messages.selectedRows}
          aria-label={messages.selectedRows}
          isHeader={true}
          label={
            checked || indeterminate
              ? messages.deselectAllRows
              : messages.selectAllRows
          }
          checked={checked}
          indeterminate={indeterminate}
          onChange={this.toggle}
        />
      );
    }

    const tableRowProps = {
      children: cells,
      ...restProps
    };

    return <TableRow {...tableRowProps} />;
  }
}
