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
    description: 'To represent an action, use a [Button](./button).'
  }
];
