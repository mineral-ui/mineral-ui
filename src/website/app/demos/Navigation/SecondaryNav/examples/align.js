/* @flow */
import { NavItem } from '../../../../../../library/Navigation';
import DemoLayout from '../../../common/DemoLayout';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'align',
  title: 'Alignment',
  description: `Control the alignment of the list of [NavItems](/components/nav-item)
with the \`align\` prop. Note that a value of \`'justify'\` will force all NavItems
to be equal width and [\`maxItemWidth\`](#max-item-width) will not apply.`,
  scope: { DemoLayout, NavItem, SecondaryNav },
  source: `() => {
    const alignments = ['start', 'center', 'end', 'justify'];

    return (
      <DemoLayout>
        {alignments.map((alignment) => (
          <SecondaryNav align={alignment} key={alignment}>
            <NavItem href="/malachite">Malachite</NavItem>
            <NavItem href="/fluorite">Fluorite</NavItem>
            <NavItem href="/magnetite">Magnetite</NavItem>
          </SecondaryNav>
        ))}
      </DemoLayout>
    );
  }`
};
