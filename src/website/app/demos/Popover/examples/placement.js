/* @flow */
import Button from '../../../../../library/Button';
import { createStyledComponent } from '../../../../../library/styles';
import DemoContent from '../components/DemoContent';
import Popover from '../../../../../library/Popover';

const DemoLayout = createStyledComponent('div', {
  height: '350px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export default {
  id: 'placement',
  title: 'Placement',
  description: `The \`placement\` prop determines the initial placement of the Popover content relative to the trigger.
The Popover will still react to viewport edges and scrolling.`,
  scope: { Button, DemoContent, DemoLayout, Popover },
  source: `
    <DemoLayout>
      <Popover
        content={<DemoContent />}
        placement="bottom"
        isOpen>
        <Button>Open Popover</Button>
      </Popover>
    </DemoLayout>`
};
