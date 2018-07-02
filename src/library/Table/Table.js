/* @flow */
import React, { Component } from 'react';
import createReactContext, { type Context } from 'create-react-context';
import { createStyledComponent } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import { generateId } from '../utils';
import DataRow from './DataRow';
import HeaderRow from './HeaderRow';
import _OverflowContainer, {
  componentTheme as overflowContainerComponentTheme
} from './OverflowContainer';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import TableTitle from './TableTitle';

type Props = {
  /** Column definitions ([see Column type for details](#Column-type)) */
  columns?: Columns,
  /** Row data ([see example for more details](#basic)) */
  data: Array<Object>,
  /** Amount of vertical space in Table's cells */
  density: 'default' | 'spacious',
  /** Visually hide Table's header, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology) */
  hideHeader?: boolean,
  /** Visually hide Table's title, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology) */
  hideTitle?: boolean,
  /** Render Table with high-contrast styles */
  highContrast?: boolean,
  /** @Private Id of the Table */
  id?: string,
  /**
   * Specifies a key in the row data that gives a row its unique identity.
   * See the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).
   */
  rowKey?: string,
  /**
   * Determines the scrolling behavior when Table's width exceeds that of its
   * container
   */
  scrollable?: boolean,
  /** Renders Table with alternating row stripes */
  striped?: boolean,
  /** Title for Table */
  title: React$Node,
  /** Available title styles (see [Text](/components/text)) */
  titleAppearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  /** Available title elements (see [Text](/components/text)) */
  titleElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
};

type State = {
  scrollable: boolean
};

type Appearance = {
  density?: 'default' | 'spacious',
  highContrast?: boolean,
  striped?: boolean
};

export type Columns = Array<Column>;
// See columnDef example for descriptions
type Column = {
  content: React$Node,
  key: string,
  label?: string,
  maxWidth?: number | string,
  minWidth?: number | string,
  primary?: boolean,
  textAlign?: 'start' | 'end' | 'center' | 'justify',
  width?: number | string
};

export type Row = Object;
export type Rows = Array<Row>;

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

const generateColumns = (data: Rows) =>
  Object.keys(data[0]).reduce((acc, cell) => {
    acc.push({ content: cell, key: cell });
    return acc;
  }, []);

const getColumnDefs = ({ columns, data }: Props) =>
  columns || generateColumns(data);

export const TableContext: Context<Appearance> = createReactContext({});

/**
 * Table displays structured data with columns and rows.
 */
export default class Table extends Component<Props, State> {
  static defaultProps = {
    titleElement: 'h4',
    density: 'default',
    scrollable: true
  };

  columns: Columns = getColumnDefs(this.props);

  id: string = this.props.id || `table-${generateId()}`;

  titleId: string = `${this.id}-title`;

  componentWillUpdate(nextProps: Props) {
    if (
      this.props.columns !== nextProps.columns ||
      (!this.props.columns && this.props.data !== nextProps.data)
    ) {
      this.columns = getColumnDefs(nextProps);
    }
  }

  render() {
    const {
      data,
      density,
      hideHeader,
      hideTitle,
      highContrast,
      rowKey,
      scrollable,
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
            <HeaderRow columns={this.columns} />
          </TableHeader>
          <TableBody>
            {data.map((rowData, index) => (
              <DataRow
                columns={this.columns}
                data={rowData}
                key={rowData[rowKey] || index}
              />
            ))}
          </TableBody>
        </Root>
      </TableContext.Provider>
    );

    if (scrollable) {
      const containerProps = {
        'aria-labelledby': this.titleId,
        role: 'group'
      };
      table = (
        <OverflowContainer {...containerProps}>{table}</OverflowContainer>
      );
    }

    return table;
  }
}
