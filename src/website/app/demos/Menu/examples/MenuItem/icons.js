/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Menu, { MenuItem } from '../../../../../../library/Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'icons',
  title: 'Menu Items with Icons',
  backgroundColor: mineralTheme.color_gray_10,
  description: `A MenuItem can display an [Icon](/components/icon) at its start, end, or both.
If both \`startIcon\` and \`variant\` props are provided, \`startIcon\` will be used.`,
  scope: { DemoLayout, IconCloud, Menu, MenuItem },
  source: `
    () => {
      const icon = <IconCloud />;

      return (
        <DemoLayout>
          <Menu>
            <MenuItem iconStart={icon}>Start icon</MenuItem>
            <MenuItem iconEnd={icon}>End icon</MenuItem>
            <MenuItem iconStart={icon} iconEnd={icon}>Both icons</MenuItem>
          </Menu>
          <Menu>
            <MenuItem iconStart={icon} variant="danger">Danger</MenuItem>
            <MenuItem iconStart={icon} variant="success">Success</MenuItem>
            <MenuItem iconStart={icon} variant="warning">Warning</MenuItem>
            <MenuItem iconStart={icon} disabled>Disabled</MenuItem>
          </Menu>
        </DemoLayout>
      );
    }`
};
