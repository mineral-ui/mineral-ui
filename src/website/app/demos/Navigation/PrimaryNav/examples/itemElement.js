/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import ReactRouterLink from '../../common/FakeRouterLink';
import PrimaryNav from '../../common/PrimaryNav';

export default {
  id: 'item-element',
  title: 'Item Element',
  description: `Any component that renders an \`<a />\` element may be used for
NavItem by specifying the \`itemElement\` prop, such as a
[React Router Link](https://reacttraining.com/react-router/web/api/Link).`,
  scope: { NavItem, PrimaryNav, ReactRouterLink },
  source: `
    <PrimaryNav itemElement={ReactRouterLink}>
      <NavItem href="/malachite">Malachite</NavItem>
      <NavItem href="/fluorite">Fluorite</NavItem>
      <NavItem href="/magnetite">Magnetite</NavItem>
    </PrimaryNav>
  `
};
