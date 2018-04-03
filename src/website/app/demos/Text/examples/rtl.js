/* @flow */
import Text from '../../../../../library/Text';
import { ThemeProvider } from '../../../../../library/themes';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Text supports right-to-left (RTL) languages; alignment will be reversed
when the \`direction\` theme variable is set to \`rtl\`.`,
  scope: { Text, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <div>
          <Text>محاذاة البداية</Text>
          <Text align="end">محاذاة النهاية</Text>
        </div>
      </ThemeProvider>
    </div>`
};
