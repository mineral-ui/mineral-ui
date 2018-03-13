/* @flow */
import Button from '../../../../../Button';
import { createStyledComponent } from '../../../../../styles';
import DemoContent from '../components/DemoContent';
import Popover from '../../../../../Popover';

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
