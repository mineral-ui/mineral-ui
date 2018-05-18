/* @flow */
import TextInput from '../../../../../library/TextInput/';
import DemoLayout from '../../shared/DemoLayout';

export default {
  id: 'size',
  title: 'Available Sizes',
  description: `TextInput is available in a few sizes.`,
  scope: { DemoLayout, TextInput },
  source: `
    <DemoLayout>
      <TextInput size="small" defaultValue="Small" />
      <TextInput size="medium" defaultValue="Medium" />
      <TextInput defaultValue="Large" />
      <TextInput size="jumbo" defaultValue="Jumbo" />
    </DemoLayout>
  `
};
