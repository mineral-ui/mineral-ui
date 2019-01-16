/* @flow */
import { SideBarOverlay } from '../../../../../library/SideBar';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const getDefaultBooleanValue = (prop) =>
  SideBarOverlay.defaultProps[prop] ? 'true' : 'false';

const propDocs: ComponentPropDocs = {
  onClick: {
    description: 'Called when SideBarOverlay is clicked',
    type: {
      name: 'function',
      value: '() => void'
    }
  },
  show: {
    description: 'SideBarOverlay fade in and shows when true',
    type: 'boolean',
    defaultValue: getDefaultBooleanValue('show')
  }
};

export default propDocs;
