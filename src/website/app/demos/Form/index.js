/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { componentTheme as formFieldComponentTheme } from '../../../../Form/FormField';
import { componentTheme as formFieldsetComponentTheme } from '../../../../Form/FormFieldset';
import { componentTheme as formFieldDividerComponentTheme } from '../../../../Form/FormFieldDivider';

import formFieldExamples from './examples/form-field';
import formFieldsetExamples from './examples/form-fieldset';
import formFieldDividerExamples from './examples/form-field-divider';

const formFieldDoc = require('!!react-docgen-loader!../../../../Form/FormField');
const formFieldsetDoc = require('!!react-docgen-loader!../../../../Form/FormFieldset');
const formFieldDividerDoc = require('!!react-docgen-loader!../../../../Form/FormFieldDivider');

import bestPractices from './bestPractices';

export default [
  {
    bestPractices: bestPractices.formField,
    componentTheme: formFieldComponentTheme,
    doc: formFieldDoc,
    examples: formFieldExamples,
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, FormField applies undocumented properties to the{' '}
        <em>input</em>.
      </p>
    ),
    slug: 'form-field',
    title: 'FormField',
    whenHowToUse: `Wrap each input in your app with a FormField for appropriate
accessibility and styling.

Labels should be short (1-3 words) and indicate the type of input requested.
Labels are not meant to explain the intent of the form as a whole.

Placeholder text is not a replacement for labels.

Do not use an asterisk in labels for required fields; use the \`required\` prop
instead.

Error text should be short and concise, telling the user how to fix the problem.`
  },
  {
    bestPractices: bestPractices.formFieldset,
    componentTheme: formFieldsetComponentTheme,
    doc: formFieldsetDoc,
    examples: formFieldsetExamples,
    slug: 'form-fieldset',
    title: 'FormFieldset',
    whenHowToUse: `Wrap groups of related inputs (which themselves should be wrapped
in [FormFields](../form-field)) in a FormFieldset with a useful legend.

Consider using FormFieldset instead of a heading element to improve accessibility.`
  },
  {
    bestPractices: bestPractices.formFieldDivider,
    componentTheme: formFieldDividerComponentTheme,
    doc: formFieldDividerDoc,
    examples: formFieldDividerExamples,
    slug: 'form-field-divider',
    title: 'FormFieldDivider',
    whenHowToUse: `FormFieldDividers are best used to call attention to a subtle
difference between fields (e.g. Old Password and New Password).`
  }
];
