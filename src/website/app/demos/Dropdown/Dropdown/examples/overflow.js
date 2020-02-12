/* @flow */
import styled from '@emotion/styled';
import Button from '../../../../../../library/Button';
import Dropdown from '../../../../../../library/Dropdown';
import data from '../../../Menu/common/menuData';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const OverflowContainer: StyledComponent<{ [key: string]: any }> = styled(
  'div'
)({
  backgroundColor: 'aliceblue',
  margin: '0 0 145px 0',
  overflow: 'hidden',
  padding: '25px'
});

export default {
  id: 'overflow',
  title: 'Overflow',
  description: `A Dropdown can extend beyond its bounding container (the blue area in this example) even if the container has an \`overflow: hidden\` style.    See the [portal example](#portal) for even greater control.`,
  scope: { Button, data, Dropdown, OverflowContainer },
  source: `
    <OverflowContainer>
      <Dropdown data={data} isOpen>
        <Button>Menu</Button>
      </Dropdown>
    </OverflowContainer>`
};
