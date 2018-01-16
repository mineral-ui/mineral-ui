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
import { componentTheme as checkboxComponentTheme } from '../../../../Checkbox/Checkbox';
import { componentTheme as checkboxGroupComponentTheme } from '../../../../Checkbox/CheckboxGroup';
import checkboxExamples from './examples/checkbox';
import checkboxGroupExamples from './examples/checkbox-group';
import bestPractices from './bestPractices';

const checkboxDoc = require('!!react-docgen-loader!../../../../Checkbox/Checkbox');
const checkboxGroupDoc = require('!!react-docgen-loader!../../../../Checkbox/CheckboxGroup');

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

Checkboxes are often created in [groups](../checkbox-group).    `
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
group of [Checkboxes](../checkbox).  It also provides proper row spacing and an
inline layout option.

Use CheckboxGroup to allow users to select multiple options from a list.

CheckboxGroups should be wrapped in a [FormField](../form-field) to provide an
accessible label and other features.  See the [FormField example](#form-field)
for details.`
  }
];
