/* @flow */

import Button from '../../../../../library/Button';
import Dropdown from '../../../../../library/Dropdown';
import renderItem from '../../Menu/components/renderItem';

export default {
  id: 'render-item',
  title: 'Custom Rendering - renderItem',
  description: `Use the \`renderItem\`
[render prop](https://reactjs.org/docs/render-props.html) to provide custom
rendering control of all [MenuItems](/components/menu-item) in the Menu.

Additionally, the implementation of \`renderItem\` used in the following
example can be seen in full in
the [MenuItem](/components/menu-item/#render-item) example.`,
  scope: { Button, Dropdown, renderItem },
  source: `
    () => {
      const data = [
        {
          text: 'Newton',
          avatar: '/images/avatar.svg',
          onClick: () => { console.log('newton') }
        },
        {
          text: 'Descartes',
          avatar: '/images/avatar.svg',
          onClick: (event) => { console.log('descartes'); }
        },
        {
          text: 'Euclid',
          avatar: '/images/avatar.svg',
          onClick: () => { console.log('euclid') }
        }
      ];

      return (
        <Dropdown data={data} renderItem={renderItem}>
          <Button>Menu</Button>
        </Dropdown>
      );
    }`
};
