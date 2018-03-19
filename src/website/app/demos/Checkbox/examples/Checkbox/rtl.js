/* @flow */
import { ThemeProvider } from '../../../../../../library/themes';
import Checkbox from '../../../../../../library/Checkbox';
import { FormFieldDivider } from '../../../../../../library/Form';
import DemoForm from '../../components/DemoForm';

/*
 * Note: The sample text used in the example is Arabic.
 *  defaultValue: Hello World
 */

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Checkboxes support right-to-left (RTL) languages.`,
  scope: { Checkbox, DemoForm, FormFieldDivider, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <DemoForm>
          <Checkbox name="example" label="مرحبا بالعالم"  />
          <Checkbox name="example" label="مرحبا بالعالم"  labelPosition="start" />
          <FormFieldDivider />
          <Checkbox name="example" label="مرحبا بالعالم"  justify />
          <Checkbox name="example" label="مرحبا بالعالم"  labelPosition="start" justify />
        </DemoForm>
      </ThemeProvider>
    </div>`
};
