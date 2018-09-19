/* @flow */
import Tabs, { Tab } from '../../../../../../library/Tabs';
import Text from '../../../../../../library/Text';
import content from '../../shared/content';

export default {
  id: 'max-width',
  title: 'Maximum Width',
  description: `Use the \`maxWidth\` prop to constrain the width of the Tab.
Note that if the Tab \`title\` is longer than the maximum width, it will be
truncated but accessible via [Tooltip](/components/tooltip). Also note that if
\`maxTabWidth\` is passed to [Tabs](/components/tabs), \`maxWidth\` on a Tab
will take precedence.`,
  scope: { content, Tabs, Tab, Text },
  source: `
    <Tabs label="Minerals" height="7.75em">
      <Tab title="Malachite">
        <Text>{content.malachite}</Text>
      </Tab>
      <Tab maxWidth="6em" title="Fluorite Will Truncate">
        <Text>{content.fluorite}</Text>
      </Tab>
      <Tab title="Magnetite">
        <Text>{content.magnetite}</Text>
      </Tab>
    </Tabs>
  `
};
