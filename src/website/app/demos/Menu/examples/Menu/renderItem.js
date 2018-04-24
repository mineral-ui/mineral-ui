/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Menu from '../../../../../../library/Menu';
import renderItem from '../../components/renderItem';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'render-item',
  title: 'Custom Rendering - renderItem',
  backgroundColor: mineralTheme.color_gray_10,
  description: `Use the \`renderItem\`
[render prop](https://reactjs.org/docs/render-props.html) to provide custom
rendering control of all [MenuItems](/components/menu-item) in the Menu.

Additionally, the implementation of \`renderItem\` used in the following
example can be seen in full in
the [MenuItem](/components/menu-item/#render-item) example.

_Prior to reaching for this functionality, please consider whether the
desired outcome could be achieved using a simpler means, such as with
Mineral's robust [styling](/styling) and/or [theming](/theming) capabilities._`,
  scope: { DemoLayout, Menu, renderItem },
  source: `
    () => {
      const data = [
        {
          text: 'Newton',
          avatar: '/images/avatar.svg',
          href: '#newton'
        },
        {
          text: 'Descartes',
          avatar: '/images/avatar.svg',
          href: '#descartes'
        },
        {
          text: 'Euclid',
          avatar: '/images/avatar.svg',
          href: '#euclid'
        }
      ];

      return (
        <DemoLayout>
          <Menu data={data} renderItem={renderItem} itemKey="text" />
        </DemoLayout>
      );
    }`
};
