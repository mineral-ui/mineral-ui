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
import { componentTheme as radioComponentTheme } from '../../../../Radio/Radio';
import { componentTheme as radioGroupComponentTheme } from '../../../../Radio/RadioGroup';

import radioExamples from './examples/radio';
import radioGroupExamples from './examples/radio-group';

const radioDoc = require('!!react-docgen-loader!../../../../Radio/Radio');
const radioGroupDoc = require('!!react-docgen-loader!../../../../Radio/RadioGroup');

import bestPractices from './bestPractices';

const sharedWhenHowToUse = `Use Radios when the number of choices is fairly small.  If the number of
choices is large, consider an alternate form control, such as a select, which
has a more compact layout.

Use Radios to change settings rather than initiate actions.

Use caution when determining a default selection for a group of Radios.
* If a default is provided, ensure that it does not make assumptions about your
users choices.
* If a default is not provided, be aware that 'no selection' is a state that
users cannot return to once a selection is made.
* Both of these case can generally be addressed by providing a neutral option.
If this is insufficient, consider an alternate form control.`;

export default [
  {
    bestPractices,
    componentTheme: radioComponentTheme,
    doc: radioDoc,
    examples: radioExamples,
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, Radio applies undocumented properties to the{' '}
        <em>input</em>.
      </p>
    ),
    slug: 'radio',
    title: 'Radio',
    whenHowToUse: `Use a Radio to allow users to select a single option from a
set.

${sharedWhenHowToUse}

Mineral UI also provides a [RadioGroup](../radio-group), which offers a simpler
API for creating a group of Radios, and [FormField](../form-field) to provide an
accessible label and other features.`
  },
  {
    bestPractices,
    componentTheme: radioGroupComponentTheme,
    doc: radioGroupDoc,
    examples: radioGroupExamples,
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, RadioGroup applies undocumented properties to the{' '}
        <em>Radio</em>.
      </p>
    ),
    slug: 'radio-group',
    title: 'RadioGroup',
    whenHowToUse: `RadioGroup is used to provide a simpler API for creating a
group of [Radios](../radio), which allow users to select a single option from a
set.  It also provides proper row spacing and an inline layout option.

${sharedWhenHowToUse}

RadioGroups should be wrapped in a [FormField](../form-field) to provide an
accessible label and other features.  See the [FormField example](#form-field)
for details.`
  }
];
