/* @flow */
import React, { Component } from 'react';
import { generateId } from '../utils';
import TableContext from './TableContext';
import TableDataRow from './TableDataRow';
import TableHeaderRow from './TableHeaderRow';
import TableHeader from './TableHeader';
import TableTitle from './TableTitle';
import {
  TableRoot as Root,
  TableBody,
  TableOverflowContainer as OverflowContainer
} from './styled';
import { DENSITY, TITLE_ELEMENT } from './constants';

import type {
  TableBaseDefaultProps,
  TableBaseProps,
  TableBaseState
} from './types';

export default class TableBase extends Component<
  TableBaseProps,
  TableBaseState
> {
  static displayName = 'TableBase';

  static defaultProps: TableBaseDefaultProps = {
    density: DENSITY.compact,
    scrollable: true,
    titleAs: TITLE_ELEMENT.h4
  };

  id: string = this.props.id || `table-${generateId()}`;

  titleId: string = `${this.id}-title`;

  render() {
    const {
      columns,
      data,
      density,
      hideHeader,
      hideTitle,
      highContrast,
      isSortable,
      messages,
      rowKey,
      scrollable,
      selectable,
      sortable,
      striped,
      title,
      titleAppearance,
      titleAs,
      ...rootProps
    } = this.props;
    const appearanceProps = {
      density,
      highContrast,
      striped
    };
    const tableHeaderRowProps = {
      checked: selectable && selectable.all,
      columns,
      indeterminate: selectable && selectable.some,
      isSortable,
      messages,
      sortable,
      toggle: selectable && selectable.toggleAll
    };

    let table = (
      <TableContext.Provider value={appearanceProps}>
        <Root {...rootProps}>
          <TableTitle
            appearance={titleAppearance}
            as={titleAs}
            hide={hideTitle}
            id={this.titleId}>
            {title}
          </TableTitle>
          <TableHeader hide={hideHeader}>
            <TableHeaderRow {...tableHeaderRowProps} />
          </TableHeader>
          <TableBody>
            {data.map((rowData, index) => {
              const rowProps = {
                checked: selectable && selectable.isSelected(rowData),
                columns,
                data: rowData,
                messages,
                rowIndex: index,
                toggle: selectable && selectable.toggle
              };
              return (
                <TableDataRow key={rowData[rowKey] || index} {...rowProps} />
              );
            })}
          </TableBody>
        </Root>
      </TableContext.Provider>
    );

    if (scrollable) {
      const containerProps = {
        'aria-labelledby': this.titleId,
        role: 'group',
        scrollX: true
      };
      table = (
        <OverflowContainer {...containerProps}>{table}</OverflowContainer>
      );
    }

    return table;
  }
}
