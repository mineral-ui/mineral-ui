/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';

type Props = Object;

export const componentTheme = (baseTheme: Object) => ({
  MenuDivider_borderColor: baseTheme.borderColor,
  MenuDivider_borderWidth: '1px',
  MenuDivider_margin: baseTheme.space_stack_sm,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  (props) => {
    const theme = componentTheme(props.theme);

    return {
      backgroundColor: theme.MenuDivider_borderColor,
      height: theme.MenuDivider_borderWidth,
      margin: `${theme.MenuDivider_margin} 0`
    };
  },
  {
    displayName: 'MenuDivider'
  }
);

/**
 * MenuDividers separate [MenuItems](/components/menu-item) and [MenuGroups](/components/menu-group) to establish hierarchy in a [Menu](/components/menu) with several options.
 *
 * MenuDividers are not merely design elements to visually separate options.
 * Rather, the are a way to logically group choices.
 * Too many dividers will add unnecessary weight to your Menu.
 */
export default function MenuDivider(props: Props) {
  return <Root {...props} role="separator" />;
}
