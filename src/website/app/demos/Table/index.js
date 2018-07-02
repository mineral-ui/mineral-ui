/* @flow */
import { componentTheme as tableComponentTheme } from '../../../../library/Table/Table';
import { componentTheme as tableCellComponentTheme } from '../../../../library/Table/TableCell';
import { componentTheme as tableColumnHeaderComponentTheme } from '../../../../library/Table/TableColumnHeader';
import { componentTheme as tableHeaderComponentTheme } from '../../../../library/Table/TableHeader';
import { componentTheme as tableRowComponentTheme } from '../../../../library/Table/TableRow';
import { componentTheme as tableTitleComponentTheme } from '../../../../library/Table/TableTitle';

import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/Table/Table');

import bestPractices from './bestPractices';

export default {
  bestPractices,
  componentTheme: [
    tableComponentTheme,
    tableCellComponentTheme,
    tableColumnHeaderComponentTheme,
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
        content: {
          flowType: { name: 'React$Node' },
          required: true,
          description: 'Rendered content of the column header'
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
        textAlign: {
          flowType: { name: 'boolean' },
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
  whenHowToUse: `Table is best suited to data which a user will need to compare
data points or investigate relationships. For simpler data, consider a list
structure; for more complex data or user needs, consider data visualization,
possibly in addition to Table.

For Tables with many columns, [striped](#striped) rows can enhance readability.
Tables that do not have enough columns to fill the width can be hard to read and
should be displayed at a more appropriate width (perhaps using
[Box](/components/box) or other layout components).

Table is designed to optimize performance and minimize excess operations, but
rendering more than 100 rows is still not recommended.`
};
