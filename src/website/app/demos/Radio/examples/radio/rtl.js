/* @flow */
import { ThemeProvider } from '../../../../../../themes';
import { FormFieldDivider } from '../../../../../../Form';
import Radio from '../../../../../../Radio';
import DemoForm from '../../components/DemoForm';

/*
 * Note: The sample text used in the example is Arabic.
 *  defaultValue: Hello World
 */

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Radios support right-to-left (RTL) languages.`,
  scope: { DemoForm, FormFieldDivider, Radio, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <DemoForm>
          <Radio name="example" label="مرحبا بالعالم"  />
          <Radio name="example" label="مرحبا بالعالم"  labelPosition="start" />
          <FormFieldDivider />
          <Radio name="example" label="مرحبا بالعالم"  justify />
          <Radio name="example" label="مرحبا بالعالم"  labelPosition="start" justify />
        </DemoForm>
      </ThemeProvider>
    </div>`
};
