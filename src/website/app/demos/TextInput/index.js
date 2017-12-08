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
import { componentTheme } from '../../../../TextInput/TextInput';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../TextInput/TextInput');

export default [
  {
    bestPractices,
    componentTheme,
    doc,
    examples,
    slug: 'text-input',
    title: 'TextInput',
    propsComment: (
      <p>
        Unlike most other components, which apply undocument properties to the
        root element, TextInput applies undocumented properties to the{' '}
        <em>input</em>.
      </p>
    ),
    whenHowToUse: `Use a TextInput to accept brief, free-form input from a user.
Make sure you use the proper type, which is especially important for mobile users.
Additionally, you should rarely use a TextInput outside of a
[FormField](../form-field).
TextInputs should always be associated with a label so the user knows what information to provide.

Be specific when choosing the \`type\` for your TextInput.
Mobile devices will display different keyboards depending on the input type.

Provide [additional attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) to aid frictionless interaction with your forms.
E.g. \`autocorrect="off"\` on an input accepting a user's name.`
  }
];
