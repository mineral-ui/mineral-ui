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
import { componentTheme } from '../../../../Dropdown/DropdownContent';
import examples from './examples';
import bestPractices from './bestPractices';
const doc = require('!!react-docgen-loader!../../../../Dropdown/Dropdown');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'dropdown',
  title: 'Dropdown',
  whenHowToUse: `Dropdowns can change their available MenuItems depending on the state of your app.
You can remove options that don't make sense in the current context, or show them as \`disabled\` if certain conditions need to be met.

Use Dropdown for extra functionality, not for primary actions, since the options are hidden from the user until interaction.
Ensure that option labeling clearly describes the action the user can take.`
};
