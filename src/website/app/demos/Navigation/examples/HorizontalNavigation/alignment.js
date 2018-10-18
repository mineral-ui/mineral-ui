/* @flow */
import { Fragment } from 'react';
import { CardDivider } from '../../../../../../library/Card';
import HorizontalNavigation, {
  NavLink
} from '../../../../../../library/Navigation';
import DemoLayout from '../../../shared/DemoLayout';

export default {
  id: 'alignment',
  title: 'HorizontalNavigation Alignment',
  description: `Control the alignment of the list of [HorizontalNavigation](/components/tab)
with the \`align\` prop. Note that a value of \`'justify'\` will force all HorizontalNavigation
to be equal width and [\`maxNavLinkWidth\`](#max-tab-width) will not apply.`,
  scope: { CardDivider, DemoLayout, Fragment, HorizontalNavigation, NavLink },
  source: `() => {
    const alignments = ['start', 'center', 'end', 'justify'];

    const navLinks = alignments.map((alignment, index) => (
      <Fragment key={index}>
        <HorizontalNavigation align={alignment} label="Minerals">
          <NavLink title="Malachite" />
          <NavLink title="Fluorite" />
          <NavLink title="Magnetite" />
        </HorizontalNavigation>
        {!(index === alignments.length - 1) && <CardDivider />}
      </Fragment>
    ));

    return <DemoLayout>{navLinks}</DemoLayout>;
  }`
};
