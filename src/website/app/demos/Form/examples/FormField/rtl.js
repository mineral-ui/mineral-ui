/* @flow */
import IconBackspace from 'mineral-ui-icons/IconBackspace';
import { ThemeProvider } from '../../../../../../library/themes';
import TextInput from '../../../../../../library/TextInput';
import FormField from '../../../../../../library/Form/FormField';

/*
 * Note: The sample text used in the example is Arabic.
 *  defaultValue: Hello World
 *  label: Example
 *  requiredText: Required
 */
export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `FormFields support right-to-left (RTL) languages.`,
  scope: { FormField, IconBackspace, TextInput, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <FormField
          input={TextInput}
          iconStart={<IconBackspace />}
          label="نموذج"
          defaultValue="مرحبا بالعالم"
          required
          requiredText="مطلوب" />
      </ThemeProvider>
    </div>`
};
