/* @flow */
import { sideBarOverlayTheme as theme } from '../../../../../library/SideBar/themes';
import description from './description';
import propDocs from './propDocs';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'SideBarOverlay',
  slug: 'side-bar-overlay',
  description,
  examples,
  propDocs,
  theme
};

export default componentDoc;
