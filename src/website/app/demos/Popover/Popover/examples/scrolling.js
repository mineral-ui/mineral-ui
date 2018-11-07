/* @flow */
import Button from '../../../../../../library/Button';
import DemoContent from '../../common/DemoContent';
import ScrollParent from '../../common/ScrollBox';
import Popover from '../../../../../../library/Popover';

export default {
  id: 'scrolling-container',
  title: 'Scrolling Container',
  description: `Popover will attempt to stay visible in an \`overflow: scroll\` container.`,
  scope: { Button, DemoContent, ScrollParent, Popover },
  source: `
    <ScrollParent>
      <Popover
        content={<DemoContent />}
        placement="left"
        isOpen>
        <Button>Open Popover</Button>
      </Popover>
    </ScrollParent>
  `
};
