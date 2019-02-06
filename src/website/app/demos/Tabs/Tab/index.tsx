/* @flow */
import { tabTheme as theme } from '../../../../../library/Tabs/themes';
import description from './description';
import propDocs from './propDocs';
import propsComment from './propsComment';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'Tab',
  slug: 'tab',
  description,
  examples,
  propDocs,
  propsComment,
  theme
};

export default componentDoc;
