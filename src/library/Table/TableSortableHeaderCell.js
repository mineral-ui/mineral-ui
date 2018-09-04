/* @flow */
import React, { Component } from 'react';
import { isRenderProp } from '../utils';
import { createStyledComponent, pxToEm } from '../styles';
import IconArrowDropdownDown from '../Icon/IconArrowDropdownDown';
import IconArrowDropdownUp from '../Icon/IconArrowDropdownUp';
import TableHeaderCell from './TableHeaderCell';
import { TableContext } from './TableBase';

import type { SortableType } from './Sortable';
import type { Messages, RenderFn } from './Table';

type Props = {
  /** Rendered content */
  children: React$Node,
  /** Accessible label */
  label?: string,
  /** See Table */
  messages: Messages,
  /** Name of column */
  name: string,
  /**
   * Provides custom rendering control. See the
   * [custom sortable header cell example](/components/table/#custom-sortable-header-cell)
   * and our [render props guide](/render-props).
   */
  render?: RenderFn,
  /** See Table */
  sortable: SortableType
};

export const componentTheme = (baseTheme: Object) => ({
  TableSortableHeaderCell_border_focus: `1px solid ${
    baseTheme.borderColor_theme_focus
  }`,
  TableSortableHeaderCell_color_focus: baseTheme.color_theme,
  TableSortableHeaderCell_color_hover: baseTheme.icon_color_theme,
  TableSortableHeaderCellIcon_size: pxToEm(14),

  ...baseTheme
});

const focusStyles = (theme) => ({
  color: theme.TableSortableHeaderCell_color_focus,
  outline: theme.TableSortableHeaderCell_border_focus,
  outlineOffset: `-${theme.TableSortableHeaderCell_border_focus.split(' ')[0]}`
});

// [1] Extends the clickable area of the Button to fill the entire cell
const styles = {
  root: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      overflow: 'hidden', // [1]

      '&:hover': {
        color: theme.TableSortableHeaderCell_color_hover
      },

      '&:focus-within': focusStyles(theme)
    };
  },
  button: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      background: 'none',
      border: 0,
      color: 'inherit',
      cursor: 'pointer',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      position: 'relative',
      whiteSpace: 'nowrap',
      width: '100%',

      '&:focus': focusStyles(theme),

      '*:focus-within > &:focus': {
        outline: 0
      },

      '&::-moz-focus-inner': {
        border: 0
      },

      // [1]
      '&::after': {
        bottom: '100%',
        content: '""',
        height: '10em',
        left: 0,
        position: 'absolute',
        right: 0
      }
    };
  },
  content: {
    position: 'relative',
    whiteSpace: 'normal'
  },
  iconHolder: ({ isSorted, direction, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const iconAdjustment = pxToEm(2);
    const marginProperty =
      theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';

    return {
      color: theme.icon_color,
      display: 'inline-block',
      height: theme.TableSortableHeaderCellIcon_size,
      [marginProperty]: `${parseFloat(theme.space_inline_xxs) +
        parseFloat(iconAdjustment)}em`,
      opacity: isSorted ? null : 0,
      position: 'relative',
      top: direction === 'ascending' ? 2 : 1,
      width: theme.TableSortableHeaderCellIcon_size,

      '& > [role="img"]': {
        margin: `-${iconAdjustment}`
      },

      '*:hover > button > &, button:focus > &': {
        color: 'inherit'
      }
    };
  }
};

const Root = createStyledComponent(TableHeaderCell, styles.root, {
  displayName: 'TableSortableHeaderCell',
  withProps: { noPadding: true }
});
const Button = createStyledComponent(TableHeaderCell, styles.button, {
  withProps: { element: 'button' }
});
const Content = createStyledComponent('span', styles.content);
const IconHolder = createStyledComponent('span', styles.iconHolder);

const iconProps = {
  'aria-hidden': true,
  size: 'auto'
};
const sortIcon = {
  ascending: <IconArrowDropdownUp {...iconProps} />,
  descending: <IconArrowDropdownDown {...iconProps} />
};

/**
 * TableSortableHeaderCell
 */
export default class TableSortableHeaderCell extends Component<Props> {
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
          const direction = descending ? 'descending' : 'ascending';
          const isSorted = sortColumn === name;
          const nextDirection =
            isSorted && direction === 'ascending' ? 'descending' : 'ascending';
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
              nextDirection === 'ascending'
                ? messages.sortColumnAscending
                : messages.sortColumnDescending,
            onClick: handleSort,
            ...restProps
          };

          const iconHolderProps = {
            direction: (isSorted && direction) || 'ascending',
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
