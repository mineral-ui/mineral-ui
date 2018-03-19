/* @flow */
import Button from '../../../../../library/Button';
import DemoContent from '../../Popover/components/DemoContent';
import ScrollParent from '../../Popover/components/ScrollBox';
import Dropdown from '../../../../../library/Dropdown';
import data from '../../Menu/components/menuData';

export default {
  id: 'portal',
  title: 'Portal',
  description:
    'Use a portal to render the Dropdown to the body of the page rather than as a sibling of the trigger.  This can be useful to visually "break out" of a bounding container with `overflow` or `z-index` styles. Note that you may have to adjust the `modifiers` to get the exact behavior that you want.',
  scope: { Button, data, DemoContent, ScrollParent, Dropdown },
  source: `
    <ScrollParent>
      <Dropdown
        data={data}
        usePortal
        isOpen
        modifiers={{
          preventOverflow: {
            escapeWithReference: true
          }
        }}>
        <Button>Menu</Button>
      </Dropdown>
    </ScrollParent>`
};
