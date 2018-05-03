/* @flow */
import {
  createStyledComponent,
  pxToEm
} from '../../../../../../library/styles';
import { mineralTheme, withTheme } from '../../../../../../library/themes';
import Menu, { MenuItem } from '../../../../../../library/Menu';
import Avatar from '../../../../../../library/Avatar';
import DemoLayout from '../../components/DemoLayout';
import { componentTheme as menuItemTheme } from '../../../../../../library/Menu/MenuItem';
import renderPropDescription from '../../../shared/renderPropDescription';

export default {
  id: 'custom-item',
  title: 'Custom Item',
  backgroundColor: mineralTheme.color_gray_10,
  description: `Use the \`item\`
[render prop](https://reactjs.org/docs/render-props.html) to provide custom
rendering control of all [MenuItems](/components/menu-item) in the Menu.

${renderPropDescription}

Some things to keep in mind:

1. Remember to include \`:focus\`, \`:hover\`, and \`:active\` styles.
  - If this is to be used for a [Dropdown](/components/dropdown), also apply your
     focus/hover styles when \`props.isHighlighted === true\`.
1. Remember to accommodate the disabled state (\`props.disabled === true\`).
1. If your app supports RTL languages, you can use \`theme.direction\` to
   conditionally apply the necessary styles.`,
  scope: {
    Avatar,
    createStyledComponent,
    DemoLayout,
    Menu,
    MenuItem,
    menuItemTheme,
    pxToEm,
    withTheme
  },
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

      /**
       * If you wish to use theme variables in your function, you must either use
       * createStyledComponent or the withTheme HOC, (higher order component),
       * which provides the base theme as a prop.
       *   import { withTheme } from 'mineral-ui/themes';
       *
       * If you wish to access a component specific theme, you'll need to import
       * it and compose it with the base theme as shown below.
       *   import { componentTheme as menuItemTheme } from 'mineral-ui/Menu/MenuItem';
       */
      const item = ({ props }) => {
        const CustomItem = withTheme(({ theme: baseTheme }) => {
          const theme = menuItemTheme(baseTheme);
          const { item } = props;

          const Root = createStyledComponent(
            'div',
            {
              backgroundColor: props.isHighlighted && theme.color_theme_20,
              display: 'flex',
              padding:
                theme.MenuItem_paddingVertical +
                ' ' +
                theme.MenuItem_paddingHorizontal,
              textDecoration: 'none',

              '&:focus': {
                backgroundColor: !props.disabled && theme.color_theme_20,
                outline: 0
              },

              '&:hover': {
                backgroundColor: !props.disabled && theme.color_theme_20
              },

              '&:active': {
                backgroundColor: !props.disabled && theme.color_theme_40
              }
            },
            {
              includeStyleReset: true
            }
          );

          const Work = createStyledComponent('span', {
            color: theme.color_mouse,
            display: 'block',
            fontSize: theme.fontSize_mouse,
            marginTop: theme.space_stack_xs
          });

          const UserAvatar = createStyledComponent(Avatar, {
            display: 'block',
            flex: '0 0 auto',
            height: pxToEm(36),
            marginLeft: theme.direction === 'rtl' && theme.MenuItemIcon_margin,
            marginRight: theme.direction === 'ltr' && theme.MenuItemIcon_margin,
            width: pxToEm(36)
          });

          const Content = createStyledComponent('span', {
            flex: '1 1 auto',
            fontSize: theme.MenuItemContent_fontSize,
            whiteSpace: 'normal',
            wordBreak: 'break-all'
          });

          return (
            <Root {...props}>
              {item.avatar && (
                <UserAvatar>
                  <img src={item.avatar} alt={item.text} />
                </UserAvatar>
              )}
              <Content>
                {item.text}
                {item.work && <Work>{item.work}</Work>}
              </Content>
            </Root>
          );
        });

        return <CustomItem />;
      };

      return (
        <DemoLayout>
          <Menu data={data} item={item} itemKey="username" />
        </DemoLayout>
      );
    };
  `
};
