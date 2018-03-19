/* @flow */
import React from 'react';
import { simulate } from 'glamor';
import { createStyledComponent } from '../../../../../library/styles';
import _Link from '../../../../../library/Link';
import _DemoLayout from '../components/DemoLayout';

const Link = (props: {}) => <_Link target="_blank" {...props} />;

const DemoLayout = createStyledComponent(_DemoLayout, {
  '& > a': {
    marginRight: '0.5rem'
  }
});

export default {
  id: 'states',
  title: 'States',
  hideFromProd: true,
  hideSource: true,
  scope: { Link, DemoLayout, simulate },
  source: `
    <DemoLayout>
      <Link href="http://example.com">Regular</Link>
      <Link {...simulate('hover')} href="http://example.com">Hover</Link>
      <Link {...simulate('focus')} href="http://example.com">Focus</Link>
      <Link {...simulate('focus', 'hover')} href="http://example.com">Focus & Hover</Link>
      <Link {...simulate('focus', 'active')} href="http://example.com">Focus & Active</Link>
      <Link {...simulate('active')} href="http://example.com">Active</Link>
      <br /><br />
      <Link variant="danger" href="http://example.com">Danger</Link>
      <Link {...simulate('hover')} variant="danger" href="http://example.com">Hover</Link>
      <Link {...simulate('focus')} variant="danger" href="http://example.com">Focus</Link>
      <Link {...simulate('focus', 'hover')} variant="danger" href="http://example.com">Focus & Hover</Link>
      <Link {...simulate('focus', 'active')} variant="danger" href="http://example.com">Focus & Active</Link>
      <Link  {...simulate('active')} variant="danger" href="http://example.com">Active</Link>
      <br /><br />
      <Link variant="success" href="http://example.com">Success</Link>
      <Link {...simulate('hover')} variant="success" href="http://example.com">Hover</Link>
      <Link {...simulate('focus')} variant="success" href="http://example.com">Focus</Link>
      <Link {...simulate('focus', 'hover')} variant="success" href="http://example.com">Focus & Hover</Link>
      <Link {...simulate('focus', 'active')} variant="success" href="http://example.com">Focus & Active</Link>
      <Link {...simulate('active')} variant="success" href="http://example.com">Active</Link>
      <br /><br />
      <Link variant="warning" href="http://example.com">Warning</Link>
      <Link {...simulate('hover')} variant="warning" href="http://example.com">Hover</Link>
      <Link {...simulate('focus')} variant="warning" href="http://example.com">Focus</Link>
      <Link {...simulate('focus', 'hover')} variant="warning" href="http://example.com">Focus & Hover</Link>
      <Link {...simulate('focus', 'active')} variant="warning" href="http://example.com">Focus & Active</Link>
      <Link {...simulate('active')} variant="warning" href="http://example.com">Active</Link>
    </DemoLayout>`
};
