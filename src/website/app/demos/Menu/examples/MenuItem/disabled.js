/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Menu, { MenuItem } from '../../../../../../library/Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'disabled',
  title: 'Disabled',
  backgroundColor: mineralTheme.color_gray_10,
  description: `MenuItems can be disabled.
Render a disabled MenuItem to let your user know that the option is available under the right conditions.

For example, you would disable "Open Recent" if there are no recent files available, yet you want the user to know that feature is available under other conditions.`,
  scope: { DemoLayout, Menu, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem>New File</MenuItem>
        <MenuItem>Open</MenuItem>
        <MenuItem disabled onClick={() => console.log('onClick is not triggered for disabled MenuItems')}>
          Open Recent
        </MenuItem>
        <MenuItem>Save</MenuItem>
      </Menu>
    </DemoLayout>`
};
