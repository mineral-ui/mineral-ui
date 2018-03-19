/* @flow */
import Button from '../../../../../library/Button';
import Dropdown from '../../../../../library/Dropdown';
import data from '../../Menu/components/menuData';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `Disable the Dropdown and its trigger.`,
  scope: { Button, data, Dropdown },
  source: `
    <Dropdown data={data} disabled>
      <Button>Menu</Button>
    </Dropdown>`
};
