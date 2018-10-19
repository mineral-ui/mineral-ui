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
        <NavLink href="#">Malachite Stalactites are Neat</NavLink>
        <NavLink href="#">Fluorite</NavLink>
        <NavLink href="#">Magnetite</NavLink>
      </HorizontalNavigation>
    )
  },
  {
    type: 'dont',
    description: `Don't mix content types for [NavLink](/components/tab) \`title\`s.
  Be consistent with icon usage; either all or no HorizontalNavigation should contain an icon.`,
    example: (
      <HorizontalNavigation label="Minerals">
        <NavLink href="#">Malachite</NavLink>
        <NavLink href="#" icon={<IconBlurOn />}>
          Fluorite
        </NavLink>
        <NavLink href="#">Magnetite</NavLink>
      </HorizontalNavigation>
    )
  },
  {
    type: 'dont',
    description: `Don't use HorizontalNavigation for navigation.`,
    example: (
      <HorizontalNavigation label="Navigation">
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Mineral Info</NavLink>
        <NavLink href="#">Maps</NavLink>
      </HorizontalNavigation>
    )
  },
  {
    type: 'dont',
    description: `Don't use HorizontalNavigation when there is only one [NavLink](/components/tab).`,
    example: (
      <HorizontalNavigation label="Minerals">
        <NavLink href="#">Malachite</NavLink>
      </HorizontalNavigation>
    )
  }
];
