/* @flow */
import { Fragment } from 'react';
import { CardDivider } from '../../../../../../library/Card';
import Tabs, { Tab } from '../../../../../../library/Tabs';
import Text from '../../../../../../library/Text';
import DemoLayout from '../../../shared/DemoLayout';
import content from '../../shared/content';

export default {
  id: 'position',
  title: 'Tabs Position',
  description: `The list of [Tabs](/components/tab) can be positioned relative
to the tab panel with the \`position\` prop.

<Callout title="Accessibility Note">
  <p key={0}>
    Note that keyboard focus goes first to the selected Tab, then to the panel
    content, even when the position
    is <code key={0}>'bottom'</code> or <code key={1}>'end'</code>.
    Because of this, ensure that both the list of Tabs and the panel content are
    visible on screen together.
  </p>
</Callout>`,
  scope: { CardDivider, content, DemoLayout, Fragment, Tabs, Tab, Text },
  source: ` () => {
    const positions = ['top', 'bottom', 'start', 'end'];

    const tabs = positions.map((position, index) => {
      const tabsProps = {
        position,
        label: 'Minerals',
        height: '7.75em'
      };
      return (
        <Fragment key={index}>
          <Tabs {...tabsProps}>
            <Tab title="Malachite"><Text>{content.malachite}</Text></Tab>
            <Tab title="Fluorite"><Text>{content.fluorite}</Text></Tab>
            <Tab title="Magnetite"><Text>{content.magnetite}</Text></Tab>
          </Tabs>
          {index !== positions.length - 1 && <CardDivider />}
        </Fragment>
      );
    });

    return <DemoLayout>{tabs}</DemoLayout>
  }
  `
};
