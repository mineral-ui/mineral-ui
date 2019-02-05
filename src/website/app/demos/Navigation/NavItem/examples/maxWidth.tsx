/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import DemoLayout from '../../../common/DemoLayout';
import PrimaryNav from '../../common/PrimaryNav';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'max-width',
  title: 'Maximum Width',
  description: `Use the \`maxWidth\` prop to constrain the width of NavItem.
Note that if the NavItem \`text\` is longer than the maximum width, it will be
truncated but accessible via [Tooltip](/components/tooltip). Also note that if
\`maxItemWidth\` is passed to [PrimaryNav](/components/primary-nav) or
[SecondaryNav](/components/secondary-nav), \`maxWidth\` on NavItem will take
precedence.`,
  scope: { DemoLayout, NavItem, PrimaryNav, SecondaryNav },
  source: `
    <DemoLayout>
      <PrimaryNav>
        <NavItem href="/malachite">Malachite</NavItem>
        <NavItem maxWidth="6em" href="/fluorite">Fluorite Will Truncate</NavItem>
        <NavItem href="/magnetite">Magnetite</NavItem>
      </PrimaryNav>
      <SecondaryNav>
        <NavItem href="/malachite">Malachite</NavItem>
        <NavItem maxWidth="6em" href="/fluorite">Fluorite Will Truncate</NavItem>
        <NavItem href="/magnetite">Magnetite</NavItem>
      </SecondaryNav>
    </DemoLayout>
  `
};
