/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'type',
  title: 'Type',
  description: `SecondaryNav has two display types, \`'pills'\` (default) and
\`'tabs'\`.`,
  scope: { NavItem, SecondaryNav },
  source: `
    <SecondaryNav type="tabs">
      <NavItem href="/malachite">Malachite</NavItem>
      <NavItem selected href="/fluorite">Fluorite</NavItem>
      <NavItem href="/magnetite">Magnetite</NavItem>
    </SecondaryNav>
  `
};
