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
import { componentTheme } from '../../../../Tooltip/Tooltip';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../Tooltip/Tooltip');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'tooltip',
  title: 'Tooltip',
  whenHowToUse: `
Use Tooltips to provide contextual annotations to user controls.
Tooltip content should be concise and helpful. Content should also be static.
Users don't expect the contents to change and are unlikely to notice changes
since they are hidden.

Tooltips are not predictable interactions for mobile device users and should be avoided.

Use a [Popover](/components/popover) instead of a Tooltip when users need to interact with the content. For example, walkthroughs and dismissable new feature announcements should be built with Popovers.
`
};
