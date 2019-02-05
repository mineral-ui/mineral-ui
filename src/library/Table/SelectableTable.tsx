/* @flow */
import React from 'react';
import Selectable from './Selectable';
import TableBase from './TableBase';

import type { SelectableTableProps } from './types';

const SelectableTable = (props: SelectableTableProps) => {
  const { data, selectableRows } = props;
  return (
    <Selectable {...props} data={selectableRows}>
      {(props) => {
        const {
          onToggle: ignoreOnToggle,
          onToggleAll: ignoreOnToggleAll,
          ...restProps
        } = props;
        return <TableBase {...restProps} data={data} />;
      }}
    </Selectable>
  );
};

SelectableTable.displayName = 'SelectableTable';

export default SelectableTable;
