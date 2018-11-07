/* @flow */
import Flex from '../../../../../library/Flex';
import {
  ALIGN_ITEMS,
  DIRECTION,
  GUTTER_WIDTH,
  JUSTIFY_CONTENT
} from '../../../../../library/Flex/constants';
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
  const value = Flex.defaultProps[prop];
  if (!Array.isArray(value)) {
    return `'${value}'`;
  }
};

const propDocs: ComponentPropDocs = {
  alignItems: {
    description:
      'Align items along the cross axis [[Responsive-capable]](#responsive)',
    type: stringOrArrayOfStringsType(ALIGN_ITEMS),
    defaultValue: getDefaultValue('alignItems')
  },
  breakpoints: {
    description:
      'Media query (min-width) breakpoints along which to apply props marked "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"',
    type: 'Array<number | string>'
  },
  children: {
    description: 'Must be [FlexItem(s)](./flex-item)',
    type: 'React$Node',
    required: true
  },
  direction: {
    description:
      'Direction of flow of items along the main axis [[Responsive-capable]](#responsive)',
    type: stringOrArrayOfStringsType(DIRECTION),
    defaultValue: getDefaultValue('direction')
  },
  gutterWidth: {
    description: 'Size of gap between children',
    type: {
      name: 'union',
      value: `${joinQuoted(Object.values(GUTTER_WIDTH))} | number | string`
    },
    defaultValue: getDefaultValue('gutterWidth')
  },
  justifyContent: {
    description:
      'Align items along the main axis [[Responsive-capable]](#responsive)',
    type: stringOrArrayOfStringsType(JUSTIFY_CONTENT),
    defaultValue: getDefaultValue('justifyContent')
  },
  wrap: {
    description:
      'Determines if items can wrap along main axis [[Responsive-capable]](#responsive)',
    type: {
      name: 'union',
      value: 'boolean | Array<boolean | null>'
    }
  }
};

export default propDocs;
