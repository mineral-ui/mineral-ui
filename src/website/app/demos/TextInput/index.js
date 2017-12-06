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
        Unlike other components, undocumented properties will be applied to the{' '}
        <em>input</em> element.
      </p>
    ),
    whenHowToUse: `Use a TextInput to accept brief, free-form input from a user.
Make sure you use the proper type, which is especially important for mobile users.
Additionally, you should rarely use a TextInput outside of a
[FormField](../form-field).`
  }
];
