/* @flow */
import {
  arrayOf,
  bool,
  func,
  node,
  number,
  object,
  oneOf,
  oneOfType,
  shape,
  string
} from 'prop-types';
import { COLUMN_ALIGN, DENSITY, TITLE_ELEMENT } from './constants';

const sort = shape({
  key: string.isRequired,
  descending: bool
});

const columns = arrayOf(
  shape({
    cell: func,
    content: node.isRequired,
    headerCell: func,
    key: string.isRequired,
    label: string,
    maxWidth: oneOfType([number, string]),
    minWidth: oneOfType([number, string]),
    primary: bool,
    sortable: bool,
    sortComparator: func,
    textAlign: oneOf(Object.keys(COLUMN_ALIGN)),
    width: oneOfType([number, string])
  })
);

const rows = arrayOf(object);

const messages = shape({
  deselectAllRows: string.isRequired,
  deselectRow: string.isRequired,
  selectAllRows: string.isRequired,
  selectRow: string.isRequired,
  selectedRows: string.isRequired,
  sortColumnAscending: string.isRequired,
  sortColumnDescending: string.isRequired
});

export const tablePropTypes = {
  columns,
  data: rows.isRequired,
  defaultSelectedRows: rows,
  defaultSort: sort,
  density: oneOf(Object.keys(DENSITY)),
  hideHeader: bool,
  hideTitle: bool,
  highContrast: bool,
  messages: messages,
  onSort: func,
  onToggleAllRows: func,
  onToggleRow: func,
  rowKey: string,
  scrollable: bool,
  selectable: bool,
  selectedRows: rows,
  sort: sort,
  sortable: bool,
  sortComparator: func,
  striped: bool,
  title: node.isRequired,
  titleAppearance: oneOf(Object.keys(TITLE_ELEMENT)),
  titleAs: oneOf(Object.keys(TITLE_ELEMENT))
};
