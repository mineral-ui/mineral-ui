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
import { componentTheme } from '../../../../TextArea/TextArea';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../TextArea/TextArea');

export default [
  {
    bestPractices,
    componentTheme,
    doc,
    examples,
    slug: 'text-area',
    title: 'TextArea',
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, TextArea applies undocumented properties to the{' '}
        <em>textarea</em>.
      </p>
    ),
    whenHowToUse: `Use a TextArea to accept potentially lengthy, free-form input
from a user.

TextAreas should always have an associated label for accessibility and so the
user knows what information to provide. See [FormField](../form-field).`
  }
];
