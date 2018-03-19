/* @flow */
import React from 'react';
import { componentTheme as checkboxComponentTheme } from '../../../../library/Checkbox/Checkbox';
import { componentTheme as checkboxGroupComponentTheme } from '../../../../library/Checkbox/CheckboxGroup';
import checkboxExamples from './examples/Checkbox';
import checkboxGroupExamples from './examples/CheckboxGroup';
import bestPractices from './bestPractices';

const checkboxDoc = require('!!react-docgen-loader!../../../../library/Checkbox/Checkbox');
const checkboxGroupDoc = require('!!react-docgen-loader!../../../../library/Checkbox/CheckboxGroup');

export default [
  {
    bestPractices: bestPractices.checkbox,
    componentTheme: checkboxComponentTheme,
    doc: checkboxDoc,
    examples: checkboxExamples,
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, Checkbox applies undocumented properties to the{' '}
        <em>input</em>.
      </p>
    ),
    slug: 'checkbox',
    title: 'Checkbox',
    whenHowToUse: `Use Checkboxes to change settings rather than initiate actions.

Checkboxes are often created in [groups](/components/checkbox-group).    `
  },
  {
    bestPractices: bestPractices.checkboxGroup,
    componentTheme: checkboxGroupComponentTheme,
    doc: checkboxGroupDoc,
    examples: checkboxGroupExamples,
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, CheckboxGroup applies undocumented properties to the{' '}
        <em>Checkbox</em> component.
      </p>
    ),
    slug: 'checkbox-group',
    title: 'CheckboxGroup',
    whenHowToUse: `CheckboxGroup is used to provide a simpler API for creating a
group of [Checkboxes](/components/checkbox).  It also provides proper row spacing and an
inline layout option.

Use CheckboxGroup to allow users to select multiple options from a list.

CheckboxGroups should be wrapped in a [FormField](/components/form-field) to provide an
accessible label and other features.  See the [FormField example](#form-field)
for details.`
  }
];
