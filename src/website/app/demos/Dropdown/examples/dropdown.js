/* @flow */
import Button from '../../../../../library/Button';
import Dropdown from '../../../../../library/Dropdown';
import data from '../../Menu/components/menuData';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Placement is relative to the trigger.
Dropdowns will automatically change position relative to the trigger depending on viewport constraints.`,
  scope: { Button, data, Dropdown },
  source: `
    <Dropdown data={data}>
      <Button>Menu</Button>
    </Dropdown>`
};
