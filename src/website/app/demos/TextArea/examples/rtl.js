/* @flow */
import { ThemeProvider } from '../../../../../library/themes';
import TextArea from '../../../../../library/TextArea';

/*
 * Note: The sample text used in the example is Arabic.
 *  defaultValue: Hello World
 */

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `TextAreas support right-to-left (RTL) languages.`,
  scope: { TextArea, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <TextArea defaultValue="مرحبا بالعالم" />
      </ThemeProvider>
    </div>`
};
