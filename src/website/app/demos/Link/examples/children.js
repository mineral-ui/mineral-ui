/* @flow */
import React from 'react';
import _Link from '../../../../../library/Link';

const Link = (props: {}) => <_Link target="_blank" {...props} />;

export default {
  id: 'children',
  title: 'Children',
  description: 'A Link will render any children.',
  scope: { Link },
  source: `
    <Link href="http://example.com">
      <img alt="gradient placeholder" src="/images/125x125.png" />
    </Link>`
};
