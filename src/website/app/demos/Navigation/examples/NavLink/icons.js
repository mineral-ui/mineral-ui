/* @flow */
import IconCameraAlt from 'mineral-ui-icons/IconCameraAlt';
import IconInfoOutline from 'mineral-ui-icons/IconInfoOutline';
import IconMusicNote from 'mineral-ui-icons/IconMusicNote';
import HorizontalNavigation from '../../../../../../library/Navigation';
import NavLink from '../../components/NavLink';

export default {
  id: 'icons',
  title: 'Icons',
  description: `NavLink can contain an [Icon](/components/icon) at the start of its
title.`,
  scope: {
    IconCameraAlt,
    IconInfoOutline,
    IconMusicNote,
    HorizontalNavigation,
    NavLink
  },
  source: `
    <HorizontalNavigation label="Rolling Stones">
      <NavLink icon={<IconInfoOutline />} href="/bio">Bio</NavLink>
      <NavLink icon={<IconMusicNote />} href="/albums">Albums</NavLink>
      <NavLink icon={<IconCameraAlt />} href="/photos">Photos</NavLink>
    </HorizontalNavigation>
  `
};
