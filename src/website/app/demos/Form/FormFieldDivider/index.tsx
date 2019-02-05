/* @flow */
import { formFieldDividerTheme as theme } from '../../../../../library/Form/themes';
import description from './description';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'FormFieldDivider',
  slug: 'form-field-divider',
  description,
  examples,
  theme,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
