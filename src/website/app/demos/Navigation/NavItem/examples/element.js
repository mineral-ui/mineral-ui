/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import DemoLayout from '../../../common/DemoLayout';
import ReactRouterLink from '../../common/FakeRouterLink';
import PrimaryNav from '../../common/PrimaryNav';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'element',
  title: 'Element',
  description: `Any component that renders an \`<a />\` element may be used for
NavItem by specifying the \`element\` prop, such as a
[React Router Link](https://reacttraining.com/react-router/web/api/Link).`,
  scope: { DemoLayout, NavItem, PrimaryNav, ReactRouterLink, SecondaryNav },
  source: `
    <DemoLayout>
      <PrimaryNav>
        <NavItem element={ReactRouterLink} to="/components/malachite">Malachite</NavItem>
        <NavItem element={ReactRouterLink} to="/components/fluorite">Fluorite</NavItem>
        <NavItem element={ReactRouterLink} to="/components/magnetite">Magnetite</NavItem>
      </PrimaryNav>
      <SecondaryNav>
        <NavItem element={ReactRouterLink} to="/components/malachite">Malachite</NavItem>
        <NavItem element={ReactRouterLink} to="/components/fluorite">Fluorite</NavItem>
        <NavItem element={ReactRouterLink} to="/components/magnetite">Magnetite</NavItem>
      </SecondaryNav>
    </DemoLayout>
  `
};
