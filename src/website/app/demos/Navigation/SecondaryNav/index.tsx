/* @flow */
import {
  secondaryNavTheme,
  secondaryNavItemTheme
} from '../../../../../library/Navigation/themes';
import description from './description';
import propDocs from './propDocs';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'SecondaryNav',
  slug: 'secondary-nav',
  description,
  examples,
  propDocs,
  theme: [secondaryNavTheme, secondaryNavItemTheme],
  whenHowToUse,
  bestPractices
};

export default componentDoc;
