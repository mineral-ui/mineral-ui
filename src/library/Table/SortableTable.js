/* @flow */
import React from 'react';
import Sortable from './Sortable';
import TableBase from './TableBase';

import type { SortableTableProps } from './types';

const SortableTable = (props: SortableTableProps) => (
  <Sortable {...props} isSortable={props.sortable}>
    {(props) => {
      const { onSort: ignoreOnSort, ...restProps } = props;
      return <TableBase {...restProps} data={props.sortable.data} />;
    }}
  </Sortable>
);

SortableTable.displayName = 'SortableTable';

export default SortableTable;
