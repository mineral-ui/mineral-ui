/* @flow */
import Button from '../../../../../library/Button';
import { createStyledComponent } from '../../../../../library/styles';
import Dropdown from '../../../../../library/Dropdown';
import data from '../../Menu/components/menuData';

const OverflowContainer = createStyledComponent('div', {
  backgroundColor: 'aliceblue',
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
      <Dropdown data={data}>
        <Button>Menu</Button>
      </Dropdown>
    </OverflowContainer>`
};
