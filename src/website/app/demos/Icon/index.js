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
import { componentTheme } from '../../../../Icon/Icon';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../Icon/Icon');

export default {
  bestPractices,
  componentTheme,
  doc,
  examples,
  slug: 'icon',
  title: 'Icon',
  whenHowToUse: `Icons can symbolize actions and objects in your interface.
Use icons in combination with labels to help users more quickly process your UI.

Don't use too many icons or you run the risk of creating visual clutter.

Icons are usually used inside of a [Button](../button) to reinforce the action.
If used alone, Icon placement should be very clear. For example, a play icon ► could be used instead of writing out the word "Play".

Icons should only be used if they aid communication, not merely for decoration.`
};
