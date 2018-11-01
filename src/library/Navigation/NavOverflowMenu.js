/* @flow */
import React from 'react';
import composeEventHandlers from '../utils/composeEventHandlers';
import Dropdown from '../Dropdown';
import IconArrowDropdownDown from '../Icon/IconArrowDropdownDown';
import { MenuItem } from '../Menu';
import NavItem from './NavItem';

import type { MenuItemRenderProps } from '../Menu/types';
import type {
  GetDropdownData,
  GetDropdownItem,
  NavOverflowMenuDefaultProps,
  NavOverflowMenuProps
} from './types';

const getDropdownData: GetDropdownData = ({ data, onClick, startingIndex }) =>
  data.map(({ disabled, icon, onClick: itemOnClick, ...item }, index) => ({
    ...item,
    disabled,
    iconStart: icon,
    ...(!disabled
      ? {
          onClick: composeEventHandlers(itemOnClick, (event) => {
            onClick(event, startingIndex + index);
          })
        }
      : undefined)
  }));

// eslint-disable-next-line react/display-name
const getDropdownItem: GetDropdownItem = (itemElement) => (
  props: ?MenuItemRenderProps
) => {
  const common = {
    /*
     * MenuItem strips `onClick` from  disabled items, so we can't render an `a`
     * with an `href` and then preventDefault (like we do for items directly in
     * Navigation). Instead, we force a `span` element.
     */
    element:
      itemElement === NavOverflowMenu.defaultProps.itemElement &&
      props &&
      props.props &&
      props.props.disabled
        ? 'span'
        : itemElement,
    role: null,
    tabIndex: -1
  };
  const itemProps = props ? { ...props.props, ...common } : common;
  return <MenuItem {...itemProps} />;
};

const NavOverflowMenu = (props: NavOverflowMenuProps) => {
  const { data, index, itemElement, onClick, prefix, messages, type } = props;

  const rootProps = {
    data: getDropdownData({
      data,
      onClick,
      startingIndex: index
    }),
    item: getDropdownItem(itemElement)
  };
  const triggerProps = {
    'aria-label': messages.moreLabel,
    children: messages.moreText,
    element: 'button',
    iconEnd: <IconArrowDropdownDown />,
    prefix,
    type
  };

  return (
    <Dropdown {...rootProps}>
      <NavItem {...triggerProps} />
    </Dropdown>
  );
};

NavOverflowMenu.displayName = 'NavOverflowMenu';

const defaultProps: NavOverflowMenuDefaultProps = {
  itemElement: NavItem.defaultProps.element
};

NavOverflowMenu.defaultProps = defaultProps;

export default NavOverflowMenu;
