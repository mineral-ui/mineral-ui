/* @flow */
import alignment from './alignment';
import basic from './basic';
import columnAlign from './columnAlign';
import columnDef from './columnDef';
import customCell from './customCell';
import customHeaderCell from './customHeaderCell';
import customSortableHeaderCell from './customSortableHeaderCell';
import customRow from './customRow';
import density from './density';
import highContrast from './highContrast';
import importSyntax from './importSyntax';
import largeDataSets from './largeDataSets';
import pagination from './pagination';
import primaryColumn from './primaryColumn';
import rtl from './rtl';
import scrollable from './scrollable';
import selectable from './selectable';
import selectableControlled from './selectableControlled';
import sortable from './sortable';
import sortableControlled from './sortableControlled';
import striped from './striped';
import selectablePaginated from './selectablePaginated';
import sortablePaginated from './sortablePaginated';
import title from './title';

export default [
  importSyntax,
  basic,
  columnDef,
  pagination,
  sortable,
  sortableControlled,
  sortablePaginated,
  selectable,
  selectableControlled,
  selectablePaginated,
  title,
  primaryColumn,
  columnAlign,
  density,
  striped,
  highContrast,
  scrollable,
  rtl,
  customCell,
  customHeaderCell,
  customSortableHeaderCell,
  customRow,
  alignment,
  largeDataSets
];
