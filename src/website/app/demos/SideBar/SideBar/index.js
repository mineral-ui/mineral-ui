/* @flow */
import { sideBarTheme as theme } from '../../../../../library/SideBar/themes';
import description from './description';
import propsComment from './propsComment';
import propDocs from './propDocs';
import whenHowToUse from './whenHowToUse';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'SideBar',
  slug: 'side-bar',
  description,
  examples,
  propDocs,
  propsComment,
  theme,
  whenHowToUse
};

export default componentDoc;
