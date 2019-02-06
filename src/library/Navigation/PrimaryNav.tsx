/* @flow */
import React from 'react';
import Navigation from './Navigation';

import { PrimaryNavDefaultProps, PrimaryNavProps } from './types';

const PrimaryNav = (props: PrimaryNavProps) => <Navigation {...props} />;

PrimaryNav.displayName = 'PrimaryNav';

const defaultProps: PrimaryNavDefaultProps = {
  ...Navigation.defaultProps,
  align: 'center'
};

PrimaryNav.defaultProps = defaultProps;

export default PrimaryNav;
