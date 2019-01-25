/* @flow */
import Button from '../../../../../../library/Button';
import styled from '@emotion/styled';
import Dropdown from '../../../../../../library/Dropdown';
import data from '../../../Menu/common/menuData';

const OverflowContainer = styled('div')({
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
