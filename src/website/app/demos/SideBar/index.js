/* @flow */
import sideBarDoc from './SideBar';
import sideBarOverlayDoc from './SideBarOverlay';
import sideBarPanelDoc from './SideBarPanel';
import sideBarSpacerDoc from './SideBarSpacer';

import type { ComponentDocs } from '../../pages/ComponentDoc/types';

const componentDocs: ComponentDocs = [
  sideBarDoc,
  sideBarPanelDoc,
  sideBarOverlayDoc,
  sideBarSpacerDoc
];

export default componentDocs;
