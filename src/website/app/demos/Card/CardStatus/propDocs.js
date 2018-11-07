/* @flow */
import { VARIANT } from '../../../../../library/Card/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description: 'Status text',
    type: 'string',
    required: true
  },
  variant: {
    description: 'Available variants',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(VARIANT))
    },
    required: true
  }
};

export default propDocs;
