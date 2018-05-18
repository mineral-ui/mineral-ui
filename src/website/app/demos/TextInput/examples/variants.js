/* @flow */
import TextInput from '../../../../../library/TextInput/';
import DemoLayout from '../../shared/DemoLayout';

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
