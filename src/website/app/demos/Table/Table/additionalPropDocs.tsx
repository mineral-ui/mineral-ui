/* @flow */
import { COLUMN_ALIGN } from '../../../../../library/Table/constants';
import { joinQuoted } from '../../../utils/propDocs';

import type { AdditionalPropDocs } from '../../../pages/ComponentDoc/types';

const additionalPropDocs: AdditionalPropDocs = [
  {
    title: 'Column',
    description:
      'Definition for each column in Table. [See example](#column-def).',
    propDocs: {
      cell: {
        description: `Provides custom rendering control. See the [custom cell example](#custom-cell) and our [render props guide](/render-props).`,
        type: {
          name: 'function',
          value: '(props?: RenderProps) => React$Node'
        }
      },
      content: {
        description: 'Rendered content of the column header',
        type: 'React$Node',
        required: true
      },
      headerCell: {
        description: `Provides custom rendering control. See the [custom header cell example](#custom-cell) and our [render props guide](/render-props).`,
        type: {
          name: 'function',
          value: '(props?: RenderProps) => React$Node'
        }
      },
      label: {
        description:
          "If a column's `content` is not a string, `label` must be provided for accessibility purposes.",
        type: 'string'
      },
      key: {
        description: 'Used to look up the value for a column in your row data',
        type: 'string',
        required: true
      },
      maxWidth: {
        description:
          'Maximum width of the column. See `width` for more details.',
        type: 'number | string'
      },
      minWidth: {
        description:
          'Minimum width of the column. See `width` for more details.',
        type: 'number | string'
      },
      primary: {
        description:
          'Render cells in the column as `<th scope="row" />` ([see example](#primary-column))',
        type: 'boolean'
      },
      sortable: {
        description:
          'Enable user to sort the column ([see example](#sortable))',
        type: 'boolean'
      },
      sortComparator: {
        description:
          'Define a custom [comparator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description) for the column ([see example](#sortable))',
        type: {
          name: 'function',
          value: '(a: Object, b: Object, key: string) => -1 | 0 | 1'
        }
      },
      textAlign: {
        description:
          'Align the text of both the column header and the cells ([see example](#column-align))',
        type: {
          name: 'union',
          value: joinQuoted(Object.values(COLUMN_ALIGN))
        }
      },
      width: {
        description:
          'Width of the column. `minWidth` takes precedence over `maxWidth` which takes precedence over `width`. If no width-related properties are defined, columns will use the width decided by the rendered `<table>` element.',
        type: 'number | string'
      }
    }
  }
];

export default additionalPropDocs;
