/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import MenuGroupTitle from './MenuGroupTitle';

type Props = {
  /** [MenuItems](/components/menu-item) */
  children?: React$Node,
  /** Title for the group */
  title?: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  MenuGroup_margin: baseTheme.space_stack_sm,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  (props) => {
    const theme = componentTheme(props.theme);

    return {
      margin: `${theme.MenuGroup_margin} 0`,
      '&:first-child,& + &': {
        marginTop: 0
      },

      '&:last-child': {
        marginBottom: 0
      }
    };
  },
  {
    displayName: 'MenuGroup'
  }
);

/**
 * MenuGroups assemble [MenuItems](/components/menu-item) and can display a title.
 * Grouping Menu options provides context clues to users about related actions.
 * An optional title can be added to reinforce the intent of the grouping.
 */
export default function MenuGroup({ children, title, ...restProps }: Props) {
  return (
    <Root {...restProps}>
      {title && <MenuGroupTitle>{title}</MenuGroupTitle>}
      {children}
    </Root>
  );
}
