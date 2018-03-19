/* @flow */
import { ThemeProvider } from '../../../../../library/themes';
import IconHelp from 'mineral-ui-icons/IconHelp';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description:
    'Some icons will be [automatically mirrored](http://google.github.io/material-design-icons/#which-icons-should-be-mirrored-for-rtl-) for right-to-left (RTL) languages, depending on context.',
  scope: { IconHelp, ThemeProvider },
  source: `
    <ThemeProvider theme={{ direction: 'rtl' }}>
      <IconHelp />
    </ThemeProvider>`
};
