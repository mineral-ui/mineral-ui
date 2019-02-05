/* @flow */
import { radioGroupTheme as theme } from '../../../../../library/Radio/themes';
import description from './description';
import propDocs from './propDocs';
import propsComment from './propsComment';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'RadioGroup',
  slug: 'radio-group',
  description,
  examples,
  propDocs,
  propsComment,
  theme,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
