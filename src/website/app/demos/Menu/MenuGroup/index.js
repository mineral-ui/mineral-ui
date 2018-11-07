/* @flow */
import {
  menuGroupTheme,
  menuGroupTitleTheme
} from '../../../../../library/Menu/themes';
import description from './description';
import propDocs from './propDocs';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'MenuGroup',
  slug: 'menu-group',
  description,
  examples,
  propDocs,
  theme: [menuGroupTheme, menuGroupTitleTheme],
  whenHowToUse,
  bestPractices
};

export default componentDoc;
