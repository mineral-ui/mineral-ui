/* @flow */
import React from 'react';
import Root from '../../common/DemoLayout';

import type { DemoLayoutProps } from '../../common/types';

const DemoLayout = (props: DemoLayoutProps) => (
  <Root includeLastChild marginRight="1rem" {...props} />
);

export default DemoLayout;
