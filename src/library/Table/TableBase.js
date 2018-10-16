/* @flow */
import React, { Component } from 'react';
import createReactContext, { type Context } from 'create-react-context';
import { createStyledComponent } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import { generateId } from '../utils';
import _OverflowContainer, {
  componentTheme as overflowContainerComponentTheme
} from '../OverflowContainer/OverflowContainer';
import TableDataRow from './TableDataRow';
import TableHeaderRow from './TableHeaderRow';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import TableTitle from './TableTitle';

import type { SelectableType } from './Selectable';
import type { SortableType } from './Sortable';
import type { Columns, Messages, Rows } from './Table';

// See Table
type Props = {
  columns: Columns,
  data: Rows,
  hideHeader?: boolean,
  hideTitle?: boolean,
  id?: string,
  isSortable?: boolean,
  messages: Messages,
  rowKey?: string,
  scrollable?: boolean,
  selectable?: SelectableType,
  sortable?: SortableType,
  title: React$Node,
  titleAppearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  titleElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & TableContextType;

type State = {
  scrollable: boolean
};

type TableContextType = {
  density?: 'compact' | 'spacious',
  highContrast?: boolean,
  striped?: boolean
};

export const componentTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'OverflowContainer',
      theme: overflowContainerComponentTheme(baseTheme)
    },
    {
      name: 'Table',
      theme: {}
    },
    baseTheme
  );

const OverflowContainer = createThemedComponent(
  _OverflowContainer,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'Table',
        theme: componentTheme(baseTheme)
      },
      {
        name: 'OverflowContainer',
        theme: {}
      },
      baseTheme
    )
);

const Root = createStyledComponent(
  'table',
  {
    borderCollapse: 'collapse',
    borderSpacing: 0,
    width: '100%'
  },
  {
    displayName: 'Table',
    rootEl: 'table',
    includeStyleReset: true
  }
);

export const TableContext: Context<TableContextType> = createReactContext({});

/**
 * Table displays structured data with columns and rows.
 */
export default class TableBase extends Component<Props, State> {
  static defaultProps = {
    titleElement: 'h4',
    density: 'compact',
    scrollable: true
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
      titleElement,
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
            element={titleElement}
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
