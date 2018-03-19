/* @flow */
import { ThemeProvider } from '../../../../../library/themes';
import Select from '../../../../../library/Select';
import DemoLayout from '../components/DemoLayout';
import { rtlData as data } from '../components/selectData';

/*
 * Note: The sample text used in the example is Arabic.
 *  defaultValue: Hello World
 */

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Selects support right-to-left (RTL) languages.
Selects with a variant are reversed when the \`direction\` theme variable is set
to \`rtl\`.`,
  scope: { data, DemoLayout, Select, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <DemoLayout>
          <Select data={data} placeholder="تحديد..." />
          <Select data={data} variant="success" placeholder="تحديد..." />
        </DemoLayout>
      </ThemeProvider>
    </div>`
};
