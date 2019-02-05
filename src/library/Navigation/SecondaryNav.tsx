/* @flow */
import React from 'react';
import Navigation from './Navigation';

import type { SecondaryNavDefaultProps, SecondaryNavProps } from './types';

const SecondaryNav = (props: SecondaryNavProps) => (
  <Navigation secondary {...props} />
);

SecondaryNav.displayName = 'SecondaryNav';

const defaultProps: SecondaryNavDefaultProps = {
  ...Navigation.defaultProps,
  align: 'start',
  type: 'pills'
};

SecondaryNav.defaultProps = defaultProps;

export default SecondaryNav;
