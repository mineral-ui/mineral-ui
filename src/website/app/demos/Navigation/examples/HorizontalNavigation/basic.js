/* @flow */
import HorizontalNavigation, {
  NavLink
} from '../../../../../../library/Navigation';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Place [NavLink](/components/tab) components within HorizontalNavigation to allow
users to navigate related content in the same space. Use \`label\` to briefly
describe the related content for users of
[assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology).`,
  scope: { HorizontalNavigation, NavLink },
  source: `
    <HorizontalNavigation defaultSelectedNavLinkIndex={1} label="Minerals">
      <NavLink title="Malachite" />
      <NavLink title="Fluorite" />
      <NavLink title="Magnetite" />
    </HorizontalNavigation>
  `
};
