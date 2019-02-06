/* @flow */
import Flex from '../../../../../library/Flex';
import {
  ALIGN_ITEMS,
  DIRECTION,
  GUTTER_WIDTH,
  JUSTIFY_CONTENT
} from '../../../../../library/Flex/constants';
import {
  joinQuoted,
  stringOrStringArray,
  thingOrThingArray
} from '../../../utils/propDocs';

import { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

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
    type: stringOrStringArray(ALIGN_ITEMS),
    defaultValue: getDefaultValue('alignItems')
  },
  breakpoints: {
    description:
      'Media query (min-width) breakpoints along which to apply props marked "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"',
    type: 'Array<number | string>'
  },
  children: {
    description: 'Must be [FlexItem(s)](./flex-item)',
    type: 'React$Node'
  },
  direction: {
    description:
      'Direction of flow of items along the main axis [[Responsive-capable]](#responsive)',
    type: stringOrStringArray(DIRECTION),
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
    type: stringOrStringArray(JUSTIFY_CONTENT),
    defaultValue: getDefaultValue('justifyContent')
  },
  wrap: {
    description:
      'Determines if items can wrap along main axis [[Responsive-capable]](#responsive)',
    type: thingOrThingArray('boolean')
  }
};

export default propDocs;
