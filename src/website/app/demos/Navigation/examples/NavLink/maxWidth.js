/* @flow */
import HorizontalNavigation from '../../../../../../library/Navigation';
import NavLink from '../../components/NavLink';

export default {
  id: 'max-width',
  title: 'Maximum Width',
  description: `Use the \`maxWidth\` prop to constrain the width of the NavLink.
Note that if the NavLink \`title\` is longer than the maximum width, it will be
truncated but accessible via [Tooltip](/components/tooltip). Also note that if
\`maxNavLinkWidth\` is passed to [HorizontalNavigation](/components/tabs), \`maxWidth\` on a NavLink
will take precedence.`,
  scope: { HorizontalNavigation, NavLink },
  source: `
    <HorizontalNavigation label="Minerals">
      <NavLink href="/malachite">Malachite</NavLink>
      <NavLink maxWidth="6em" href="/fluorite">Fluorite Will Truncate</NavLink>
      <NavLink href="/magnetite">Magnetite</NavLink>
    </HorizontalNavigation>
  `
};
