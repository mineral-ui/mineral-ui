/* @flow */
import { PrimaryNav } from '../../../../../library/Navigation';
import navPropDocs from '../common/navPropDocs';

import { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  ...navPropDocs(PrimaryNav, 'PrimaryNav'),
  minimal: {
    description: `Display PrimaryNav with 'minimal' styles`,
    type: 'boolean'
  }
};

export default propDocs;
