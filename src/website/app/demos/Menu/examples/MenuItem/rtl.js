/* @flow */
import { mineralTheme, ThemeProvider } from '../../../../../../library/themes';
import IconHelp from 'mineral-ui-icons/IconHelp';
import Menu, { MenuItem } from '../../../../../../library/Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  backgroundColor: mineralTheme.color_gray_10,
  description: `MenuItems with Icons are reversed when the \`direction\` theme variable is set to \`rtl\` (right-to-left).
A subset of Icons that [convey directionality](/components/icon#rtl) will be reversed.`,
  scope: { DemoLayout, IconHelp, Menu, MenuItem, ThemeProvider },
  source: `
    <DemoLayout dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Menu>
          <MenuItem>نص عنصر القائمة</MenuItem>
          <MenuItem secondaryText="نص ثانوي">نص عنصر القائمة</MenuItem>
          <MenuItem iconStart={<IconHelp />}>رمز البدء</MenuItem>
          <MenuItem iconEnd={<IconHelp />}>رمز النهاية</MenuItem>
        </Menu>
      </ThemeProvider>
    </DemoLayout>`
};
