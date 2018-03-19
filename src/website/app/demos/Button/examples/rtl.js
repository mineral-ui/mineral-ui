/* @flow */
import { ThemeProvider } from '../../../../../library/themes';
import Button from '../../../../../library/Button';
import IconBackspace from 'mineral-ui-icons/IconBackspace';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Buttons support right-to-left (RTL) languages.
Buttons with Icons are reversed when the \`direction\` theme variable is set to \`rtl\`.
A subset of Icons that [convey directionality](/components/icon#rtl) will be reversed.`,
  scope: { Button, IconBackspace, ThemeProvider },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Button iconStart={<IconBackspace />}>قم بعمل ما</Button>
      </ThemeProvider>
    </div>`
};
