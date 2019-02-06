/* @flow */
import { VARIANT } from '../../../../../library/Dialog/constants';
import { joinQuoted } from '../../../utils/propDocs';

import { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description: 'Rendered [Button(s)](/components/button)',
    type: {
      name: 'union',
      value: 'React$Element<*> | Array<React$Element<*>>'
    }
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
