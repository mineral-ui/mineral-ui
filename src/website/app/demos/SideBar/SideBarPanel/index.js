/* @flow */
import { sideBarPanelTheme as theme } from '../../../../../library/SideBar/themes';
import description from './description';
import propsComment from './propsComment';
import propDocs from './propDocs';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'SideBarPanel',
  slug: 'side-bar-panel',
  description,
  examples,
  propDocs,
  propsComment,
  theme
};

export default componentDoc;
