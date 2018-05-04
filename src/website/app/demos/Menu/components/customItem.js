/* @flow */
import React from 'react';
import { withTheme } from '../../../../../library/themes';
import { createStyledComponent, pxToEm } from '../../../../../library/styles';
import Avatar from '../../../../../library/Avatar';
import { componentTheme as menuItemTheme } from '../../../../../library/Menu/MenuItem';

export default function customItem({ props }: Object) {
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
}
