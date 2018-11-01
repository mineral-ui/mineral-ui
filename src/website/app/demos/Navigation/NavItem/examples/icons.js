/* @flow */
import IconCameraAlt from 'mineral-ui-icons/IconCameraAlt';
import IconInfoOutline from 'mineral-ui-icons/IconInfoOutline';
import IconMusicNote from 'mineral-ui-icons/IconMusicNote';
import { NavItem } from '../../../../../../library/Navigation';
import DemoLayout from '../../../common/DemoLayout';
import PrimaryNav from '../../common/PrimaryNav';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'icons',
  title: 'Icons',
  description: `NavItem can contain an [Icon](/components/icon) before its text.`,
  scope: {
    DemoLayout,
    IconCameraAlt,
    IconInfoOutline,
    IconMusicNote,
    NavItem,
    PrimaryNav,
    SecondaryNav
  },
  source: `
    <DemoLayout>
      <PrimaryNav>
        <NavItem icon={<IconInfoOutline />} href="/bio">Bio</NavItem>
        <NavItem icon={<IconMusicNote />} href="/albums">Albums</NavItem>
        <NavItem icon={<IconCameraAlt />} href="/photos">Photos</NavItem>
      </PrimaryNav>
      <SecondaryNav>
        <NavItem icon={<IconInfoOutline />} href="/bio">Bio</NavItem>
        <NavItem icon={<IconMusicNote />} href="/albums">Albums</NavItem>
        <NavItem icon={<IconCameraAlt />} href="/photos">Photos</NavItem>
      </SecondaryNav>
    </DemoLayout>
  `
};
