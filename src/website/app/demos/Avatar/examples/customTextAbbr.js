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
import Avatar from '../../../../../Avatar';

export default {
  id: 'custom-text-abbr',
  title: 'Custom Text Abbreviation',
  description: `By default, the first letter of text \`children\` will be used
as the rendered abbreviated text. Pass a string to the \`abbr\` prop to provide
a custom abbreviation.`,
  scope: { Avatar },
  source: `
    <Avatar abbr="B">Dr. Bernard Johnson</Avatar>`
};
