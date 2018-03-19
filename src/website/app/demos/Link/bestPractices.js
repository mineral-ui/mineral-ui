/* @flow */
import React from 'react';
import _Link from '../../../../library/Link';

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
action, use a [Button](/components/button).`,
    example: <Link>Scroll to bottom</Link>
  }
];
