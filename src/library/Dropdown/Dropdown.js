/* @flow */
import React, { Children, Component, cloneElement } from 'react';
import deepEqual from 'react-fast-compare';
import memoizeOne from 'memoize-one';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import { composeEventHandlers, generateId, isRenderProp } from '../utils';
import Menu, { getItems } from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Root from '../Popover';
import { PLACEMENT } from './constants';
import DropdownContent from './DropdownContent';
import ItemMatcher from './ItemMatcher';

import type { MenuItems } from '../Menu/types';
import { dropdownPropTypes } from './propTypes';
import type {
  DropdownDefaultProps,
  DropdownPropGetter,
  DropdownProps,
  DropdownRenderFn,
  DropdownStateAndHelpers,
  DropdownState
} from './types';

export default class Dropdown extends Component<DropdownProps, DropdownState> {
  static displayName = 'Dropdown';

  static defaultProps: DropdownDefaultProps = {
    itemKey: 'text',
    placement: PLACEMENT['bottom-start']
  };

  static propTypes = dropdownPropTypes;

  state = {
    highlightedIndex: this.props.defaultHighlightedIndex,
    isOpen: Boolean(this.props.defaultIsOpen)
  };

  dropdownTrigger: ?HTMLElement;

  highlightedItemId: ?string;

  id: string = this.props.id || `dropdown-${generateId()}`;

  itemMatcher: any;

  items: MenuItems;

  getItems = memoizeOne(getItems, deepEqual);

  render() {
    const {
      children,
      data,
      item: ignoreItem,
      menu: ignoreMenu,
      ...restProps
    } = this.props;
    const isOpen = this.getControllableValue('isOpen');

    const rootProps = {
      ...restProps,
      id: this.id,
      isOpen,
      onClose: this.close,
      onOpen: this.open,
      content: this.renderContent,
      triggerRef: this.setTriggerRef
    };

    this.items = this.getItems(data);

    return (
      <Root {...rootProps}>
        {isRenderProp(children) ? this.renderTrigger : this.renderTrigger()}
      </Root>
    );
  }

  getStateAndHelpers = (): DropdownStateAndHelpers => {
    return {
      state: {
        highlightedIndex: this.getControllableValue('highlightedIndex'),
        isOpen: this.getControllableValue('isOpen')
      },
      helpers: {
        close: this.close,
        focusTrigger: this.focusTrigger,
        open: this.open
      }
    };
  };

  setTriggerRef = (node: ?HTMLElement) => {
    this.dropdownTrigger = node;
  };

  getContentProps: DropdownPropGetter = (props = {}) => {
    const {
      subtitle: ignoreSubtitle,
      title: ignoreTitle,
      tabIndex: ignoreTabIndex,
      ...restProps
    } = props;
    const { modifiers, placement, positionFixed, wide } = this.props;

    return {
      ...restProps,
      children: this.renderMenu(),
      id: this.getContentId(),
      modifiers,
      placement,
      positionFixed,
      wide
    };
  };

  renderContent: DropdownRenderFn = ({ props } = {}) => {
    return <DropdownContent {...this.getContentProps(props)} />;
  };

  getContentId = () => {
    return `${this.id}-content`;
  };

  getMenuId = () => {
    return `${this.id}-menu`;
  };

  getMenuItemId = (index: string | number) => {
    return `${this.id}-item-${index}`;
  };

  getTriggerProps: DropdownPropGetter = (props = {}) => {
    const isOpen = this.getControllableValue('isOpen');
    const contentId = this.getContentId();
    const { children } = this.props;

    return {
      ...(isRenderProp(children) ? props : {}),
      ...(isOpen
        ? {
            'aria-activedescendant':
              this.getHighlightedItemId() || this.getMenuId()
          }
        : {}),
      'aria-describedby': contentId,
      'aria-haspopup': true,
      'aria-owns': contentId,
      id: contentId,
      ...(!isRenderProp(children) ? props : {}),
      onKeyDown: composeEventHandlers(props.onKeyDown, this.onTriggerKeyDown),
      onKeyUp: composeEventHandlers(props.onKeyUp, this.onTriggerKeyUp)
    };
  };

  renderTrigger: DropdownRenderFn = ({ props } = {}) => {
    const { children } = this.props;

    if (isRenderProp(children)) {
      return children({
        ...this.getStateAndHelpers(),
        props: this.getTriggerProps(props)
      });
    }

    const child = Children.only(children);
    return cloneElement(child, this.getTriggerProps(child.props));
  };

  getMenuProps: DropdownPropGetter = (props = {}) => {
    const { data, itemKey } = this.props;

    return {
      ...props,
      id: this.getMenuId(),
      itemKey,
      data,
      highlightedIndex: this.getControllableValue('highlightedIndex'),
      item: this.renderItem,
      role: 'menu'
    };
  };

  renderMenu: DropdownRenderFn = ({ props } = {}) => {
    const { menu } = this.props;

    if (isRenderProp(menu)) {
      return menu({
        ...this.getStateAndHelpers(),
        props: this.getMenuProps(props)
      });
    }

    return <Menu {...this.getMenuProps(props)} />;
  };

  getItemProps: DropdownPropGetter = (props = {}) => {
    const highlightedIndex = this.getControllableValue('highlightedIndex');
    const { props: itemProps } = props;
    const { index, item } = itemProps;

    return {
      ...itemProps,
      ...item,
      'aria-disabled': this.props.disabled || item.disabled,
      children: item.text,
      id: this.getMenuItemId(index),
      isHighlighted: highlightedIndex === index,
      role: 'menuitem',
      tabIndex: null, // Unset tabIndex because we use arrow keys to navigate instead
      onClick: composeEventHandlers(item.onClick, this.onItemClick)
    };
  };

