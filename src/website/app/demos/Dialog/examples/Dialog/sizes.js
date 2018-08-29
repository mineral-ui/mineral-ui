/* @flow */
import Text from '../../../../../../library/Text';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'sizes',
  title: 'Sizes',
  description: `Dialog can be rendered in various sizes (max-height, max-width,
& width) with the \`size\` prop.`,
  scope: {
    DemoLayout,
    Dialog,
    Text
  },
  source: `() =>
    ['small', 'medium', 'large'].map(size => (
      <DemoLayout key={size}>
        <Dialog
          size={size}
          title="Lorem ipsum dolor sit amet"
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
    ));`
};
