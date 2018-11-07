/* @flow */
import description from './description';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'CardImage',
  slug: 'card-image',
  description,
  examples,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
