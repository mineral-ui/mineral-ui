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
NavItem by specifying the \`as\` prop, such as a
[React Router Link](https://reacttraining.com/react-router/web/api/Link).`,
  scope: { DemoLayout, NavItem, PrimaryNav, ReactRouterLink, SecondaryNav },
  source: `
    <DemoLayout>
      <PrimaryNav>
        <NavItem as={ReactRouterLink} to="/components/malachite">Malachite</NavItem>
        <NavItem as={ReactRouterLink} to="/components/fluorite">Fluorite</NavItem>
        <NavItem as={ReactRouterLink} to="/components/magnetite">Magnetite</NavItem>
      </PrimaryNav>
      <SecondaryNav>
        <NavItem as={ReactRouterLink} to="/components/malachite">Malachite</NavItem>
        <NavItem as={ReactRouterLink} to="/components/fluorite">Fluorite</NavItem>
        <NavItem as={ReactRouterLink} to="/components/magnetite">Magnetite</NavItem>
      </SecondaryNav>
    </DemoLayout>
  `
};
