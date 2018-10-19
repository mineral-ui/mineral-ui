/* @flow */
import React from 'react';
import { NavLink as _NavLink } from '../../../../../library/Navigation';

const NavLink = (props: {}) => (
  <_NavLink
    {...props}
    onClick={(event) => {
      event.preventDefault();
    }}
  />
);

export default NavLink;
