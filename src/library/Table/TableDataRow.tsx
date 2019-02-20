/* @flow */
import React, { Component } from 'react';
import deepEqual from 'react-fast-compare';
import TableSelectableCell from './TableSelectableCell';
import TableCell from './TableCell';
import TableRow from './TableRow';

import { TableDataRowProps } from './types';

export default class TableDataRow extends Component<TableDataRowProps> {
  static displayName = 'TableDataRow';

  shouldComponentUpdate(nextProps: TableDataRowProps) {
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
      const {
        content: ignoreContent,
        label: ignoreLabel,
        ...column
      } = restColumn;
      const cellProps = {
        children: data[key],
        columnKey: key,
        rowIndex,
        key,
        render,
        ...column
      };

      return <TableCell key={key} {...cellProps} />;
    });

    if (selectable) {
      cells.unshift(
        <TableSelectableCell
          checked={checked}
          disabled={data['disabled']}
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
      ...(data['row'] ? { render: data['row'] } : undefined),
      rowIndex,
      ...restProps
    };

    return <TableRow {...rowProps} />;
  }
}
