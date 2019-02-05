/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import DemoLayout from '../../../common/DemoLayout';
import PrimaryNav from '../../common/PrimaryNav';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use NavItem within a [PrimaryNav](/components/primary-nav) or
[SecondaryNav](/components/secondary-nav) to define the navigation options.

<Callout title="Note">
  <p key={0}>
    The <code key={0}>href</code> prop provided below corresponds with the
    default <code key={1}>element</code> of <code key={2}>'a'</code>. If
    providing a different <code key={3}>element</code>, be sure to also provide
    the appropriate prop.
    E.g. <a key={4} href="https://reacttraining.com/react-router/web/api/Link">React Router's Link</a> uses
    the <code key={5}>to</code> prop.
  </p>
</Callout>`,
  scope: { DemoLayout, NavItem, PrimaryNav, SecondaryNav },
  source: `
    <DemoLayout>
      <PrimaryNav>
        <NavItem href="/malachite">Malachite</NavItem>
        <NavItem href="/fluorite">Fluorite</NavItem>
        <NavItem href="/magnetite">Magnetite</NavItem>
      </PrimaryNav>
      <SecondaryNav>
        <NavItem href="/malachite">Malachite</NavItem>
        <NavItem href="/fluorite">Fluorite</NavItem>
        <NavItem href="/magnetite">Magnetite</NavItem>
      </SecondaryNav>
    </DemoLayout>
  `
};
