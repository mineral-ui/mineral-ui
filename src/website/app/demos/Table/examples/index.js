/* @flow */
import alignment from './alignment';
import basic from './basic';
import columnAlign from './columnAlign';
import columnDef from './columnDef';
import density from './density';
import highContrast from './highContrast';
import importSyntax from './importSyntax';
import largeDataSets from './largeDataSets';
import primaryColumn from './primaryColumn';
import rtl from './rtl';
import scrollable from './scrollable';
import selectable from './selectable';
import selectableControlled from './selectableControlled';
import sortable from './sortable';
import sortableControlled from './sortableControlled';
import striped from './striped';
import title from './title';

export default [
  importSyntax,
  basic,
  columnDef,
  sortable,
  sortableControlled,
  selectable,
  selectableControlled,
  title,
  primaryColumn,
  columnAlign,
  density,
  striped,
  highContrast,
  scrollable,
  rtl,
  alignment,
  largeDataSets
];
