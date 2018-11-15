/* @flow */
import React, { Component } from 'react';
import deepEqual from 'react-fast-compare';
import SelectableTable from './SelectableTable';
import SelectableSortableTable from './SelectableSortableTable';
import SortableTable from './SortableTable';
import TableBase from './TableBase';
import { DENSITY, TITLE_ELEMENT } from './constants';

import { tablePropTypes } from './propTypes';
import type {
  Columns,
  Comparators,
  Rows,
  TableDefaultProps,
  TableProps
} from './types';

const generateColumns = (data: Rows) =>
  data[0]
    ? Object.keys(data[0]).reduce((acc, value) => {
        acc.push({ content: value, key: value });
        return acc;
      }, [])
    : [];

const getColumns = ({ columns, data }: TableProps) =>
  columns || generateColumns(data);

const getComparators = ({ columns }: TableProps) => {
  const comparators =
    columns &&
    columns.reduce((acc, column) => {
      const { key, sortComparator } = column;
      if (sortComparator) {
        acc[key] = sortComparator;
      }
      return acc;
    }, {});

  return comparators && Object.keys(comparators).length
    ? comparators
    : undefined;
};

const getSelectableRows = (rows: Rows) => rows.filter((row) => !row.disabled);

const getSortable = ({ columns, defaultSort, sort, sortable }: TableProps) =>
  Boolean(
    defaultSort ||
      sort ||
      sortable ||
      (columns && columns.some((column) => column.sortable))
  );

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
    titleElement: TITLE_ELEMENT.h4
  };

  static propTypes = tablePropTypes;

  columns: Columns = getColumns(this.props);

  comparators: Comparators | typeof undefined = getComparators(this.props);

  selectableRows: Rows = getSelectableRows(this.props.data);

  sortable: boolean = getSortable(this.props);

  componentWillUpdate(nextProps: TableProps) {
    const columnsChanged = !deepEqual(this.props.columns, nextProps.columns);
    const dataChanged = !deepEqual(this.props.data, nextProps.data);

    if (columnsChanged || (!this.props.columns && dataChanged)) {
      this.columns = getColumns(nextProps);
    }

    if (columnsChanged) {
      this.sortable = getSortable(nextProps);
      this.comparators = getComparators(nextProps);
    }

    if (dataChanged) {
      this.selectableRows = getSelectableRows(nextProps.data);
    }
  }

  render() {
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
        ? { defaultSelected: getSelectableRows(defaultSelectedRows) }
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
