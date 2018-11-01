/* @flow */
import description from './description';
import propDocs from './propDocs';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'NavItem',
  slug: 'nav-item',
  description,
  examples,
  propDocs
};

export default componentDoc;
