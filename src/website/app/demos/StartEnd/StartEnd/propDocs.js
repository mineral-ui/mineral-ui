/* @flow */
import { DIRECTION, PRIORITY } from '../../../../../library/StartEnd/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const stringOrArrayOfStringsType = (constant) => {
  const strings = joinQuoted(Object.values(constant));
  return {
    name: 'union',
    value: `${strings} | Array<${strings} | null>`
  };
};

const propDocs: ComponentPropDocs = {
  breakpoints: {
    description:
      'Media query (min-width) breakpoints along which to apply props marked "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"',
    type: 'Array<number | string>'
  },
  children: {
    description: 'Must be exactly two nodes',
    type: 'React$Node',
    required: true
  },
  direction: {
    description:
      'Direction of flow of items along the main axis [[Responsive-capable]](#responsive)',
    type: stringOrArrayOfStringsType(DIRECTION)
  },
  priority: {
    description: 'Determines which side stretches to fill the available width',
    type: joinQuoted(Object.values(PRIORITY))
  }
};

export default propDocs;
