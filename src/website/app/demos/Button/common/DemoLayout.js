/* @flow */
import React from 'react';
import Root from '../../common/DemoLayout';

import type { DemoLayoutProps } from '../../common/types';

const DemoLayout = (props: DemoLayoutProps) => (
  <Root
    includeLastChild
    marginBottom="0.5rem"
    marginRight="0.5rem"
    {...props}
  />
);

export default DemoLayout;
