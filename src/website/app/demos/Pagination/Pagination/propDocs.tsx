/* @flow */
import { Pagination } from '../../../../../library/Pagination/Pagination';
import { SIZE } from '../../../../../library/Pagination/constants';
import { joinQuoted } from '../../../utils/propDocs';
import formatObject from '../../../utils/formatObject';

import { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const messagesObjectType = {
  'category?': 'string',
  label: 'string',
  'pages?': {
    pageLabel:
      '(isCurrentPage: boolean, isLastPage: boolean, page: number) => string',
    next: 'string',
    previous: 'string'
  },
  'pageJumper?': {
    label: 'string',
    placeholder: 'string'
  },
  'pageSizer?': {
    status:
      '(category: string, first: number, last: number, total: number) => string',
    itemText: '(pageSize: number) => string'
  }
};

const propDocs: ComponentPropDocs = {
  currentPage: {
    description: 'The currently displayed page',
    type: 'number',
    required: true
  },
  messages: {
    description:
      'Various messages and labels used by Pagination ([see example for more details](#rtl))',
    type: {
      name: 'object',
      value: formatObject(messagesObjectType)
    },
    defaultValue: formatObject(Pagination.defaultProps.messages, true)
  },
  onPageChange: {
    description: 'Called when current page is changed',
    type: {
      name: 'function',
      value: '(currentPage: number) => void'
    },
    required: true
  },
  onPageSizeChange: {
    description: 'Called when [page size](#page-sizer) is changed',
    type: {
      name: 'function',
      value: '(pageSize: number) => void'
    }
  },
  pageSize: {
    description: 'The number of items or data to be rendered on each page',
    type: 'number',
    required: true
  },
  pageSizes: {
    description:
      'A collection of possible page sizes for a user to select from; implemented in [page sizer](#page-sizer). Be sure to provide unique values.',
    type: 'Array<number>',
    defaultValue: `[${Pagination.defaultProps.pageSizes.join(', ')}]`
  },
  showPageJumper: {
    description:
      'Render a [page jumper](#page-jumper) ([TextInput component](/components/text-input)); enables the user to change the current page on number entry',
    type: 'boolean'
  },
  showPageNumbers: {
    description: 'Hide the page number buttons',
    type: 'boolean',
    defaultValue: Pagination.defaultProps.showPageNumbers.toString()
  },
  showPageSizer: {
    description:
      'Render a [page sizer](#page-sizer) ([Select component](/components/select)); enables the user to select the page size',
    type: 'boolean'
  },
  size: {
    description: 'Available sizes',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(SIZE))
    },
    defaultValue: `'${Pagination.defaultProps.size}'`
  },
  totalCount: {
    description: 'The total number of items or data to be paginated',
    type: 'number',
    required: true
  },
  visibleRange: {
    description:
      'The number of consecutive pages to be displayed when the paginated results are truncated ([see example for details](#visible-range))',
    type: 'number',
    defaultValue: `${Pagination.defaultProps.visibleRange}`
  }
};

export default propDocs;
