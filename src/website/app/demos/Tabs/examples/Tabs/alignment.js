/* @flow */
import { Fragment } from 'react';
import { CardDivider } from '../../../../../../library/Card';
import Tabs, { Tab } from '../../../../../../library/Tabs';
import Text from '../../../../../../library/Text';
import DemoLayout from '../../../shared/DemoLayout';
import content from '../../shared/content';

export default {
  id: 'alignment',
  title: 'Tabs Alignment',
  description: `Control the alignment of the list of [Tabs](/components/tab)
with the \`align\` prop. Note that a value of \`'justify'\` will force all Tabs
to be equal width and [\`maxTabWidth\`](#max-tab-width) will not apply.`,
  scope: { CardDivider, content, DemoLayout, Fragment, Tabs, Tab, Text },
  source: ` () => {
    const alignments = ['start', 'center', 'end', 'justify'];

    const tabs = ({ position } = {}) => alignments.map((alignment, index) => {
      const key = position ? position + '-' + index : index;
      const tabsProps = {
        align: alignment,
        position,
        label: 'Minerals',
        height: position === 'start' ? '10em' : '7.75em'
      };
      return (
        <Fragment key={key}>
          <Tabs {...tabsProps}>
            <Tab title="Malachite"><Text>{content.malachite}</Text></Tab>
            <Tab title="Fluorite"><Text>{content.fluorite}</Text></Tab>
            <Tab title="Magnetite"><Text>{content.magnetite}</Text></Tab>
          </Tabs>
          {!(position && index === alignments.length - 1) && <CardDivider />}
        </Fragment>
      );
    });

    return (
      <DemoLayout>
        {tabs()}
        {tabs({ position: 'start' })}
      </DemoLayout>
    );
  }
  `
};
