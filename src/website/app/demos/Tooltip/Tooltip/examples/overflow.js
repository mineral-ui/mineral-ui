/* @flow */
import styled from '@emotion/styled';
import Button from '../../../../../../library/Button';
import Tooltip from '../../../../../../library/Tooltip';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const OverflowContainer: StyledComponent<{ [key: string]: any }> = styled(
  'div'
)({
  backgroundColor: 'aliceblue',
  overflow: 'hidden',
  padding: '10px'
});

export default {
  id: 'overflow',
  title: 'Overflow',
  description: `A Tooltip can extend beyond its bounding container (the blue
area in this example) even if the container has an \`overflow: hidden\` style.
See the [portal example](#portal) for even greater control.`,
  scope: { Button, OverflowContainer, Tooltip },
  source: `
    <OverflowContainer>
      <Tooltip
        content="Light years star stuff"
        placement="top"
        isOpen>
        <Button>Button</Button>
      </Tooltip>
    </OverflowContainer>`
};
