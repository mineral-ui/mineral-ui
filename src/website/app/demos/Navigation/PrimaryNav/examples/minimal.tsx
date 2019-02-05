/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import PrimaryNav from '../../common/PrimaryNav';

export default {
  id: 'minimal',
  title: 'Minimal',
  description: `Use the \`minimal\` property to display PrimaryNav in a more
minimal appearance.`,
  scope: { NavItem, PrimaryNav },
  source: `
    <PrimaryNav minimal>
      <NavItem href="/malachite">Malachite</NavItem>
      <NavItem selected href="/fluorite">Fluorite</NavItem>
      <NavItem href="/magnetite">Magnetite</NavItem>
    </PrimaryNav>
  `
};
