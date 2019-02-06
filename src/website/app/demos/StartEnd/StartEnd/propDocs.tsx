/* @flow */
import { DIRECTION, PRIORITY } from '../../../../../library/StartEnd/constants';
import { joinQuoted, stringOrStringArray } from '../../../utils/propDocs';

import { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  breakpoints: {
    description:
      'Media query (min-width) breakpoints along which to apply props marked "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"',
    type: 'Array<number | string>'
  },
  children: {
    description: 'Must be exactly two nodes',
    type: 'React$Node'
  },
  direction: {
    description:
      'Direction of flow of items along the main axis [[Responsive-capable]](#responsive)',
    type: stringOrStringArray(DIRECTION)
  },
  priority: {
    description: 'Determines which side stretches to fill the available width',
    type: joinQuoted(Object.values(PRIORITY))
  }
};

export default propDocs;
