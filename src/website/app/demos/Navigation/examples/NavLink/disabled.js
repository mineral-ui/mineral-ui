/* @flow */
import HorizontalNavigation, {
  NavLink
} from '../../../../../../library/Navigation';

export default {
  id: 'disabled',
  title: 'Disabled NavLink',
  description: `Use the \`disabled\` prop to indicate that a NavLink is not
available for interaction.`,
  scope: { HorizontalNavigation, NavLink },
  source: `
    <HorizontalNavigation label="Minerals">
      <NavLink title="Malachite" />
      <NavLink title="Fluorite" />
      <NavLink disabled title="Magnetite" />
      <NavLink title="Malachite" />
      <NavLink disabled title="Fluorite" />
    </HorizontalNavigation>
  `
};
