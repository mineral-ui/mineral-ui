/* @flow */
import HorizontalNavigation from '../../../../../../library/Navigation';
import NavLink from '../../components/NavLink';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use NavLink to add a tab title and panel content to
[HorizontalNavigation](/components/tabs).`,
  scope: { HorizontalNavigation, NavLink },
  source: `
    <HorizontalNavigation label="Minerals">
      <NavLink href="/malachite">Malachite</NavLink>
      <NavLink href="/fluorite">Fluorite</NavLink>
      <NavLink href="/magnetite">Magnetite</NavLink>
    </HorizontalNavigation>
  `
};
