/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../styles';
import IconArrowDropdownDown from '../Icon/IconArrowDropdownDown';
import IconArrowDropdownUp from '../Icon/IconArrowDropdownUp';
import TableHeaderCell from './TableHeaderCell';

import type { SortableType } from './Sortable';
import type { Messages } from './Table';

type Props = {
  /** Rendered content */
  children: React$Node,
  /** Accessible label */
  label?: string,
  /** Name of column */
  name: string,
  /** See Table */
  sortable: SortableType,
  /** See Table */
  messages: Messages
};

const componentTheme = (baseTheme: Object) => ({
  TableHeaderCell_border_focus: `1px solid ${
    baseTheme.borderColor_theme_focus
  }`,
  TableHeaderCell_color_focus: baseTheme.color_theme,

  ...baseTheme
});

const focusStyles = (theme) => ({
  color: theme.TableHeaderCell_color_focus,
  outline: theme.TableHeaderCell_border_focus,
  outlineOffset: `-${theme.TableHeaderCell_border_focus.split(' ')[0]}`
});

// [1] Extends the clickable area of the Button to fill the entire cell
const styles = {
  root: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      overflow: 'hidden', // [1]

      '&:hover': {
        color: theme.icon_color_theme
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
      verticalAlign: theme.TableHeaderCell_verticalAlign,
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
  iconHolder: ({ isActiveSort, direction, theme }) => {
    const iconAdjustment = pxToEm(2);
    const space = `${parseFloat(theme.space_inline_xxs) +
      parseFloat(iconAdjustment)}em`;

    return {
      color: theme.icon_color,
      display: 'inline-block',
      height: '0.875em',
      marginLeft: theme.direction === 'ltr' ? space : null,
      marginRight: theme.direction === 'rtl' ? space : null,
      opacity: isActiveSort ? null : 0,
      position: 'relative',
      top: direction === 'ascending' ? 2 : 1,
      width: '0.875em',

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

export default function TableSortableHeaderCell({
  children,
  label,
  name,
  messages,
  sortable,
  ...restProps
}: Props) {
  const { sort, sortFn } = sortable;

  const sortColumn = sort && sort.key;
  const descending = sort ? sort.descending : false;

  const isActiveSort = sortColumn === name;
  const activeDirection = descending ? 'descending' : 'ascending';
  const nextDirection =
    isActiveSort && activeDirection === 'ascending'
      ? 'descending'
      : 'ascending';

  const toggle = isActiveSort || activeDirection !== nextDirection;
  const nextDescending = toggle ? !descending : descending;

  const a11yLabel = label || children;

  const rootProps = {
    ...restProps,
    'aria-label': a11yLabel,
    'aria-sort': isActiveSort ? activeDirection : 'none',
    role: 'columnheader'
  };

  const buttonProps = {
    ...restProps,
    'aria-label':
      nextDirection === 'ascending'
        ? messages.sortColumnAscending
        : messages.sortColumnDescending,
    onClick: () => {
      sortFn({ key: name, descending: nextDescending });
    }
  };
  const iconHolderProps = {
    direction: (isActiveSort && activeDirection) || 'ascending',
    isActiveSort
  };

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
}
