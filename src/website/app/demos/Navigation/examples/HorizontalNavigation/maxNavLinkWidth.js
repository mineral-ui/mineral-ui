/* @flow */
import HorizontalNavigation from '../../../../../../library/Navigation';
import NavLink from '../../components/NavLink';

export default {
  id: 'max-tab-width',
  title: 'Maximum NavLink Width',
  description: `Use the \`maxNavLinkWidth\` prop to constrain the width of each
[NavLink](/components/tab). Note that if the NavLink \`title\` is longer than the
maximum width, it will be truncated but accessible via
[Tooltip](/components/tooltip). Also note that if
[\`maxWidth\`](/components/tab/#max-width) is passed to a NavLink, it will take
precedence.`,
  scope: { HorizontalNavigation, NavLink },
  source: `
    <HorizontalNavigation maxNavLinkWidth="8em" label="Minerals">
      <NavLink href="/malachite">Malachite Will Truncate</NavLink>
      <NavLink href="/fluorite">Fluorite</NavLink>
      <NavLink href="/magnetite">Magnetite</NavLink>
    </HorizontalNavigation>
  `
};
