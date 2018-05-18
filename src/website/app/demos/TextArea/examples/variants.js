/* @flow */
import TextArea from '../../../../../library/TextArea';
import DemoLayout from '../../shared/DemoLayout';

export default {
  id: 'variants',
  title: 'Variants',
  description: `TextArea is available in a few variants, mostly for use with
[validation](/components/form-field#validation). Be sure to use the
[appropriate variant](/color#guidelines-variants) for your intent.`,
  scope: { DemoLayout, TextArea },
  source: `
    <DemoLayout>
      <TextArea variant="success" defaultValue="Success" />
      <TextArea variant="warning" defaultValue="Warning" />
      <TextArea variant="danger" defaultValue="Danger" />
    </DemoLayout>
  `
};
