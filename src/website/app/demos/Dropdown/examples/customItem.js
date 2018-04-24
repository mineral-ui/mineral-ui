/* @flow */

import Button from '../../../../../library/Button';
import Dropdown from '../../../../../library/Dropdown';
import item from '../../Menu/components/customItem';
import renderPropDescription from '../../shared/renderPropDescription';

export default {
  id: 'custom-item',
  title: 'Custom Item',
  description: `Use the \`item\`
[render prop](https://reactjs.org/docs/render-props.html) to provide custom
rendering control of all [MenuItems](/components/menu-item) in the Menu.

The implementation of \`item\` used in the following example can be seen
in full in the [Menu](/components/menu/#custom-item) example.

${renderPropDescription}`,
  scope: { Button, Dropdown, item },
  source: `
    () => {
      const data = [
        {
          avatar: '/images/avatar.svg',
          text: 'Newton',
          work: 'Principia Mathematica'
        },
        {
          avatar: '/images/avatar.svg',
          text: 'Descartes',
          work: 'La Géométrie'
        },
        {
          avatar: '/images/avatar.svg',
          text: 'Euclid',
          work: 'Elements'
        }
      ];

      return (
        <Dropdown data={data} item={item}>
          <Button>Menu</Button>
        </Dropdown>
      );
    }`
};
