/* @flow */
import {
  createStyledComponent,
  pxToEm
} from '../../../../../../library/styles';
import { mineralTheme } from '../../../../../../library/themes';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Menu, { MenuItem } from '../../../../../../library/Menu';
import _DemoLayout from '../../components/DemoLayout';

const DemoLayout = createStyledComponent(_DemoLayout, {
  '& > div:last-child': {
    // For <DropdownContent wide={true} />
    width: pxToEm(344)
  }
});

export default {
  id: 'kitchen-sink',
  description: `MenuItems are flexible enough to accommodate many different use cases.`,
  title: 'Kitchen Sink',
  backgroundColor: mineralTheme.color_gray_10,
  hideFromProd: true,
  scope: { DemoLayout, IconCloud, Menu, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}>
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}>
          Kitchen Siiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}>
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink">
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Siiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiink">
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen sink">
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen sink">
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}>
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}>
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink">
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen sink">
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen sink">
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
      </Menu>
    </DemoLayout>
  `
};
