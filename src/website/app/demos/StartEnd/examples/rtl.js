/* @flow */
import { ThemeProvider } from '../../../../../library/themes';
import Box from '../../Box/components/Box';
import StartEnd from '../components/StartEnd';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `StartEnd reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: { Box, StartEnd, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <StartEnd>
          <Box>بداية</Box>
          <Box>النهاية</Box>
        </StartEnd>
      </ThemeProvider>
    </div>`
};
