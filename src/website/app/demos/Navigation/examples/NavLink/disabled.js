/* @flow */
import HorizontalNavigation from '../../../../../../library/Navigation';
import NavLink from '../../components/NavLink';

export default {
  id: 'disabled',
  title: 'Disabled NavLink',
  description: `Use the \`disabled\` prop to indicate that a NavLink is not
available for interaction.`,
  scope: { HorizontalNavigation, NavLink },
  source: `
    <HorizontalNavigation label="Minerals">
      <NavLink href="/malachite">Malachite</NavLink>
      <NavLink href="/fluorite">Fluorite</NavLink>
      <NavLink disabled href="/magnetite">Magnetite</NavLink>
      <NavLink href="/malachite">Malachite</NavLink>
      <NavLink disabled href="/fluorite">Fluorite</NavLink>
    </HorizontalNavigation>
  `
};
