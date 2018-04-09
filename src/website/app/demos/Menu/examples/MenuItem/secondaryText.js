/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Menu, { MenuItem } from '../../../../../../library/Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'secondary-text',
  title: 'Secondary Text',
  backgroundColor: mineralTheme.color_gray_10,
  description: `A MenuItem can render secondary text, which will wrap when necessary.
Use secondary text to give hints about extra functionality or show app status related to the action.`,
  scope: { DemoLayout, Menu, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem secondaryText="Star stuff">
          Light years
        </MenuItem>
        <MenuItem secondaryText="Distant epochs">
          Harvesting only
        </MenuItem>
        <MenuItem secondaryText="Cosmic ocean">
          Encyclopaedia galactica
        </MenuItem>
      </Menu>
    </DemoLayout>`
};
