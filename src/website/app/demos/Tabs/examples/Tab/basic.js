/* @flow */
import Tabs, { Tab } from '../../../../../../library/Tabs';
import Text from '../../../../../../library/Text';
import content from '../../shared/content';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use Tab to add a tab title and panel content to
[Tabs](/components/tabs).

<Callout title="Note">
  <p key={0}>
    All of the following examples apply a <code key={0}>height</code> to Tabs
    in order to prevent shifting of the layout when Tabs contains content of
    different lengths.
  </p>
</Callout>`,
  scope: { content, Tabs, Tab, Text },
  source: `
    <Tabs label="Minerals" height="7.75em">
      <Tab title="Malachite">
        <Text>{content.malachite}</Text>
      </Tab>
      <Tab title="Fluorite">
        <Text>{content.fluorite}</Text>
      </Tab>
      <Tab title="Magnetite">
        <Text>{content.magnetite}</Text>
      </Tab>
    </Tabs>
  `
};
