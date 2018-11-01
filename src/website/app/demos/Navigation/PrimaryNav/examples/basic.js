/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import PrimaryNav from '../../common/PrimaryNav';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use [NavItem](/components/nav-item) children to define the
navigation options.`,
  scope: { NavItem, PrimaryNav },
  source: `
    <PrimaryNav>
      <NavItem href="/malachite">Malachite</NavItem>
      <NavItem selected href="/fluorite">Fluorite</NavItem>
      <NavItem href="/magnetite">Magnetite</NavItem>
    </PrimaryNav>
  `
};
