/* @flow */
import { SecondaryNav } from '../../../../../library/Navigation';
import { TYPE } from '../../../../../library/Navigation/constants';
import { joinQuoted } from '../../../utils/propDocs';
import navPropDocs from '../common/navPropDocs';

import { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  ...navPropDocs(SecondaryNav, 'SecondaryNav'),
  type: {
    description: 'Available display types',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(TYPE))
    },
    defaultValue: `'${SecondaryNav.defaultProps.type}'`
  }
};

export default propDocs;
