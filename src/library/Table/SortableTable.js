/* @flow */
import React from 'react';
import Sortable from './Sortable';
import TableBase from './TableBase';

import type { SortableTableProps } from './types';

const SortableTable = (props: SortableTableProps) => (
  <Sortable {...props} isSortable={props.sortable}>
    {({ ...props }) => <TableBase {...props} data={props.sortable.data} />}
  </Sortable>
);

export default SortableTable;
