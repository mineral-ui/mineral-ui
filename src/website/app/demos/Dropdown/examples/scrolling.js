/* @flow */
import Button from '../../../../../library/Button';
import Dropdown from '../../../../../library/Dropdown';
import ScrollParent from '../../Popover/components/ScrollBox';
import data from '../../Menu/components/menuData';

export default {
  id: 'scrolling-container',
  title: 'Scrolling container',
  description: `Dropdown will attempt to keep its menu visible in an \`overflow: scroll\` container.`,
  scope: { Button, data, Dropdown, ScrollParent },
  source: `
    <ScrollParent height={430}>
      <Dropdown
        data={data}
        isOpen
        placement="bottom-start">
        <Button>Menu</Button>
      </Dropdown>
    </ScrollParent>
  `
};
