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
import { componentTheme } from '../../../../Popover/Popover';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../Popover/Popover');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'popover',
  title: 'Popover',
  whenHowToUse: `Popovers contain content providing clarification for other interface elements.
Since popovers are usually triggered with deliberate user actions, they can contain more complex information than a tooltip which appears upon hovering/focusing an element.

- Keep content short. Don't put so much content that the tooltip requires a scrollbar.
- Popovers can be used to implement other custom behaviors or widgets such as color pickers, or other task-specific custom inputs.
- Popovers could be chained together in application logic to create walkthroughs for onboarding.
`
};
