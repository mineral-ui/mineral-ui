/* @flow */
import { cardDividerTheme as theme } from '../../../../../library/Card/themes';
import description from './description';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'CardDivider',
  slug: 'card-divider',
  description,
  examples,
  theme,
  whenHowToUse,
  bestPractices
};

export default componentDoc;
