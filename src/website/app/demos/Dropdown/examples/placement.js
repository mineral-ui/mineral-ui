/* @flow */
import Button from '../../../../../library/Button';
import { createStyledComponent } from '../../../../../library/styles';
import Dropdown from '../../../../../library/Dropdown';
import data from '../../Menu/components/menuData';

const DemoLayout = createStyledComponent('div', {
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export default {
  id: 'placement',
  title: 'Placement',
  description: `The \`placement\` prop determines the initial placement of the Dropdown content relative to the trigger.
The Dropdown will react to viewport edges and scrolling.`,
  scope: { Button, data, DemoLayout, Dropdown },
  source: `
    <DemoLayout>
      <Dropdown
        placement="bottom-start"
        data={data}
        isOpen>
        <Button>Menu</Button>
      </Dropdown>
    </DemoLayout>`
};
