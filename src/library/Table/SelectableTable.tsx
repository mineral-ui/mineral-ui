/* @flow */
import React from 'react';
import Selectable from './Selectable';
import TableBase from './TableBase';

import { SelectableTableProps } from './types';

const SelectableTable = (props: SelectableTableProps) => {
  const { data, selectableRows } = props;
  return (
    <Selectable {...props} data={selectableRows}>
      {(props) => <TableBase {...props} data={data} />}
    </Selectable>
  );
};

SelectableTable.displayName = 'SelectableTable';

export default SelectableTable;
