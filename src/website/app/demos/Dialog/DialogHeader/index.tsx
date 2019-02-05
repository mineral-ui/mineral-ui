/* @flow */
import description from './description';
import propDocs from './propDocs';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'DialogHeader',
  slug: 'dialog-header',
  description,
  examples,
  propDocs
};

export default componentDoc;
