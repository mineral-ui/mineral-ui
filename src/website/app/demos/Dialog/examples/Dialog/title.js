/* @flow */
import { DialogTitle } from '../../../../../../library/Dialog';
import Text from '../../../../../../library/Text';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'title',
  title: 'Title',
  description: `Dialog's \`title\` can be a simple string or you can pass a
[DialogTitle](/components/dialog-title) to apply a different \`appearance\` or
\`element\` or render non-string content. Note that Dialog automatically passes
some props, such as \`id\` & \`variant\`, to DialogTitle.`,
  scope: {
    DemoLayout,
    Dialog,
    DialogTitle,
    Text
  },
  source: `
    <div>
      <DemoLayout>
        <Dialog
          title={<DialogTitle appearance="h3" element="h2">Lorem <em>ipsum</em> dolor sit amet</DialogTitle>}
          actions={[
            { text: 'Cancel' },
            { text: 'Action' }
          ]}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Dialog>
      </DemoLayout>
    </div>`
};
