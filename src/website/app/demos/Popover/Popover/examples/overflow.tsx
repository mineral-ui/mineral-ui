/* @flow */
import Button from '../../../../../../library/Button';
import styled from '@emotion/styled';
import DemoContent from '../../common/DemoContent';
import Popover from '../../../../../../library/Popover';

const OverflowContainer = styled('div')({
  backgroundColor: 'aliceblue',
  overflow: 'hidden',
  padding: '25px'
});

export default {
  id: 'overflow',
  title: 'Overflow',
  description: `A Popover can extend beyond its bounding container (the blue area in this example) even if the container has an \`overflow: hidden\` style.  See the [portal example](#portal) for even greater control.`,
  scope: { Button, DemoContent, OverflowContainer, Popover },
  source: `
    <OverflowContainer>
      <Popover
        content={<DemoContent />}
        placement="right"
        isOpen>
        <Button>Open Popover</Button>
      </Popover>
    </OverflowContainer>`
};
