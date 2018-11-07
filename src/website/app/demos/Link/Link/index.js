/* @flow */
import { linkTheme as theme } from '../../../../../library/Link/themes';
import description from './description';
import propDocs from './propDocs';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'Link',
  slug: 'link',
  description,
  examples,
  propDocs,
  theme,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
