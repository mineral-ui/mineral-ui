/* @flow */
import { VARIANT } from '../../../../../library/Link/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description: 'Content of the Link',
    type: 'React$Node'
  },
  href: {
    description: 'A URL or URL fragment to which the Link points',
    type: 'string'
  },
  variant: {
    description: 'Available variants',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(VARIANT))
    }
  }
};

export default propDocs;
