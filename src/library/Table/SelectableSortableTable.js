/* @flow */
import React from 'react';
import Selectable from './Selectable';
import SortableTable from './SortableTable';

import type { SelectableSortableTableProps } from './types';

const SelectableSortableTable = (props: SelectableSortableTableProps) => {
  const { data, selectableRows } = props;
  return (
    <Selectable {...props} data={selectableRows}>
      {(props) => <SortableTable {...props} data={data} />}
    </Selectable>
  );
};

SelectableSortableTable.displayName = 'SelectableSortableTable';

export default SelectableSortableTable;
