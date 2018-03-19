/* @flow */
import IconBackspace from 'mineral-ui-icons/IconBackspace';
import { ThemeProvider } from '../../../../../library/themes';
import TextInput from '../../../../../library/TextInput/';
import DemoLayout from '../components/DemoLayout';

/*
 * Note: The sample text used in the example is Arabic.
 *  defaultValue: Hello World
 */

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `TextInputs support right-to-left (RTL) languages.
TextInputs with Icons are reversed when the \`direction\` theme variable is set to \`rtl\`.
A subset of Icons that [convey directionality](/components/icon#rtl) will be reversed.`,
  scope: { DemoLayout, IconBackspace, TextInput, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <DemoLayout>
          <TextInput iconStart={<IconBackspace />} defaultValue="مرحبا بالعالم" />
          <TextInput iconEnd={<IconBackspace />} defaultValue="مرحبا بالعالم" />
          <TextInput variant="success" defaultValue="مرحبا بالعالم" />
        </DemoLayout>
      </ThemeProvider>
    </div>`
};
