/* @flow */
import description from './description';
import propDocs from './propDocs';
import propsComment from './propsComment';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'StartEnd',
  slug: 'start-end',
  description,
  examples,
  propDocs,
  propsComment,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
