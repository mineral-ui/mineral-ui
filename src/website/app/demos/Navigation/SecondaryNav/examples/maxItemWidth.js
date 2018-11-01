/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'max-item-width',
  title: 'Maximum Item Width',
  description: `Use the \`maxItemWidth\` prop to constrain the width of each
NavItem. Note that if the item's \`text\` is longer than the maximum width, it
will be truncated but accessible via [Tooltip](/components/tooltip). Also note
that if the [\`maxWidth\`](/components/nav-item/#max-width) property is set for
an item, it will take precedence.`,
  scope: { NavItem, SecondaryNav },
  source: `
    <SecondaryNav maxItemWidth="8em">
      <NavItem href="/malachite">Malachite</NavItem>
      <NavItem href="/fluorite">Fluorite will truncate</NavItem>
      <NavItem href="/magnetite">Magnetite</NavItem>
    </SecondaryNav>
  `
};
