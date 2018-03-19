/* @flow */
import React from 'react';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../../library/styles';

export default function customRender(
  item: Object,
  props: Object,
  theme: Object
) {
  const { isHighlighted, disabled, ...restProps } = props; // eslint-disable-line react/prop-types

  const Root = createStyledComponent(
    'a',
    {
      backgroundColor: isHighlighted && theme.color_theme_20,
      display: 'flex',
      padding:
        theme.MenuItem_paddingVertical + ' ' + theme.MenuItem_paddingHorizontal,
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
  const Avatar = createStyledComponent('img', {
    borderRadius: pxToEm(16),
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
    tabIndex: 0,
    ...restProps
  };

  return (
    <Root {...rootProps}>
      {item.avatar && (
        <Avatar alt={`Photo of ${item.text}`} src={item.avatar} />
      )}
      <Content>{item.text}</Content>
    </Root>
  );
}
