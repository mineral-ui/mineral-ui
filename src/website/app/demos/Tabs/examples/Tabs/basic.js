/* @flow */
import Tabs, { Tab } from '../../../../../../library/Tabs';
import Text from '../../../../../../library/Text';
import content from '../../shared/content';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Place [Tab](/components/tab) components within Tabs to allow
users to navigate related content in the same space. Use \`label\` to briefly
describe the related content for users of
[assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology).

<Callout title="Note">
  <p key={0}>
    All of the following examples apply a <code key={0}>height</code> in order
    to prevent shifting of the layout when Tabs contains content of different
    lengths.
  </p>
</Callout>`,
  scope: { content, Tabs, Tab, Text },
  source: `
    <Tabs defaultSelectedTabIndex={1} label="Minerals" height="7.75em">
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
