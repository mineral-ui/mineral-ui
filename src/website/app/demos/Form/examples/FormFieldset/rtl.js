/* @flow */
import IconBackspace from 'mineral-ui-icons/IconBackspace';
import { ThemeProvider } from '../../../../../../themes';
import TextInput from '../../../../../../TextInput';
import FormField from '../../../../../../Form/FormField';
import FormFieldset from '../../../../../../Form/FormFieldset';

// Note: The sample text used in the example is Arabic and translates to "Hello World"
// https://translate.google.com/#auto/ar/Hello%20World

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `FormFieldsets support right-to-left (RTL) languages.`,
  scope: { FormField, FormFieldset, IconBackspace, TextInput, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <FormFieldset legend="أسطورة">
          <FormField label="مرحبا بالعالم">
            <TextInput iconStart={<IconBackspace />} defaultValue="مرحبا بالعالم" />
          </FormField>
        </FormFieldset>
      </ThemeProvider>
    </div>`
};
