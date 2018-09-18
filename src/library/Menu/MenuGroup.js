/* @flow */
import React from 'react';
import MenuGroupTitle from './MenuGroupTitle';

type Props = {
  /** [MenuItems](/components/menu-item) */
  children?: React$Node,
  /** Title for the group */
  title?: React$Node
};

/**
 * MenuGroups assemble [MenuItems](/components/menu-item) and can display a title.
 * Grouping Menu options provides context clues to users about related actions.
 * An optional title can be added to reinforce the intent of the grouping.
 */
export default function MenuGroup(props: Props) {
  const { children, title, ...restProps } = props;
  return [
    title && (
      <MenuGroupTitle key="MenuGroup" {...restProps}>
        {title}
      </MenuGroupTitle>
    ),
    children
  ];
}
