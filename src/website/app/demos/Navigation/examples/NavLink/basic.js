/* @flow */
import HorizontalNavigation, {
  NavLink
} from '../../../../../../library/Navigation';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use NavLink to add a tab title and panel content to
[HorizontalNavigation](/components/tabs).`,
  scope: { HorizontalNavigation, NavLink },
  source: `
    <HorizontalNavigation label="Minerals">
      <NavLink title="Malachite" />
      <NavLink title="Fluorite" />
      <NavLink title="Magnetite" />
    </HorizontalNavigation>
  `
};
