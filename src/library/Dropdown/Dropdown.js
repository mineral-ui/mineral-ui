/* @flow */
import React, { Children, Component, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import deepEqual from 'fast-deep-equal';
import { composeEventHandlers, generateId } from '../utils';
import Root from '../Popover';
import DropdownContent, {
  componentTheme as dropdownContentComponentTheme
} from './DropdownContent';
import ItemMatcher from './ItemMatcher';
import Menu, { getItems } from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

import type { Item, Items, ItemGroups } from '../Menu/Menu';

type Props = {
  /** Trigger for the Dropdown */
  children?: React$Node,
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
  /** Index of the highlighted item. For use with controlled components. */
  highlightedIndex?: number,
  /** Id of the Dropdown */
  id?: string,
  /** Determines whether the Dropdown is open. For use with controlled components. */
  isOpen?: boolean,
  /**
   * Specifies a key in the item data that gives an item its unique identity. See
   * the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).
   */
  itemKey?: string,
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
  /** Provides custom rendering control for the items. See the [render item example](/components/dropdown#render-item) and [React docs](https://reactjs.org/docs/render-props.html). */
  renderItem?: RenderItem,
  /** Provides custom rendering control for the menu. See the [render trigger example](/components/dropdown#render-menu) and [React docs](https://reactjs.org/docs/render-props.html). */
  renderMenu?: RenderMenu,
  /** Provides custom rendering control for the trigger. See the [render trigger example](/components/dropdown#render-trigger) and [React docs](https://reactjs.org/docs/render-props.html). */
  renderTrigger?: RenderTrigger,
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
  isOpen: boolean
};

type PropGetter = (props?: Object) => Object;

export type RenderItem = (props: RenderItemProps) => React$Node;
export type RenderItemProps = {
  index: number,
  item: Item,
  itemProps: Object
} & StateAndHelpers;

export type RenderMenu = (props: RenderMenuProps) => React$Node;
export type RenderMenuProps = { menuProps: Object } & StateAndHelpers;

export type RenderTrigger = (props: RenderTriggerProps) => React$Node;
export type RenderTriggerProps = { triggerProps: Object } & StateAndHelpers;

type Helpers = {
  close: (event: SyntheticEvent<>) => void,
  focusTrigger: () => void,
  open: (event: SyntheticEvent<>) => void
};

type StateAndHelpers = State & Helpers;

export const componentTheme = (baseTheme: Object) => ({
  ...dropdownContentComponentTheme(baseTheme),
  ...baseTheme
});

/**
 * Dropdown presents a list of actions after a user interacts with a trigger.
 */
export default class Dropdown extends Component<Props, State> {
  static defaultProps = {
    itemKey: 'text',
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
    const isOpen = this.getControllableValue('isOpen');
    const { renderTrigger } = this.props;

    const rootProps = {
      ...this.props,
      id: this.id,
      isOpen,
      onClose: this.close,
      onOpen: this.open,
      renderContent: this.renderContent,
      renderTrigger: renderTrigger ? this.renderTrigger : undefined,
      triggerRef: this.setTriggerRef
    };

    return <Root {...rootProps}>{!renderTrigger && this.renderTrigger()}</Root>;
  }

  getStateAndHelpers = (): StateAndHelpers => {
    return {
      // Derived
      id: this.id,

      // State
      highlightedIndex: this.getControllableValue('highlightedIndex'),
      isOpen: this.getControllableValue('isOpen'),

      // Helpers
      close: this.close,
      focusTrigger: this.focusTrigger,
      open: this.open
    };
  };

  setTriggerRef = (node: ?React$Component<*, *>) => {
    this.dropdownTrigger = node;
  };

  getContentProps: PropGetter = (_props = {}) => {
    const { subtitle: ignoreSubtitle, title: ignoreTitle, ...props } = _props;
    const { modifiers, placement, wide } = this.props;

    return {
      ...props,
      children: this.renderMenu(),
      id: this.getContentId(),
      modifiers,
      placement,
      wide
    };
  };

  renderContent = ({ contentProps }: Object = {}) => {
    return <DropdownContent {...this.getContentProps(contentProps)} />;
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

  getTriggerProps: PropGetter = (props = {}) => {
    const isOpen = this.getControllableValue('isOpen');
    const contentId = this.getContentId();

    return {
      ...props,
      'aria-activedescendant': isOpen
        ? this.getHighlightedItemId() || this.getMenuId()
        : undefined,
      'aria-describedby': contentId,
      'aria-haspopup': true,
      'aria-owns': contentId,
      onKeyDown: composeEventHandlers(props.onKeyDown, this.onTriggerKeyDown),
      onKeyUp: composeEventHandlers(props.onKeyUp, this.onTriggerKeyUp)
    };
  };

  renderTrigger = ({ triggerProps }: Object = {}) => {
    const { children, renderTrigger } = this.props;

    if (renderTrigger) {
      return renderTrigger({
        ...this.getStateAndHelpers(),
        triggerProps: this.getTriggerProps(triggerProps)
      });
    }

    const child = Children.only(children);
    return cloneElement(child, this.getTriggerProps(child.props));
  };

  getMenuProps: PropGetter = (props = {}) => {
    const { data, itemKey } = this.props;

    return {
      ...props,
      id: this.getMenuId(),
      itemKey,
      data,
      renderItem: this.renderItem,
      role: 'menu'
    };
  };

  renderMenu = ({ menuProps }: Object = {}) => {
    const { renderMenu } = this.props;

    if (renderMenu) {
      return renderMenu({
        ...this.getStateAndHelpers(),
        menuProps: this.getMenuProps(menuProps)
      });
    }

    return <Menu {...this.getMenuProps(menuProps)} />;
  };

  getItemProps: PropGetter = (props = {}) => {
    const highlightedIndex = this.getControllableValue('highlightedIndex');
    const { itemProps, index, item } = props;

    return {
      ...itemProps,
      ...item,
      'aria-disabled': this.props.disabled || item.disabled,
      children: item.text,
      id: this.getMenuItemId(index),
      isHighlighted: highlightedIndex === index,
      role: 'menuitem',
      render: undefined, // Prevent recursion
      tabIndex: null, // Unset tabIndex because we use arrow keys to navigate instead
      onClick: composeEventHandlers(item.onClick, this.onItemClick)
    };
  };

  renderItem = (props: Object = {}) => {
    const { renderItem } = this.props;

    if (renderItem) {
      return renderItem({
        ...props,
        ...this.getStateAndHelpers(),
        itemProps: this.getItemProps(props)
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

  onItemClick = (event: SyntheticEvent<>) => {
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
