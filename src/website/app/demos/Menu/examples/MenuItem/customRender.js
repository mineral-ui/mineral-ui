/* @flow */
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../../../library/styles';
import { mineralTheme } from '../../../../../../library/themes';
import Menu, { MenuItem } from '../../../../../../library/Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'custom-render',
  title: 'Custom Rendering',
  backgroundColor: mineralTheme.color_gray_10,
  description: `MenuItem can use a custom function for its rendering. This
allows you to render any item data you might need (like an avatar, below). To
help match the other MenuItems, you have access to its
[theme variables](#theme-variables). The \`CustomRender\` component source below
might be a helpful template. Some things to keep in mind:

1. Remember to include \`:focus\`, \`:hover\`, and \`:active\` styles.
  - If this is to be used for a [Dropdown](/components/dropdown), also apply your
     focus/hover styles when \`props.isHighlighted === true\`.
1. Remember to accommodate the disabled state (\`props.disabled === true\`).
1. If your app supports RTL languages, you can use \`theme.direction\` to
   conditionally apply the necessary styles.`,
  scope: {
    createStyledComponent,
    DemoLayout,
    getNormalizedValue,
    Menu,
    MenuItem,
    pxToEm
  },
  source: `
    () => {
      function CustomRender(item, props, theme) {
        const { isHighlighted, disabled } = props;

        const Root = createStyledComponent(
          'div',
          {
            backgroundColor: isHighlighted && theme.color_theme_20,
            display: 'flex',
            padding: theme.MenuItem_paddingVertical + ' ' + theme.MenuItem_paddingHorizontal,
            textDecoration: 'none',

            '&:focus': {
              backgroundColor: !disabled && theme.color_theme_20,
              outline: 0
            },

            '&:hover': {
              backgroundColor: !disabled && theme.color_theme_20
            },

            '&:active': {
              backgroundColor: !disabled && theme.color_theme_40
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
        const Avatar = createStyledComponent('img', {
          borderRadius: pxToEm(18),
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

        const rootProps = {
          disabled,
          ...props
        };

        return (
          <Root {...rootProps}>
            {item.avatar && <Avatar alt={'Photo of ' + item.username} src={item.avatar} />}
            <Content>
              {item.username}
              {item.work && <Work>{item.work}</Work>}
            </Content>
          </Root>
        );
      }

      const data = [
        {
          items: [
            {
              username: 'Newton',
              avatar: '/images/avatar.svg',
              work: 'Principia Mathematica',
              render: CustomRender
            },
            {
              username: 'Descartes',
              avatar: '/images/avatar.svg',
              work: 'La Géométrie',
              render: CustomRender
            },
            {
              username: 'Euclid',
              avatar: '/images/avatar.svg',
              work: 'Elements',
              render: CustomRender
            }
          ]
        }
      ];

      return (
        <DemoLayout>
          <Menu data={data} />
        </DemoLayout>
      )
    }`
};
