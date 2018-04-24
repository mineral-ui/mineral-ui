/* @flow */

import Select from '../../../../../library/Select';
import renderItem from '../../Menu/components/renderItem';

export default {
  id: 'render-item',
  title: 'Custom Rendering - renderItem',
  description: `Use the \`renderItem\`
[render prop](https://reactjs.org/docs/render-props.html) to provide custom
rendering control of all [MenuItems](/components/menu-item) in the Menu.

Additionally, the implementation of \`renderItem\` used in the following
example can be seen in full in
the [MenuItem](/components/menu-item/#render-item) example.

_Prior to reaching for this functionality, please consider whether the
desired outcome could be achieved using a simpler means, such as with
Mineral's robust [styling](/styling) and/or [theming](/theming) capabilities._`,
  scope: { renderItem, Select },
  source: `
    () => {
      const data = [
        {
          text: 'Newton',
          value: 'newton',
          avatar: '/images/avatar.svg'
        },
        {
          text: 'Descartes',
          value: 'descartes',
          avatar: '/images/avatar.svg'
        },
        {
          text: 'Euclid',
          value: 'euclid',
          avatar: '/images/avatar.svg'
        }
      ];

      return (
        <Select data={data} renderItem={renderItem} />
      );
    }`
};
