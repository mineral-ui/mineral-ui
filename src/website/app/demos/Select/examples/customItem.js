/* @flow */

import Select from '../../../../../library/Select';
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
  scope: { item, Select },
  source: `
    () => {
      const data = [
        {
          avatar: '/images/avatar.svg',
          text: 'Newton',
          value: 'newton',
          work: 'Principia Mathematica'
        },
        {
          avatar: '/images/avatar.svg',
          text: 'Descartes',
          value: 'descartes',
          work: 'La Géométrie'
        },
        {
          avatar: '/images/avatar.svg',
          text: 'Euclid',
          value: 'euclid',
          work: 'Elements'
        }
      ];

      return (
        <Select data={data} item={item} />
      );
    }`
};
