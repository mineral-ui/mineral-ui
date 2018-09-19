/* @flow */
import Tabs, { Tab } from '../../../../../../library/Tabs';
import Text from '../../../../../../library/Text';
import content from '../../shared/content';

export default {
  id: 'max-tab-width',
  title: 'Maximum Tab Width',
  description: `Use the \`maxTabWidth\` prop to constrain the width of each
[Tab](/components/tab). Note that if the Tab \`title\` is longer than the
maximum width, it will be truncated but accessible via
[Tooltip](/components/tooltip). Also note that if
[\`maxWidth\`](/components/tab/#max-width) is passed to a Tab, it will take
precedence.`,
  scope: { content, Tabs, Tab, Text },
  source: `
    <Tabs maxTabWidth="8em" label="Minerals" height="7.75em">
      <Tab title="Malachite Will Truncate">
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
