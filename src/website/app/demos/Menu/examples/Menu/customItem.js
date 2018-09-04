/* @flow */
import React from 'react';
import {
  createStyledComponent,
  pxToEm
} from '../../../../../../library/styles';
import { mineralTheme } from '../../../../../../library/themes';
import Menu, { MenuItem } from '../../../../../../library/Menu';
import Avatar from '../../../../../../library/Avatar';
import DemoLayout from '../../components/DemoLayout';
import renderPropsDescription from '../../../shared/renderPropsDescription';

export default {
  id: 'custom-item',
  title: 'Custom Item',
  backgroundColor: mineralTheme.color_gray_10,
  description: `Use the \`item\` render prop to provide custom rendering control
of all [MenuItems](/components/menu-item) in the Menu.
${renderPropsDescription}`,
  scope: {
    Avatar,
    createStyledComponent,
    DemoLayout,
    Menu,
    MenuItem,
    pxToEm,
    React
  },
  source: `
    () => {
      const Div = createStyledComponent(
        'div',
        ({ disabled, isHighlighted, theme }) => ({
          backgroundColor: isHighlighted && theme.color_theme_20,
          display: 'flex',
          padding: theme.space_inset_sm + ' ' + theme.space_inset_md,
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
        }),
        {
          includeStyleReset: true
        }
      );

      const Work = createStyledComponent('span', ({ theme }) => ({
        color: theme.color_mouse,
        display: 'block',
        fontSize: theme.fontSize_mouse,
        marginTop: theme.space_stack_xs
      }));

      const UserAvatar = createStyledComponent(Avatar, ({ theme }) => ({
        display: 'block',
        flex: '0 0 auto',
        height: pxToEm(36),
        marginLeft: theme.direction === 'rtl' && theme.space_inset_sm,
        marginRight: theme.direction === 'ltr' && theme.space_inset_sm,
        width: pxToEm(36)
      }));

      const Content = createStyledComponent('span', ({ theme }) => ({
        flex: '1 1 auto',
        fontSize: theme.fontSize_ui,
        whiteSpace: 'normal',
        wordBreak: 'break-all'
      }));

      class CustomItem extends React.PureComponent {
        render() {
          const { item } = this.props;
          return(
            <Div {...this.props}>
              {item.avatar && (
                <UserAvatar>
                  <img src={item.avatar} alt={item.text} />
                </UserAvatar>
              )}
              <Content>
                {item.text}
                {item.work && <Work>{item.work}</Work>}
              </Content>
            </Div>
          );
        }
      }

      const item = ({ props }) => <CustomItem {...props} />;

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
        <DemoLayout>
          <Menu data={data} item={item} itemKey="text" />
        </DemoLayout>
      );
    };
  `
};
