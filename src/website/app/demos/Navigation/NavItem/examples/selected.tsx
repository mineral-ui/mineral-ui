/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import DemoLayout from '../../../common/DemoLayout';
import PrimaryNav from '../../common/PrimaryNav';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'selected',
  title: 'Selected',
  description: `Use the \`selected\` property to define which navigation option
is currently being viewed.`,
  scope: { DemoLayout, NavItem, PrimaryNav, SecondaryNav },
  source: `
    <DemoLayout>
      <PrimaryNav>
        <NavItem href="/malachite">Malachite</NavItem>
        <NavItem selected href="/fluorite">Fluorite</NavItem>
        <NavItem href="/magnetite">Magnetite</NavItem>
      </PrimaryNav>
      <SecondaryNav>
        <NavItem href="/malachite">Malachite</NavItem>
        <NavItem selected href="/fluorite">Fluorite</NavItem>
        <NavItem href="/magnetite">Magnetite</NavItem>
      </SecondaryNav>
    </DemoLayout>
  `
};
