/* @flow */
import React from 'react';
import IconBlurOn from 'mineral-ui-icons/IconBlurOn';
import HorizontalNavigation, { NavLink } from '../../../../library/Navigation';

export default [
  {
    type: 'dont',
    description: `Refrain from passing long [NavLink](/components/tab) \`title\`s.
  Use clear and concise descriptions limited to one word when possible. Use
  "Title Case" in all other circumstances.`,
    example: (
      <HorizontalNavigation label="Minerals">
        <NavLink title="Malachite Stalactites are Neat" />
        <NavLink title="Fluorite" />
        <NavLink title="Magnetite" />
      </HorizontalNavigation>
    )
  },
  {
    type: 'dont',
    description: `Don't mix content types for [NavLink](/components/tab) \`title\`s.
  Be consistent with icon usage; either all or no HorizontalNavigation should contain an icon.`,
    example: (
      <HorizontalNavigation label="Minerals">
        <NavLink title="Malachite" />
        <NavLink title="Fluorite" icon={<IconBlurOn />} />
        <NavLink title="Magnetite" />
      </HorizontalNavigation>
    )
  },
  {
    type: 'dont',
    description: `Don't use HorizontalNavigation for navigation.`,
    example: (
      <HorizontalNavigation label="Navigation">
        <NavLink title="Home" />
        <NavLink title="Mineral Info" />
        <NavLink title="Maps" />
      </HorizontalNavigation>
    )
  },
  {
    type: 'dont',
    description: `Don't use HorizontalNavigation when there is only one [NavLink](/components/tab).`,
    example: (
      <HorizontalNavigation label="Minerals">
        <NavLink title="Malachite" />
      </HorizontalNavigation>
    )
  }
];
