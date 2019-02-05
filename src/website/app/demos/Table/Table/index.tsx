/* @flow */
import {
  tableCellTheme,
  tableTheme,
  tableHeaderCellTheme,
  tableHeaderTheme,
  tableRowTheme,
  tableTitleTheme
} from '../../../../../library/Table/themes';
import description from './description';
import propDocs from './propDocs';
import additionalPropDocs from './additionalPropDocs';
import whenHowToUse from './whenHowToUse';
import bestPractices from './bestPractices';
import examples from './examples';

import type { ComponentDocType } from '../../../pages/ComponentDoc/types';

const componentDoc: ComponentDocType = {
  title: 'Table',
  slug: 'table',
  description,
  examples,
  propDocs,
  additionalPropDocs,
  theme: [
    tableTheme,
    tableCellTheme,
    tableHeaderCellTheme,
    tableHeaderTheme,
    tableRowTheme,
    tableTitleTheme
  ],
  whenHowToUse,
  bestPractices
};

export default componentDoc;
