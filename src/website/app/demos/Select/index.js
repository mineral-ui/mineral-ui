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
import { componentTheme } from '../../../../Select/Select';
import examples from './examples';
import bestPractices from './bestPractices';
const doc = require('!!react-docgen-loader!../../../../Select/Select');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'select',
  title: 'Select',
  whenHowToUse: `Select boxes are best used in forms to allow users to choose
from a set of 4 to 9 options, where using a [RadioGroup](../radio-group) would
take up too much space.

Select can be used with more than 9 options when the entire set is well
known to the user. When the user may not know all the options in the set,
consider allowing the user to type in the option they want.

With fewer than 4 options, consider using a
[RadioGroup](../radio-group) instead so that users can see all the options at
once.

Don’t use Select to present the user with a list of actions.
Use a [Dropdown](../dropdown) instead.`
};
