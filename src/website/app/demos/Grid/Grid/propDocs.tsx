/* @flow */
import Grid from '../../../../../library/Grid';
import {
  ALIGN_ITEMS,
  GUTTER_WIDTH
} from '../../../../../library/Grid/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const stringOrArrayOfStringsType = (constant) => {
  const strings = joinQuoted(Object.values(constant));
  return {
    name: 'union',
    value: `${strings} | Array<${strings} | null>`
  };
};

const getDefaultValue = (prop) => {
  const value = Grid.defaultProps[prop];
  if (!Array.isArray(value)) {
    // Have to wrap the non-string case anyway because `0` doesn't print otherwise
    return typeof value === 'string' ? `'${value}'` : `${value}`;
  }
};

const propDocs: ComponentPropDocs = {
  alignItems: {
    description:
      'Align grid items vertically [[Responsive-capable]](#responsive)',
    type: stringOrArrayOfStringsType(ALIGN_ITEMS),
    defaultValue: getDefaultValue('alignItems')
  },
  breakpoints: {
    description:
      'Media query (min-width) breakpoints along which to apply props marked "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"',
    type: 'Array<number | string>'
  },
  children: {
    description: 'Must be [GridItem(s)](./grid-item)',
    type: 'React$Node'
  },
  columns: {
    description:
      "Number of columns (see [GridItem's `span`](/components/grid-item#span))",
    type: 'number',
    defaultValue: getDefaultValue('columns')
  },
  gutterWidth: {
    description: 'Size of horizontal gap between grid items',
    type: {
      name: 'union',
      value: `${joinQuoted(Object.values(GUTTER_WIDTH))} | number | string`
    },
    defaultValue: getDefaultValue('gutterWidth')
  }
};

export default propDocs;
