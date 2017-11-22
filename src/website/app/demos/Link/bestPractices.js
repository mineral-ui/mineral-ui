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
import _Link from '../../../../Link';

const Link = ({ href, ...restProps }: { href?: string }) => (
  <_Link
    target={href && href.startsWith('http') ? '_blank' : undefined}
    {...restProps}
  />
);

export default [
  {
    type: 'do',
    description:
      'Links can be used inline to navigate to other content or pages.',
    example: (
      <div>
        <p>
          <Link href="https://example.com">Lorem ipsum</Link> dolor sit amet,
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
    )
  },
  {
    type: 'dont',
    description: `Don't use a Link to perform a page action. To represent an
action, use a [Button](../button).`,
    example: <Link>Scroll to bottom</Link>
  }
];
