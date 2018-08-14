/* @flow */
import React, { Component } from 'react';
import deepEqual from 'react-fast-compare';
import Selectable from './Selectable';
import Sortable, { type Comparators } from './Sortable';
import TableBase from './TableBase';

type Props = {
  /** Column definitions ([see Column type for details](#Column-type)) */
  columns?: Columns,
  /** Row data ([see example for more details](#basic)) */
  data: Rows,
  /** Initially selected rows when `selectable = true`. Primarily for use with uncontrolled components. */
  defaultSelectedRows?: Array<Object>,
  /** Initially sorted column & direction. Primarily for use with uncontrolled components. */
  defaultSort?: {
    key: string,
    descending?: boolean
  },
  /** Amount of vertical space in Table's cells */
  density?: 'compact' | 'spacious',
  /** Visually hide Table's header, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology) */
  hideHeader?: boolean,
  /** Visually hide Table's title, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology) */
  hideTitle?: boolean,
  /** Render Table with high-contrast styles */
  highContrast?: boolean,
  /**
   * Various messages and labels used by Table
   * ([see example for more details](#rtl))
   */
  messages?: Messages,
  /** Called when data is sorted */
  onSort?: (sort: {
    key: string,
    descending?: boolean
  }) => void,
  /** Called when all rows are selected/deselected */
  onToggleAllRows?: (rows: Array<Object>, selected: boolean) => void,
  /** Called when a single row is selected/deselected */
  onToggleRow?: (row: Object, selected: boolean) => void,
  /**
   * Specifies a key in the row data that gives a row its unique identity.
   * See the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).
   */
  rowKey?: string,
  /**
   * Determines the scrolling behavior when Table's width exceeds that of its
   * container
   */
  scrollable?: boolean,
  /**
   * Enable the user to select rows. Prepends a column for checkboxes to your
   * Table.
   */
  selectable?: boolean,
  /**
   * Selected rows when `selectable = true`. Primarily for use with controlled
   * components.
   */
  selectedRows?: Array<Object>,
  /**
   * Sorted column & direction
   */
  sort?: {
    key: string,
    descending?: boolean
  },
  /** Enable the user to sort all columns */
  sortable?: boolean,
  /**
   * The [sort comparator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description)
   * used by sortable columns
   */
  sortComparator?: (a: Object, b: Object, key: string) => -1 | 0 | 1,
  /** Renders Table with alternating row stripes */
  striped?: boolean,
  /** Title for Table */
  title: React$Node,
  /** Available title styles (see [Text](/components/text)) */
  titleAppearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  /** Available title elements (see [Text](/components/text)) */
  titleElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
};

export type Columns = Array<Column>;

// See demos/Table/index.js additionalTypes for descriptions
export type Column = {
  cell?: RenderFn,
  content: React$Node,
  headerCell?: RenderFn,
  key: string,
  label?: string,
  maxWidth?: number | string,
  minWidth?: number | string,
  primary?: boolean,
  sortable?: boolean,
  sortComparator?: (a: Object, b: Object, key: string) => -1 | 1 | 0,
  textAlign?: 'start' | 'end' | 'center' | 'justify',
  width?: number | string
};

export type Messages = {
  deselectAllRows: string,
  deselectRow: string,
  selectAllRows: string,
  selectRow: string,
  selectedRows: string,
  sortColumnAscending: string,
  sortColumnDescending: string
};

export type Row = Object;
export type Rows = Array<Row>;

export type RenderFn = (props: RenderProps) => React$Node;
export type RenderProps = {
  props: Object,
  state?: Object,
  helpers?: Object
};

const generateColumns = (data: Rows) =>
  data[0]
    ? Object.keys(data[0]).reduce((acc, value) => {
        acc.push({ content: value, key: value });
        return acc;
      }, [])
    : [];

const getColumns = ({ columns, data }: Props) =>
  columns || generateColumns(data);

const getComparators = ({ columns }: Props) => {
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

const getSortable = ({ columns, defaultSort, sort, sortable }: Props) =>
  Boolean(
    defaultSort ||
      sort ||
      sortable ||
      (columns && columns.some((column) => column.sortable))
  );

/**
 * Table displays structured data with sortable columns and selectable rows.
 */
class Table extends Component<Props> {
  static defaultProps = {
    density: 'compact',
    messages: {
      deselectAllRows: 'Deselect all rows',
      deselectRow: 'Deselect row',
      selectAllRows: 'Select all rows',
      selectedRows: 'Selected rows',
      selectRow: 'Select row',
      sortColumnAscending: 'Sort column in ascending order',
      sortColumnDescending: 'Sort column in descending order'
    },
    titleElement: 'h4'
  };

  columns: Columns = getColumns(this.props);

  comparators: Comparators | typeof undefined = getComparators(this.props);

  selectableRows: Rows = getSelectableRows(this.props.data);

  sortable: boolean = getSortable(this.props);

  componentWillUpdate(nextProps: Props) {
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

/* eslint-disable react/prop-types */
const SelectableTable = (props) => {
  const { data, selectableRows } = props;
  return (
    <Selectable {...props} data={selectableRows}>
      {(props) => <TableBase {...props} data={data} />}
    </Selectable>
  );
};

const SortableTable = (props) => (
  <Sortable {...props} isSortable={props.sortable}>
    {({ ...props }) => <TableBase {...props} data={props.sortable.data} />}
  </Sortable>
);

const SelectableSortableTable = (props) => {
  const { data, selectableRows } = props;
  return (
    <Selectable {...props} data={selectableRows}>
      {(props) => <SortableTable {...props} data={data} />}
    </Selectable>
  );
};
/* eslint-enable */

export default Table;
