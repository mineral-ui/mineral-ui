/* @flow */
import { SideBarPanel } from '../../../../../library/SideBar';
import { sideBarPanelTheme } from '../../../../../library/SideBar/themes';
import { mineralTheme as baseTheme } from '../../../../../library/themes';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const theme = sideBarPanelTheme(baseTheme);

const getDefaultBooleanValue = (prop) =>
  SideBarPanel.defaultProps[prop] ? 'true' : 'false';

const propDocs: ComponentPropDocs = {
  children: {
    description: 'Content of SideBarPanel',
    type: 'React$Node'
  },
  hasShadows: {
    description: 'SideBarPanel has shadows when true',
    type: 'boolean',
    defaultValue: getDefaultBooleanValue('hasShadows')
  },
  isCollapsed: {
    description: 'SideBarPanel can collapse to smaller width when true',
    type: 'boolean',
    defaultValue: getDefaultBooleanValue('isCollapsed')
  },
  isOpen: {
    description: 'SideBarPanel fade in and shows its content when true',
    type: 'boolean',
    defaultValue: getDefaultBooleanValue('isOpen')
  },
  width: {
    description: 'Width of SideBarPanel',
    type: 'number',
    defaultValue: theme.SideBarPanel_width
  }
};

export default propDocs;
