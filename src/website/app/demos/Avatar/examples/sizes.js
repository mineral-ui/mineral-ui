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
  id: 'sizes',
  title: 'Sizes',
  description: `Avatar is available in the following sizes.`,
  scope: { Avatar, DemoLayout, IconCloud },
  source: `
    <DemoLayout>
      <Avatar size="small">
        <img src="/images/avatar.svg" alt="Sam" />
      </Avatar>
      <Avatar size="small">Sam</Avatar>
      <Avatar size="small">
        <IconCloud title="cloud" />
      </Avatar>
      <br />

      <Avatar size="medium">
        <img src="/images/avatar.svg" alt="Melissa" />
      </Avatar>
      <Avatar size="medium">Melissa</Avatar>
      <Avatar size="medium">
        <IconCloud title="cloud" />
      </Avatar>
      <br />

      <Avatar>
        <img src="/images/avatar.svg" alt="Larry" />
      </Avatar>
      <Avatar>Larry</Avatar>
      <Avatar>
        <IconCloud title="cloud" />
      </Avatar>
      <br />

      <Avatar size="jumbo">
        <img src="/images/avatar.svg" alt="Jennifer" />
      </Avatar>
      <Avatar size="jumbo">Jennifer</Avatar>
      <Avatar size="jumbo">
        <IconCloud title="cloud" />
      </Avatar>

    </DemoLayout>`
};
