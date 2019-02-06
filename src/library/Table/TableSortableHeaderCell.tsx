/* @flow */
import React, { Component } from 'react';
import { isRenderProp } from '../utils';
import IconArrowDropdownDown from '../Icon/IconArrowDropdownDown';
import IconArrowDropdownUp from '../Icon/IconArrowDropdownUp';
import TableContext from './TableContext';
import {
  TableSortableHeaderCellRoot as Root,
  TableSortableHeaderCellButton as Button,
  TableSortableHeaderCellContent as Content,
  TableSortableHeaderCellIconHolder as IconHolder
} from './styled';
import { SORT } from './constants';

import { TableSortableHeaderCellProps } from './types';

const iconProps = {
  'aria-hidden': true,
  size: 'auto'
};
const sortIcon = {
  ascending: <IconArrowDropdownUp {...iconProps} />,
  descending: <IconArrowDropdownDown {...iconProps} />
};

export default class TableSortableHeaderCell extends Component<TableSortableHeaderCellProps> {
  static displayName = 'TableSortableHeaderCell';

  render() {
    return (
      <TableContext.Consumer>
        {(tableContextProps) => {
          const {
            children,
            label,
            name,
            messages,
            render,
            sortable,
            ...restProps
          } = this.props;
          const { sort, sortFn } = sortable;
          const sortColumn = sort && sort.key;
          const descending = sort ? sort.descending : false;
          const direction = descending ? SORT.descending : SORT.ascending;
          const isSorted = sortColumn === name;
          const nextDirection =
            isSorted && direction === SORT.ascending
              ? SORT.descending
              : SORT.ascending;
          const toggle = isSorted || direction !== nextDirection;
          const nextDescending = toggle ? !descending : descending;
          const nextSort = { key: name, descending: nextDescending };
          const handleSort = () => sortFn(nextSort);

          const rootProps = {
            'aria-label': label || children,
            'aria-sort': isSorted ? direction : 'none',
            role: 'columnheader',
            ...restProps
          };

          const buttonProps = {
            'aria-label':
              nextDirection === SORT.ascending
                ? messages.sortColumnAscending
                : messages.sortColumnDescending,
            onClick: handleSort,
            ...restProps
          };

          const iconHolderProps = {
            direction: (isSorted && direction) || SORT.ascending,
            isSorted
          };

          if (isRenderProp(render)) {
            const renderProps = {
              props: {
                ...tableContextProps,
                ...rootProps,
                children,
                label,
                name,
                messages,
                sortable
              },
              state: {
                direction,
                isSorted
              },
              helpers: {
                handleSort
              }
            };

            return render(renderProps);
          }

          return (
            <Root {...rootProps}>
              <Button {...buttonProps}>
                <Content>{children}</Content>
                &nbsp;
                <IconHolder {...iconHolderProps}>
                  {sortIcon[iconHolderProps.direction]}
                </IconHolder>
              </Button>
            </Root>
          );
        }}
      </TableContext.Consumer>
    );
  }
}
