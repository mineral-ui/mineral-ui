/* @flow */
import { dialogTheme as theme } from '../../../../../library/Dialog/themes';
import description from './description';
import propDocs from './propDocs';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'Dialog',
  slug: 'dialog',
  description,
  examples,
  propDocs,
  theme,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
