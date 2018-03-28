/* @flow */
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import deepEqual from 'fast-deep-equal';
import { composePropsWithGetter, generateId } from '../utils';
import Root from '../Popover';
import DropdownContent, {
  componentTheme as dropdownContentComponentTheme
} from './DropdownContent';
import ItemMatcher from './ItemMatcher';
import { getItems } from '../Menu/Menu';

import type { Item, Items, ItemGroups } from '../Menu/Menu';

type Props = {
  /** Trigger for the Dropdown */
  children: React$Node,
  /**
   * Open the Dropdown upon initialization. Primarily for use with uncontrolled
   * components.
   */
  defaultIsOpen?: boolean,
  /**
   * Index of item to be highlighted upon initialization. Primarily for
   * use with uncontrolled components.
   */
  defaultHighlightedIndex?: number,
  /** Disable the Dropdown */
  disabled?: boolean,
  /**
   * Data from which the [Menu](/components/menu#data) will be constructed
   * (see [example](#data))
   */
  data: Items | ItemGroups,
  /** @Private Function that returns props to be applied to each item */
  getItemProps?: (props: Object, scope?: Object) => Object,
  /** @Private Function that returns props to be applied to the menu */
  getMenuProps?: (props: Object) => Object,
  /** @Private Function that returns props to be applied to the trigger */
  getTriggerProps?: (props: Object) => Object,
  /** Index of the highlighted item. For use with controlled components. */
  highlightedIndex?: number,
  /** Id of the Dropdown */
  id?: string,
  /** Determines whether the Dropdown is open. For use with controlled components. */
  isOpen?: boolean,
  /**
   * Plugins that are used to alter behavior. See
   * [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers)
   * for options.
   */
  modifiers?: Object,
  /** Called when Dropdown is closed */
  onClose?: (event: SyntheticEvent<>) => void,
  /** Called when Dropdown is opened */
  onOpen?: (event: SyntheticEvent<>) => void,
  /** Placement of the Dropdown menu */
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'left-end'
    | 'left-start'
    | 'right-end'
    | 'right-start'
    | 'top-end'
    | 'top-start',
  /**
   * Use a Portal to render the Dropdown menu to the body rather than as a sibling
   * to the trigger
   */
  usePortal?: boolean,
  /** Display a wider Dropdown menu */
  wide?: boolean
};

type State = {
  highlightedIndex: ?number,
  isOpen?: boolean
};

export const componentTheme = (baseTheme: Object) => ({
  ...dropdownContentComponentTheme(baseTheme),
  ...baseTheme
});

/**
 * Dropdown presents a list of actions after a user interacts with a trigger.
 */
export default class Dropdown extends Component<Props, State> {
  static defaultProps = {
    placement: 'bottom-start'
  };

  state: State = {
    highlightedIndex: this.props.defaultHighlightedIndex,
    isOpen: Boolean(this.props.defaultIsOpen)
  };

  dropdownTrigger: ?React$Component<*, *>;

  id: string = this.props.id || `dropdown-${generateId()}`;

  highlightedItemId: ?string;

  itemMatcher: any;

  items: Items = getItems(this.props.data);

  componentWillReceiveProps(nextProps: Props) {
    if (!deepEqual(this.props.data, nextProps.data)) {
      this.items = getItems(nextProps.data);
    }
  }

  render() {
    const {
      children,
      data,
      modifiers,
      placement,
      wide,
      ...restProps
    } = this.props;
    const isOpen = this.getControllableValue('isOpen');

    const dropdownContentProps = {
      data,
      id: this.getContentId(),
      getItemProps: this.getItemProps,
      getMenuProps: this.getMenuProps,
      modifiers,
      placement,
      wide
    };

    const rootProps = {
      id: this.id,
      ...restProps,
      content: <DropdownContent {...dropdownContentProps} />,
      getTriggerProps: this.getTriggerProps,
      isOpen,
      onClose: this.close,
      onOpen: this.open,
      triggerRef: (node: ?React$Component<*, *>) => {
        this.dropdownTrigger = node;
      },
      wrapContent: false
    };

    return <Root {...rootProps}>{children}</Root>;
  }

  getContentId = () => {
    return `${this.id}-content`;
  };

  getMenuId = () => {
    return `${this.id}-menu`;
  };

  getMenuItemId = (index: string) => {
    return `${this.id}-item-${index}`;
  };

  getTriggerProps = (props: Object = {}) => {
    const contentId = this.getContentId();
    const isOpen = this.getControllableValue('isOpen');

    return composePropsWithGetter(
      {
        // Props set by caller, e.g. Popover
        ...props,

        // Props set by this component
        'aria-activedescendant': isOpen
          ? this.getHighlightedItemId() || this.getMenuId()
          : undefined,
        'aria-describedby': contentId,
        'aria-haspopup': true,
        'aria-owns': contentId,
        onKeyDown: this.onTriggerKeyDown,
        onKeyUp: (event: SyntheticKeyboardEvent<>) => {
          // Prevent Firefox from triggering Popover's onClick handler when
          // space key is used to activate trigger.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=501496
          event.key === ' ' && event.preventDefault();
        }
      },
      // Custom prop getter can override all values
      this.props.getTriggerProps
    );
  };

  getMenuProps = (props: Object = {}) => {
    return composePropsWithGetter(
      {
        // Props set by caller, e.g. DropdownContent
        ...props,

        // Props set by this component
        id: this.getMenuId(),
        role: 'menu'
      },
      // Custom prop getter can override all values
      this.props.getMenuProps
    );
  };

  getItemProps = (props: Object = {}, scope: Object) => {
    const { index, item } = scope;
    const highlightedIndex = this.getControllableValue('highlightedIndex');

    return composePropsWithGetter(
      {
        // Props set by caller, e.g. Menu
        ...props,

        // Props set by this component
        'aria-disabled': props.disabled,
        id: this.getMenuItemId(index),
        isHighlighted: highlightedIndex === index,
        onClick: this.onItemClick.bind(null, item),
        role: 'menuitem',
        tabIndex: null // Unset tabIndex because we use arrow keys to navigate instead
      },
      // Custom prop getter can override all values
      this.props.getItemProps,
      scope
    );
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
    const highlightedItemNode = global.document.getElementById(
      this.getHighlightedItemId()
    );
    const boundary = findDOMNode(this); // eslint-disable-line react/no-find-dom-node

    if (highlightedItemNode && boundary) {
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

  onItemClick = (item: Item, event: SyntheticEvent<>) => {
    const { onClick } = item;

    onClick && onClick(event);
    this.close(event);
    this.focusTrigger();
  };

  focusTrigger = () => {
    const node = findDOMNode(this.dropdownTrigger); // eslint-disable-line react/no-find-dom-node
    if (node && node.firstChild && node.firstChild instanceof HTMLElement) {
      node.firstChild.focus();
    }
  };

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}
