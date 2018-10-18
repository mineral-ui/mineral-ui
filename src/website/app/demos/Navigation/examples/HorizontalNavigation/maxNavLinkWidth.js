/* @flow */
import HorizontalNavigation, {
  NavLink
} from '../../../../../../library/Navigation';

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
      <NavLink title="Malachite Will Truncate" />
      <NavLink title="Fluorite" />
      <NavLink title="Magnetite" />
    </HorizontalNavigation>
  `
};
