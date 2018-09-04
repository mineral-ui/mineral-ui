/* @flow */
import { componentTheme as tableComponentTheme } from '../../../../library/Table/TableBase';
import { componentTheme as tableCellComponentTheme } from '../../../../library/Table/TableCell';
import { componentTheme as tableHeaderCellComponentTheme } from '../../../../library/Table/TableHeaderCell';
import { componentTheme as tableHeaderComponentTheme } from '../../../../library/Table/TableHeader';
import { componentTheme as tableRowComponentTheme } from '../../../../library/Table/TableRow';
import { componentTheme as tableTitleComponentTheme } from '../../../../library/Table/TableTitle';

import examples from './examples';
import bestPractices from './bestPractices';

const doc = require('!!react-docgen-loader!../../../../library/Table/Table');

export default {
  bestPractices,
  componentTheme: [
    tableComponentTheme,
    tableCellComponentTheme,
    tableHeaderCellComponentTheme,
    tableHeaderComponentTheme,
    tableRowComponentTheme,
    tableTitleComponentTheme
  ],
  doc,
  additionalTypes: [
    {
      title: 'Column',
      description:
        'Definition for each column in Table. [See example](#column-def).',
      content: {
        cell: {
          flowType: {
            name: 'signature',
            raw: '(props?: RenderProps) => React$Node',
            type: 'function'
          },
          required: false,
          description: `Provides custom rendering control. See the [custom cell example](#custom-cell) and our [render props guide](/render-props).`
        },
        content: {
          flowType: { name: 'React$Node' },
          required: true,
          description: 'Rendered content of the column header'
        },
        headerCell: {
          flowType: {
            name: 'signature',
            raw: '(props?: RenderProps) => React$Node',
            type: 'function'
          },
          required: false,
          description: `Provides custom rendering control. See the [custom header cell example](#custom-cell) and our [render props guide](/render-props).`
        },
        label: {
          flowType: { name: 'string' },
          required: false,
          description:
            "If a column's `content` is not a string, `label` must be provided for accessibility purposes."
        },
        key: {
          flowType: { name: 'string' },
          required: true,
          description: 'Used to look up the value for a column in your row data'
        },
        maxWidth: {
          flowType: { name: 'number, string' },
          required: false,
          description:
            'Maximum width of the column. See `width` for more details.'
        },
        minWidth: {
          flowType: { name: 'number, string' },
          required: false,
          description:
            'Minimum width of the column. See `width` for more details.'
        },
        primary: {
          flowType: { name: 'boolean' },
          required: false,
          description:
            'Render cells in the column as `<th scope="row" />` ([see example](#primary-column))'
        },
        sortable: {
          flowType: { name: 'boolean' },
          required: false,
          description:
            'Enable user to sort the column ([see example](#sortable))'
        },
        sortComparator: {
          flowType: {
            name: 'signature',
            raw: '(a: Object, b: Object, key: string) => -1 | 0 | 1',
            type: 'function'
          },
          required: false,
          description:
            'Define a custom [comparator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description) for the column ([see example](#sortable))'
        },
        textAlign: {
          flowType: { name: `'start', 'end', 'center', 'justify'` },
          required: false,
          description:
            'Align the text of both the column header and the cells ([see example](#column-align))'
        },
        width: {
          flowType: { name: 'number, string' },
          required: false,
          description:
            'Width of the column. `minWidth` takes precedence over `maxWidth` which takes precedence over `width`. If no width-related properties are defined, columns will use the width decided by the rendered `<table>` element.'
        }
      }
    }
  ],
  examples,
  slug: 'table',
  title: 'Table',
  whenHowToUse: `Table is best suited to data in which a user will need to
compare data points or investigate relationships. For simpler data, consider a
list structure; for more complex data or user needs, consider data
visualization, possibly in addition to Table. Don't use Table for data sets with
a blend of text, images, and data visualizations, or content with mixed
formatting; use [Card](/components/card) instead.

For Tables with many columns, [striped](#striped) rows can enhance readability.
Tables that do not have enough columns to fill the width can be hard to read and
should be displayed at a more appropriate width (perhaps using
[Box](/components/box) or other layout components).

Table is designed to optimize performance and minimize excess operations, but
rendering more than 100 rows is still not recommended.`
};
