/* @flow */
import { createStyledComponent, pxToEm } from '../../../../../styles';
import Button from '../../../../../Button';
import Dropdown from '../../../../../Dropdown';
import { ThemeProvider } from '../../../../../themes';
import data from '../../Menu/components/menuData';

const DemoLayout = createStyledComponent('div', {
  paddingBottom: pxToEm(130)
});

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Dropdowns support right-to-left (RTL) languages. The placement of
the menu as well as the menu itself will be reversed when the \`direction\`
theme variable is set to \`rtl\`.`,
  scope: { Button, data, DemoLayout, Dropdown, ThemeProvider },
  source: `
    <DemoLayout dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Dropdown data={data} isOpen>
          <Button>Menu</Button>
        </Dropdown>
      </ThemeProvider>
    </DemoLayout>`
};
