/* @flow */
import description from './description';
import propDocs from './propDocs';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'Header',
  slug: 'header',
  description,
  examples,
  propDocs,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
