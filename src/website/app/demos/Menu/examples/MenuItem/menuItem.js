/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Menu, { MenuItem } from '../../../../../../library/Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'basic',
  title: 'Basic Usage',
  backgroundColor: mineralTheme.color_gray_10,
  description: `
MenuItems are used to trigger an action or navigate to a new location.

<Callout title="Note">
  <p key={0}>
    MenuItems normally occupy the full available width of their container.
    The MenuItems here are width-constrained for illustration purposes.
  </p>
</Callout>`,
  scope: { DemoLayout, Menu, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem>
          Light years
        </MenuItem>
        <MenuItem>
          Star stuff
        </MenuItem>
        <MenuItem>
          Encyclopaedia galactica
        </MenuItem>
      </Menu>
    </DemoLayout>`
};
