/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import DemoLayout from '../../../common/DemoLayout';
import PrimaryNav from '../../common/PrimaryNav';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `Use the \`disabled\` property to indicate that NavItem is not
available for interaction.`,
  scope: { DemoLayout, NavItem, PrimaryNav, SecondaryNav },
  source: `
    <DemoLayout>
      <PrimaryNav>
        <NavItem href="/malachite">Malachite</NavItem>
        <NavItem disabled href="/fluorite">Fluorite</NavItem>
        <NavItem href="/magnetite">Magnetite</NavItem>
      </PrimaryNav>
      <SecondaryNav>
        <NavItem href="/malachite">Malachite</NavItem>
        <NavItem disabled href="/fluorite">Fluorite</NavItem>
        <NavItem href="/magnetite">Magnetite</NavItem>
      </SecondaryNav>
    </DemoLayout>
  `
};
