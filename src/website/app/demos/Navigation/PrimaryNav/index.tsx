/* @flow */
import {
  primaryNavTheme,
  primaryNavItemTheme
} from '../../../../../library/Navigation/themes';
import description from './description';
import propDocs from './propDocs';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'PrimaryNav',
  slug: 'primary-nav',
  description,
  examples,
  propDocs,
  theme: [primaryNavTheme, primaryNavItemTheme],
  whenHowToUse,
  bestPractices
};

export default componentDoc;
