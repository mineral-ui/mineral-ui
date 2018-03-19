/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import Button from '../../../../../library/Button';
import Dropdown from '../../../../../library/Dropdown';

const DemoLayout = createStyledComponent('div', {
  height: '210px'
});

const data = [
  {
    items: [
      {
        text: 'Light years star stuff'
      },
      {
        text: 'Harvesting star light citizens of distant epochs'
      },
      {
        text: 'Encyclopaedia galactica vastness is bearable'
      },
      {
        text: 'Shores of the cosmic ocean'
      }
    ]
  }
];

export default {
  id: 'wide',
  title: 'Wide',
  description: `Dropdown can display a wider menu (~50% wider).
Use this when there are MenuItems that wrap and look odd.
Make sure you have enough room for the wider Menu on the devices you're supporting.`,
  scope: { Button, data, DemoLayout, Dropdown },
  source: `
    <DemoLayout>
      <Dropdown wide isOpen data={data}>
        <Button>Menu</Button>
      </Dropdown>
    </DemoLayout>`
};
