/* @flow */
import IconCameraAlt from 'mineral-ui-icons/IconCameraAlt';
import IconInfoOutline from 'mineral-ui-icons/IconInfoOutline';
import IconMusicNote from 'mineral-ui-icons/IconMusicNote';
import HorizontalNavigation, {
  NavLink
} from '../../../../../../library/Navigation';

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
      <NavLink icon={<IconInfoOutline />} title="Bio" />
      <NavLink icon={<IconMusicNote />} title="Albums" />
      <NavLink icon={<IconCameraAlt />} title="Photos" />
    </HorizontalNavigation>
  `
};
