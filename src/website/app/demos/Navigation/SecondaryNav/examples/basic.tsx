/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use [NavItem](/components/nav-item) children to define the
navigation options.`,
  scope: { NavItem, SecondaryNav },
  source: `
    <SecondaryNav>
      <NavItem href="/malachite">Malachite</NavItem>
      <NavItem selected href="/fluorite">Fluorite</NavItem>
      <NavItem href="/magnetite">Magnetite</NavItem>
    </SecondaryNav>
  `
};
