/* @flow */
import { FlexItem } from '../../../../../library/Flex';
import { ALIGN_SELF } from '../../../../../library/Flex/constants';

import { ComponentPropDocs } from '../../../pages/ComponentDoc/types';
import { stringOrStringArray, thingOrThingArray } from '../../../utils/propDocs';

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
    type: stringOrStringArray(ALIGN_SELF)
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
    type: thingOrThingArray('number'),
    defaultValue: getDefaultValue('grow')
  },
  minWidth: {
    description:
      'Set the minimum width ([see example](#min-width)) [[Responsive-capable]](#responsive)',
    type: 'number | string | Array<number | string | null>'
  },
  shrink: {
    description:
      'Shrink factor along the main axis ([see example](#shrink)) [[Responsive-capable]](#responsive)',
    type: thingOrThingArray('number'),
    defaultValue: getDefaultValue('shrink')
  }
};

export default propDocs;
