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
import { componentTheme } from '../../../../Button/Button';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../Button/Button');

export default {
  bestPractices,
  doc,
  examples,
  slug: 'button',
  componentTheme,
  title: 'Button',
  whenHowToUse: `A Button should be used whenever you need to trigger an action in your app.
Buttons should have concise labeling indicating to your user what will happen when the Button is clicked.
The color of the button should be chosen according to the intent of the action.

For example, if clicking a Button will make a potentially destructive action, use \`variant="danger"\` instead of \`"success"\`.`
};
