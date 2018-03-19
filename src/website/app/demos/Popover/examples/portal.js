/* @flow */
import Button from '../../../../../library/Button';
import DemoContent from '../components/DemoContent';
import ScrollParent from '../components/ScrollBox';
import Popover from '../../../../../library/Popover';

export default {
  id: 'portal',
  title: 'Portal',
  description:
    'Use a portal to render the Popover to the body of the page rather than as a sibling of the trigger.  This can be useful to visually "break out" of a container with `overflow` or `z-index` styles. Note that you may have to adjust the `modifiers` to get the exact behavior that you want.',
  scope: { Button, DemoContent, ScrollParent, Popover },
  source: `
    <ScrollParent>
      <Popover
        content={<DemoContent />}
        placement="bottom"
        usePortal
        isOpen
        modifiers={{
          preventOverflow: {
            escapeWithReference: true
          }
        }}>
        <Button>Open Popover</Button>
      </Popover>
    </ScrollParent>
  `
};
