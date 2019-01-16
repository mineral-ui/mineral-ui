/* @flow */
import SideBar from '../../../../../library/SideBar';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const getDefaultBooleanValue = (prop) =>
  SideBar.defaultProps[prop] ? 'true' : 'false';

const propDocs: ComponentPropDocs = {
  children: {
    description: 'Content of SideBar (see the [Basic](#basic) example)',
    type: 'React$Node'
  },
  inline: {
    description: 'Prevents Sidebar from being absolutely positioned.',
    type: 'boolean',
    defaultValue: getDefaultBooleanValue('inline')
  },
  usePortal: {
    description:
      'Use a Portal to render the SideBar to the body rather than as a sibling to its parent.',
    type: 'boolean',
    defaultValue: getDefaultBooleanValue('usePortal')
  }
};

export default propDocs;
