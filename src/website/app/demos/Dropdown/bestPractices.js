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
import React from 'react';
import Button from '../../../../Button';
import IconMenu from 'mineral-ui-icons/IconMenu';
import Dropdown from '../../../../Dropdown';

const data = [
  { items: [{ text: 'Settings' }, { text: 'Help' }, { text: 'Log out' }] }
];

const shortData = [{ items: [{ text: 'Reload' }] }];

const navData = [
  {
    items: [
      { text: 'Preferences' },
      { text: 'Account' },
      { text: 'About us' },
      { text: 'Pricing' },
      { text: 'Community' },
      { text: 'Help' },
      { text: 'Log in' }
    ]
  }
];

export default [
  {
    type: 'do',
    title: 'keep available options in context',
    example: (
      <Dropdown data={data}>
        <Button primary>Account</Button>
      </Dropdown>
    ),
    description: `Dropdown options should be related to the trigger so users can find actions easily.`
  },
  {
    type: 'dont',
    title: 'use less than 2 elements',
    example: (
      <Dropdown data={shortData}>
        <Button primary>File</Button>
      </Dropdown>
    ),
    description: `Presenting a Dropdown with only one option is unnecessary UI.
If your app renders only one option depending on state, consider a different layout for that special case.`
  },
  {
    type: 'dont',
    title: 'use Dropdown as primary navigation',
    example: (
      <Dropdown data={navData}>
        <Button iconStart={<IconMenu />} />
      </Dropdown>
    ),
    description: `Don't use a Dropdown as a way to hide navigation, even on mobile devices.
Either reduce the amount of navigation in your application, or consider building a drawer with the [Menu](../menu).`
  }
];
