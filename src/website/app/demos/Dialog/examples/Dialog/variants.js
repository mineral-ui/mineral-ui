/* @flow */
import Text from '../../../../../../library/Text';
import capitalize from '../../../../utils/capitalize';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'variants',
  title: 'Variants',
  description: `Use the \`variant\` prop to help
[communicate intent](/color#guidelines-variants). Note that the variant is
automatically applied to the title and primary action.`,
  scope: {
    capitalize,
    DemoLayout,
    Dialog,
    Text
  },
  source: `() => {
    return ['success', 'warning', 'danger'].map(variant => {
      return (
        <DemoLayout key={variant}>
          <Dialog
            variant={variant}
            title={capitalize(variant) + ' ipsum dolor sit amet'}
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
      );
    });
  }
   `
};
