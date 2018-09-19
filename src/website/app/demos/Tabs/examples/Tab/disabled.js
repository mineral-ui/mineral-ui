/* @flow */
import Tabs, { Tab } from '../../../../../../library/Tabs';
import Text from '../../../../../../library/Text';
import content from '../../shared/content';

export default {
  id: 'disabled',
  title: 'Disabled Tab',
  description: `Use the \`disabled\` prop to indicate that a Tab is not
available for interaction.`,
  scope: { content, Tabs, Tab, Text },
  source: `
    <Tabs label="Minerals" height="7.75em">
      <Tab title="Malachite">
        <Text>{content.malachite}</Text>
      </Tab>
      <Tab title="Fluorite">
        <Text>{content.fluorite}</Text>
      </Tab>
      <Tab disabled title="Magnetite">
        <Text>{content.magnetite}</Text>
      </Tab>
      <Tab title="Malachite">
        <Text>{content.malachite}</Text>
      </Tab>
      <Tab disabled title="Fluorite">
        <Text>{content.fluorite}</Text>
      </Tab>
    </Tabs>
  `
};