  renderItem: DropdownRenderFn = (props = {}) => {
    const { item } = this.props;

    if (isRenderProp(item)) {
      return item({
        ...props,
        ...this.getStateAndHelpers(),
        props: this.getItemProps(props)
      });
    }

    return <MenuItem {...this.getItemProps(props)} />;
  };

  getHighlightedItemId = () => {
    const highlightedIndex = this.getControllableValue('highlightedIndex');
    return highlightedIndex !== undefined && highlightedIndex !== null
      ? this.getMenuItemId(highlightedIndex)
      : undefined;
  };

  hasHighlightedIndex = () => {
    return this.getControllableValue('highlightedIndex') != undefined;
  };

  onTriggerKeyUp = (event: SyntheticKeyboardEvent<>) => {
    // Prevent Firefox from triggering Popover's onClick handler when
    // space key is used to activate trigger.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=501496
    event.key === ' ' && event.preventDefault();
  };

  onTriggerKeyDown = (event: SyntheticKeyboardEvent<>) => {
    const { key } = event;
    const isOpen = this.getControllableValue('isOpen');

    if (key === 'ArrowUp') {
      event.preventDefault();
      this.highlightPreviousItem();
      !isOpen && this.open(event);
    } else if (key === 'ArrowDown') {
      event.preventDefault();
      this.highlightNextItem();
      !isOpen && this.open(event);
    } else if (key === 'Home' && isOpen) {
      event.preventDefault();
      this.highlightItemAtIndex(0);
    } else if (key === 'End' && isOpen) {
      event.preventDefault();
      this.highlightItemAtIndex(this.items.length - 1);
    } else if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      isOpen
        ? this.hasHighlightedIndex()
          ? this.clickHighlightedItem()
          : this.close(event)
        : this.open(event);
    } else if (isOpen) {
      this.highlightItemMatchingKey(key);
    }
  };

  findItemMatchingKey = (key: string) => {
    this.itemMatcher = this.itemMatcher || new ItemMatcher();
    return this.itemMatcher.findMatchingItem(
      this.items,
      this.getControllableValue('highlightedIndex'),
      key
    );
  };

  highlightItemMatchingKey = (key: string) => {
    const matchingItem = this.findItemMatchingKey(key);
    matchingItem && this.highlightItemAtIndex(this.items.indexOf(matchingItem));
  };

  highlightItemAtIndex = (index: number) => {
    if (!this.isControlled('highlightedIndex')) {
      this.setState(
        { highlightedIndex: index },
        this.scrollHighlightedItemIntoViewIfNeeded
      );
    }
  };

  highlightNextItem = () => {
    if (!this.isControlled('highlightedIndex')) {
      this.setState(
        (prevState) => ({
          highlightedIndex:
            prevState.highlightedIndex === null ||
            prevState.highlightedIndex === undefined ||
            prevState.highlightedIndex === this.items.length - 1
              ? 0
              : prevState.highlightedIndex + 1
        }),
        this.scrollHighlightedItemIntoViewIfNeeded
      );
    }
  };

  highlightPreviousItem = () => {
    if (!this.isControlled('highlightedIndex')) {
      this.setState(
        (prevState) => ({
          highlightedIndex: !prevState.highlightedIndex
            ? this.items.length - 1
            : prevState.highlightedIndex - 1
        }),
        this.scrollHighlightedItemIntoViewIfNeeded
      );
    }
  };

  scrollHighlightedItemIntoViewIfNeeded = () => {
    const boundary = global.document.getElementById(this.getContentId());
    const highlightedItemNode =
      boundary && global.document.getElementById(this.getHighlightedItemId());

    if (highlightedItemNode) {
      scrollIntoViewIfNeeded(highlightedItemNode, { boundary });
    }
  };

  clickHighlightedItem = () => {
    const highlightedItemNode = global.document.getElementById(
      this.getHighlightedItemId()
    );
    highlightedItemNode && highlightedItemNode.click();
  };

  open = (event: SyntheticEvent<>) => {
    if (this.isControlled('isOpen')) {
      this.openActions(event);
    } else {
      this.setState(
        () => ({ isOpen: true }),
        () => {
          this.openActions(event);
        }
      );
    }
  };

  openActions = (event: SyntheticEvent<>) => {
    this.scrollHighlightedItemIntoViewIfNeeded();
    this.props.onOpen && this.props.onOpen(event);
  };

  close = (event: SyntheticEvent<>) => {
    if (!this.isControlled('highlightedIndex')) {
      this.setState({ highlightedIndex: null });
    }

    if (this.isControlled('isOpen')) {
      this.closeActions(event);
    } else {
      this.setState(
        () => ({ isOpen: false }),
        () => {
          this.closeActions(event);
        }
      );
    }
  };

  closeActions = (event: SyntheticEvent<>) => {
    this.props.onClose && this.props.onClose(event);
  };

  onItemClick = (event: SyntheticEvent<>) => {
    this.close(event);
    this.focusTrigger();
  };

  focusTrigger = () => {
    const node = this.dropdownTrigger;

    if (!node) {
      return;
    }

    const element =
      node instanceof HTMLButtonElement ||
      node.getAttribute('role') === 'button'
        ? node
        : node.firstChild instanceof HTMLElement
        ? node.firstChild
        : null;

    element && element.focus();
  };

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}
