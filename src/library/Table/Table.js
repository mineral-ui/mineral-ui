/* @flow */
import React, { Component } from 'react';
import deepEqual from 'react-fast-compare';
import memoizeOne from 'memoize-one';
import SelectableTable from './SelectableTable';
import SelectableSortableTable from './SelectableSortableTable';
import SortableTable from './SortableTable';
import TableBase from './TableBase';
import {
  getColumns,
  getComparators,
  getSelectableRows,
  getSortable
} from './utils';
import { DENSITY, TITLE_ELEMENT } from './constants';

import { tablePropTypes } from './propTypes';
import type {
  Columns,
  Comparators,
  Rows,
  TableDefaultProps,
  TableProps
} from './types';

class Table extends Component<TableProps> {
  static displayName = 'Table';

  static defaultProps: TableDefaultProps = {
    density: DENSITY.compact,
    messages: {
      deselectAllRows: 'Deselect all rows',
      deselectRow: 'Deselect row',
      selectAllRows: 'Select all rows',
      selectedRows: 'Selected rows',
      selectRow: 'Select row',
      sortColumnAscending: 'Sort column in ascending order',
      sortColumnDescending: 'Sort column in descending order'
    },
    titleAs: TITLE_ELEMENT.h4
  };

  static propTypes = tablePropTypes;

  columns: Columns;

  comparators: Comparators | typeof undefined;

  selectableRows: Rows;

  sortable: boolean;

  getColumns = memoizeOne(
    getColumns,
    (nextProps: TableProps, prevProps: TableProps) =>
      deepEqual(prevProps.columns, nextProps.columns) &&
      (!prevProps.columns && deepEqual(prevProps.data, nextProps.data))
  );

  getComparators = memoizeOne(
    getComparators,
    (nextProps: TableProps, prevProps: TableProps) =>
      deepEqual(nextProps.columns, prevProps.columns)
  );

  getSelectableRows = memoizeOne(getSelectableRows, deepEqual);

  getSortable = memoizeOne(
    getSortable,
    (nextProps: TableProps, prevProps: TableProps) =>
      deepEqual(nextProps.columns, prevProps.columns)
  );

  render() {
    this.columns = this.getColumns(this.props);
    this.comparators = this.getComparators(this.props);
    this.selectableRows = this.getSelectableRows(this.props.data);
    this.sortable = this.getSortable(this.props);

    const {
      defaultSelectedRows,
      onToggleRow,
      onToggleAllRows,
      selectable,
      selectedRows,
      sortable,
      ...restProps
    } = this.props;

    const rootProps = {
      ...restProps,
      columns: this.columns,
      comparators: this.comparators,
      ...(defaultSelectedRows
        ? {
            defaultSelected: this.getSelectableRows(defaultSelectedRows)
          }
        : undefined),
      ...(onToggleRow ? { onToggle: onToggleRow } : undefined),
      ...(onToggleAllRows ? { onToggleAll: onToggleAllRows } : undefined),
      ...(selectedRows ? { selected: selectedRows } : undefined),
      ...(selectable ? { selectableRows: this.selectableRows } : undefined),
      ...(this.sortable ? { sortable } : undefined)
    };

    if (selectable && this.sortable) {
      return <SelectableSortableTable {...rootProps} />;
    } else if (selectable) {
      return <SelectableTable {...rootProps} />;
    } else if (this.sortable) {
      return <SortableTable {...rootProps} />;
    } else {
      const {
        sortable: ignoreSortable,
        ...rootPropsWithoutSortable
      } = rootProps;
      return <TableBase {...rootPropsWithoutSortable} />;
    }
  }
}

export default Table;
