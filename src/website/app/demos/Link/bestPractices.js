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
import Link from '../../../../Link';

export default [
  {
    type: 'do',
    title: 'use Links to navigate',
    example: (
      <div>
        <p>
          <Link href="https://mineral-ui.com">Lorem ipsum</Link> dolor sit amet,
          consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat
          volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin.
        </p>
        <nav>
          <li>
            <Link href="/components/button">Button</Link>
          </li>
          <li>
            <Link href="/components/card/">Card</Link>
          </li>
          <li>
            <Link href="/components/icon">Icon</Link>
          </li>
        </nav>
      </div>
    ),
    description:
      'Links can be used inline to navigate to other content or pages.'
  },
  {
    type: 'dont',
    title: 'use a link to perform a page action',
    example: <Link>Scroll to bottom</Link>,
    description: 'To represent an action, use a [Button](../button).'
  }
];
