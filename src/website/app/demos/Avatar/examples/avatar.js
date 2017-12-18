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
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Avatar can display an image, a text character, or an
[Icon](../icon). For accessibility, please provide an \`alt\`/\`title\`
attribute for standalone Avatars.`,
  scope: { Avatar, DemoLayout, IconCloud },
  source: `
    <DemoLayout>
      <Avatar>
        <img src="/images/avatar.svg" alt="Allison" />
      </Avatar>
      <Avatar>Allison</Avatar>
      <Avatar>
        <IconCloud title="cloud" />
      </Avatar>
    </DemoLayout>`
};
