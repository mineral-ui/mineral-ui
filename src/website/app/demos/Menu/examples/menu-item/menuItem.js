/* @flow */
import { mineralTheme } from '../../../../../../themes';
import Menu, { MenuItem } from '../../../../../../Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'basic',
  title: 'Basic Usage',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `
MenuItems are used to trigger an action or navigate to a new location.

<Callout title="Note">
  MenuItems normally occupy the full available width of their container.
  The MenuItems here are width-constrained for illustration purposes.
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
