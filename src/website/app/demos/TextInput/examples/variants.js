/* @flow */
import DemoLayout from '../components/DemoLayout';
import TextInput from '../../../../../library/TextInput/';

export default {
  id: 'variants',
  title: 'Variants',
  description: `TextInput is available in a few variants, mostly for use with
[validation](/components/form-field#validation). Be sure to use the
[appropriate variant](/color#guidelines-variants) for your intent.`,
  scope: { DemoLayout, TextInput },
  source: `
    <DemoLayout>
      <TextInput variant="success" defaultValue="Success" />
      <TextInput variant="warning" defaultValue="Warning" />
      <TextInput variant="danger" defaultValue="Danger" />
    </DemoLayout>
  `
};
