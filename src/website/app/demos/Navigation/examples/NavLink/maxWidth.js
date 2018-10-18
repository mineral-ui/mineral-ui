/* @flow */
import HorizontalNavigation, {
  NavLink
} from '../../../../../../library/Navigation';

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
      <NavLink title="Malachite" />
      <NavLink maxWidth="6em" title="Fluorite Will Truncate" />
      <NavLink title="Magnetite" />
    </HorizontalNavigation>
  `
};
