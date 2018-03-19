/* @flow */
import React from 'react';
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
  id: 'variants',
  title: 'Variants',
  description: 'Style Links with these variants to help communicate purpose.',
  scope: { DemoLayout, Link },
  source: `
    <DemoLayout>
      <Link href="http://example.com">Regular</Link>
      <Link variant="danger" href="http://example.com">Danger</Link>
      <Link variant="success" href="http://example.com">Success</Link>
      <Link variant="warning" href="http://example.com">Warning</Link>
    </DemoLayout>`
};
