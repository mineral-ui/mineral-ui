/* @flow */
import React, { Component } from 'react';
import deepEqual from 'react-fast-compare';
import TableSelectableCell from './TableSelectableCell';
import TableCell from './TableCell';
import TableRow from './TableRow';

import type { Toggle } from './Selectable';
import type { Columns, Messages, Row } from './Table';

type Props = {
  checked?: boolean,
  columns: Columns,
  data: Row,
  messages: Messages,
  rowIndex: number,
  toggle?: Toggle
};

export default class TableDataRow extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    return !deepEqual(this.props, nextProps);
  }

  toggle = () => {
    const { toggle } = this.props;
    toggle && toggle(this.props.data);
  };

  render() {
    const {
      checked,
      columns,
      data,
      messages,
      rowIndex,
      toggle,
      ...restProps
    } = this.props;
    const selectable = Boolean(toggle);

    const cells = columns.map(({ cell: render, key, ...restColumn }) => {
      const cellProps = {
        children: data[key],
        columnKey: key,
        rowIndex,
        key,
        render,
        ...restColumn
      };

      return <TableCell key={key} {...cellProps} />;
    });

    if (selectable) {
      cells.unshift(
        <TableSelectableCell
          checked={checked}
          disabled={data.disabled}
          key="selectable"
          label={checked ? messages.deselectRow : messages.selectRow}
          onChange={this.toggle}
        />
      );
    }

    const rowProps = {
      children: cells,
      isSelected: checked,
      isSelectable: selectable,
      ...(data.row ? { render: data.row } : undefined),
      rowIndex,
      ...restProps
    };

    return <TableRow {...rowProps} />;
  }
}
