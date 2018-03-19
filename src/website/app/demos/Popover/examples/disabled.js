/* @flow */
import Button from '../../../../../library/Button';
import DemoContent from '../components/DemoContent';
import Popover from '../../../../../library/Popover';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `Disable the Popover and its trigger.`,
  scope: { Button, DemoContent, Popover },
  source: `
    <Popover content={<DemoContent />} disabled>
      <Button>Open Popover</Button>
    </Popover>`
};
