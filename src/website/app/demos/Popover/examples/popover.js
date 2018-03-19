/* @flow */
import Button from '../../../../../library/Button';
import DemoContent from '../components/DemoContent';
import Popover from '../../../../../library/Popover';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Popovers wrap the triggering component.
Placement is relative to the location of the trigger.
Popovers will change position relative to the trigger automatically depending on viewport constraints.`,
  scope: { Button, DemoContent, Popover },
  source: `
    <Popover content={<DemoContent />}>
      <Button>Open Popover</Button>
    </Popover>`
};
