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
import IconSentimentSatisfied from '../../../../../Icon/IconSentimentSatisfied';

export default {
  id: 'title',
  title: 'Title',
  description: `Standalone icons need a title, as opposed to decorative icons (those that repeat the information conveyed by text or do not add significant value).
Mineral UI generates the hooks for assistive technology after you set the \`title\` attribute here.
Icons do not need to set an \`alt\` attribute.`,
  scope: { IconSentimentSatisfied },
  source: `<IconSentimentSatisfied title="smiley-face" />`
};
