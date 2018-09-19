/* @flow */
import React from 'react';
import { componentTheme as tabComponentTheme } from '../../../../library/Tabs/Tab';
import { componentTheme as tabListComponentTheme } from '../../../../library/Tabs/TabList';
import { componentTheme as tabPanelComponentTheme } from '../../../../library/Tabs/TabPanel';
import bestPractices from './bestPractices';

import tabsExamples from './examples/Tabs';
import tabExamples from './examples/Tab';

const tabsDoc = require('!!react-docgen-loader!../../../../library/Tabs/Tabs');
const tabDoc = require('!!react-docgen-loader!../../../../library/Tabs/Tab');

export default [
  {
    bestPractices,
    componentTheme: [tabListComponentTheme, tabPanelComponentTheme],
    doc: tabsDoc,
    examples: tabsExamples,
    slug: 'tabs',
    title: 'Tabs',
    whenHowToUse: `Use Tabs to group related content while saving space by
only displaying the content of the selected tab. Each [Tab](/components/tab)
should contain unique content and its title should clearly and concisely
describe that content.

Refrain from using tabs when related tab content should be viewed simultaneously.`
  },
  {
    componentTheme: tabComponentTheme,
    doc: tabDoc,
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, Tab applies undocumented properties to the{' '}
        <em>
          <code>a</code> element within the <code>li</code> element
        </em>
        .
      </p>
    ),
    examples: tabExamples,
    slug: 'tab',
    title: 'Tab'
  }
];
