/* @flow */
import Button from '../../../../../library/Button';
import ScrollParent from '../../Popover/components/ScrollBox';
import Tooltip from '../../../../../library/Tooltip';

export default {
  id: 'portal',
  title: 'Portal',
  description: `Use a portal to render the Tooltip to the body of the page
rather than as a sibling of the trigger.  This can be useful to visually "break
out" of a container with \`overflow\` or \`z-index\` styles. Note that you may
have to adjust the \`modifiers\` to get the exact behavior that you want.`,
  scope: { Button, ScrollParent, Tooltip },
  source: `
    <ScrollParent>
      <Tooltip
        content="Light years star stuff"
        placement="bottom"
        usePortal
        isOpen
        modifiers={{
          preventOverflow: {
            escapeWithReference: true
          }
        }}>
        <Button>Button</Button>
      </Tooltip>
    </ScrollParent>
  `
};
