/* @flow */
import Table from '../../../../../library/Table';
import { DENSITY, TITLE_ELEMENT } from '../../../../../library/Table/constants';
import joinQuoted from '../../../utils/joinQuoted';
import formatObject from '../../../utils/formatObject';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const sortObjectType = {
  key: 'string',
  'descending?': 'boolean'
};

const messagesObjectType = {
  deselectAllRows: 'string',
  deselectRow: 'string',
  selectAllRows: 'string',
  selectRow: 'string',
  selectedRows: 'string',
  sortColumnAscending: 'string',
  sortColumnDescending: 'string'
};

const propDocs: ComponentPropDocs = {
  columns: {
    description:
      'Column definitions ([see Column type for details](#Column-type))',
    type: 'Array<Column>'
  },
  data: {
    description: 'Row data ([see example for more details](#basic))',
    type: 'Array<Row>',
    required: true
  },
  defaultSelectedRows: {
    description:
      'Initially selected rows when `selectable = true`. Primarily for use with uncontrolled components.',
    type: 'Array<Row>'
  },
  defaultSort: {
    description:
      'Initially sorted column & direction. Primarily for use with uncontrolled components.',
    type: {
      name: 'object',
      value: formatObject(sortObjectType)
    }
  },
  density: {
    description: `Amount of vertical space in Table's cells`,
    type: {
      name: 'union',
      value: joinQuoted(Object.values(DENSITY))
    },
    defaultValue: `'${Table.defaultProps.density}'`
  },
  hideHeader: {
    description: `Visually hide Table's header, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology)`,
    type: 'boolean'
  },
  hideTitle: {
    description: `Visually hide Table's title, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology)`,
    type: 'boolean'
  },
  highContrast: {
    description: 'Render Table with high-contrast styles',
    type: 'boolean'
  },
  messages: {
    description: `Various messages and labels used by Table ([see example for more details](#rtl))`,
    type: {
      name: 'object',
      value: formatObject(messagesObjectType)
    },
    defaultValue: formatObject(Table.defaultProps.messages, true)
  },
  onSort: {
    description: 'Called when data is sorted',
    type: {
      name: 'function',
      value: `(sort: ${formatObject(sortObjectType)}) => void`
    }
  },
  onToggleAllRows: {
    description: 'Called when all rows are selected/deselected',
    type: {
      name: 'function',
      value: '(rows: Array<Row>, selected: boolean) => void'
    }
  },
  onToggleRow: {
    description: 'Called when a single row is selected/deselected',
    type: {
      name: 'function',
      value: '(row: Row, selected: boolean) => void'
    }
  },
  rowKey: {
    description:
      'Specifies a key in the row data that gives a row its unique identity. See the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).',
    type: 'string'
  },
  scrollable: {
    description: `Determines the scrolling behavior when Table's width exceeds that of its container`,
    type: 'boolean'
  },
  selectable: {
    description:
      'Enable the user to select rows. Prepends a column for checkboxes to your Table.',
    type: 'boolean'
  },
  selectedRows: {
    description:
      'Selected rows when `selectable = true`. Primarily for use with controlled components.',
    type: 'Array<Row>'
  },
  sort: {
    description: 'Sorted column & direction',
    type: {
      name: 'object',
      value: formatObject(sortObjectType)
    }
  },
  sortable: {
    description: 'Enable the user to sort all columns',
    type: 'boolean'
  },
  sortComparator: {
    description:
      'The [sort comparator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description) used by sortable columns',
    type: {
      name: 'function',
      value: `(a: Object, b: Object, key: string) => -1 | 0 | 1`
    }
  },
  striped: {
    description: 'Renders Table with alternating row stripes',
    type: 'boolean'
  },
  title: {
    description: 'Title for Table',
    type: 'React$Node',
    required: true
  },
  titleAppearance: {
    description: 'Available title styles (see [Text](/components/text))',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(TITLE_ELEMENT))
    }
  },
  titleAs: {
    description: 'Available title elements (see [Text](/components/text))',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(TITLE_ELEMENT))
    },
    defaultValue: `'${Table.defaultProps.titleAs}'`
  }
};

export default propDocs;
