import React from 'react';
import { withTheme } from 'glamorous';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../../library/styles';
import Avatar from '../../../../../library/Avatar';
import { componentTheme as menuItemTheme } from '../../../../../library/Menu/MenuItem';

import type { RenderItemProps } from '../../../../../library/Menu/Menu';

export default function renderItem({
  item,
  index,
  itemProps
}: RenderItemProps) {
  const CustomItem = withTheme(({ theme: baseTheme }) => {
    const theme = menuItemTheme(baseTheme);
    const { isHighlighted, disabled, ...restProps } = itemProps;
    const element = item.href ? 'a' : 'div';

    const Root = createStyledComponent(
      element,
      {
        backgroundColor: isHighlighted && theme.color_theme_20,
        display: 'flex',
        padding:
          theme.MenuItem_paddingVertical +
          ' ' +
          theme.MenuItem_paddingHorizontal,
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

    const UserAvatar = createStyledComponent(Avatar, {
      display: 'block',
      flex: '0 0 auto',
      height: pxToEm(32),
      marginLeft: theme.direction === 'rtl' && theme.MenuItemIcon_margin,
      marginRight: theme.direction === 'ltr' && theme.MenuItemIcon_margin,
      width: pxToEm(32)
    });

    const Content = createStyledComponent('span', function() {
      const fontSize = theme.MenuItemContent_fontSize;
      const paddingVertical = getNormalizedValue(pxToEm(7), fontSize);

      return {
        flex: '1 1 auto',
        fontSize,
        padding: paddingVertical + ' 0',
        whiteSpace: 'normal',
        wordBreak: 'break-all'
      };
    });

    const rootProps = {
      disabled,
      ...restProps
    };

    return (
      <Root {...rootProps}>
        {item.avatar && (
          <UserAvatar>
            <img src={item.avatar} alt={item.text} />
          </UserAvatar>
        )}
        <Content>{item.text}</Content>
      </Root>
    );
  });

  return <CustomItem key={index} />;
}
