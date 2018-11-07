/* @flow */
import { FlexItem } from '../../../../../library/Flex';
import { ALIGN_SELF } from '../../../../../library/Flex/constants';
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
  const value = FlexItem.defaultProps[prop];
  if (!Array.isArray(value)) {
    // Have to wrap the non-string case anyway because `0` doesn't print otherwise
    return typeof value === 'string' ? `'${value}'` : `${value}`;
  }
};

const propDocs: ComponentPropDocs = {
  alignSelf: {
    description:
      'Align item along the cross axis [[Responsive-capable]](#responsive)',
    type: stringOrArrayOfStringsType(ALIGN_SELF)
  },
  breakpoints: {
    description:
      'Media query (min-width) breakpoints along which to apply props marked "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"',
    type: 'Array<number | string>'
  },
  flex: {
    description:
      'When `true`, FlexItem composes [Flex](/components/flex); when `false`, it composes [Box](/components/box)',
    type: 'boolean'
  },
  grow: {
    description:
      'Grow factor along the main axis ([see example](#grow)) [[Responsive-capable]](#responsive)',
    type: {
      name: 'union',
      value: 'number | Array<number | null>'
    },
    defaultValue: getDefaultValue('grow')
  },
  shrink: {
    description:
      'Shrink factor along the main axis ([see example](#shrink)) [[Responsive-capable]](#responsive)',
    type: {
      name: 'union',
      value: 'number | Array<number | null>'
    },
    defaultValue: getDefaultValue('shrink')
  }
};

export default propDocs;
