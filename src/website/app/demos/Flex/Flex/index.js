/* @flow */
import description from './description';
import propDocs from './propDocs';
import propsComment from './propsComment';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'Flex',
  slug: 'flex',
  description,
  examples,
  propDocs,
  propsComment,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
