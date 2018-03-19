/* @flow */
import { ThemeProvider } from '../../../../../library/themes';
import Box from '../components/Box';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Box reverses some of its properties when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: { Box, DemoLayout, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <DemoLayout>
          <Box marginLeft="lg">اليسار</Box>
          <Box marginStart="lg">بداية</Box>
          <Box marginEnd="lg">النهاية</Box>
        </DemoLayout>
      </ThemeProvider>
    </div>`
};
