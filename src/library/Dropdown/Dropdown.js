/* @flow */
import React, { Children, Component, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import deepEqual from 'fast-deep-equal';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import { composeEventHandlers, generateId, isRenderProp } from '../utils';
import Menu, { getItems } from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Root from '../Popover';
import DropdownContent, {
  componentTheme as dropdownContentComponentTheme
} from './DropdownContent';
import ItemMatcher from './ItemMatcher';

import type { Items, ItemGroups } from '../Menu/Menu';

type Props = {
  /**
   * Trigger for the Dropdown. Optionally provides custom rendering control.
   * See the [custom trigger example](/components/dropdown#custom-trigger)
   * and [React docs](https://reactjs.org/docs/render-props.html).
   */
  children: React$Node | RenderFn,
  /**
   * Data from which the [Menu](/components/menu#data) will be constructed
   * (see [example](#data))
   */
  data: Items | ItemGroups,
  /**
   * Index of item to be highlighted upon initialization. Primarily for
   * use with uncontrolled components.
   */
  defaultHighlightedIndex?: number,
  /**
   * Open the Dropdown upon initialization. Primarily for use with uncontrolled
   * components.
   */
  defaultIsOpen?: boolean,
  /** Disable the Dropdown */
  disabled?: boolean,
  /** Index of the highlighted item. For use with controlled components. */
  highlightedIndex?: number,
  /** Id of the Dropdown */
  id?: string,
  /**
   * Determines whether the Dropdown is open. For use with controlled
   * components.
   */
  isOpen?: boolean,
  /**
   * Provides custom rendering control for the items. See the
   * [custom item example](/components/dropdown#custom-item) and
   * [React docs](https://reactjs.org/docs/render-props.html).
   */
  item?: RenderFn,
  /**
   * Specifies a key in the item data that gives an item its unique identity.
   * See the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).
   */
  itemKey?: string,
  /**
   * Provides custom rendering control for the menu. See the
   * [custom menu example](/components/dropdown#custom-menu) and
   * [React docs](https://reactjs.org/docs/render-props.html).
   */
  menu?: RenderFn,
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
   * Use a Portal to render the Dropdown menu to the body rather than as a
   * sibling to the trigger
   */
  usePortal?: boolean,
  /** Display a wider Dropdown menu */
  wide?: boolean
};

type State = {
  highlightedIndex: ?number,
  isOpen: boolean
};

type Helpers = {
  close: (event: SyntheticEvent<>) => void,
  focusTrigger: () => void,
  open: (event: SyntheticEvent<>) => void
};

type StateAndHelpers = {
  state: State,
  helpers: Helpers
};

type PropGetter = (props?: Object) => Object;
export type RenderFn = (props?: RenderProps) => React$Node;
type RenderProps = {
  props: Object
} & StateAndHelpers;

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

  highlightedItemId: ?string;

  id: string = this.props.id || `dropdown-${generateId()}`;

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
      data: ignoreData,
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

    return (
      <Root {...rootProps}>
        {isRenderProp(children) ? this.renderTrigger : this.renderTrigger()}
      </Root>
    );
  }

  getStateAndHelpers = (): StateAndHelpers => {
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

  setTriggerRef = (node: ?React$Component<*, *>) => {
    this.dropdownTrigger = node;
  };

  getContentProps: PropGetter = (props = {}) => {
    const {
      subtitle: ignoreSubtitle,
      title: ignoreTitle,
      tabIndex: ignoreTabIndex,
      ...restProps
    } = props;
    const { modifiers, placement, wide } = this.props;

    return {
      ...restProps,
      children: this.renderMenu(),
      id: this.getContentId(),
      modifiers,
      placement,
      wide
    };
  };

  renderContent: RenderFn = ({ props } = {}) => {
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

  getTriggerProps: PropGetter = (props = {}) => {
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
      ...(!isRenderProp(children) ? props : {}),
      onKeyDown: composeEventHandlers(props.onKeyDown, this.onTriggerKeyDown),
      onKeyUp: composeEventHandlers(props.onKeyUp, this.onTriggerKeyUp)
    };
  };

  renderTrigger: RenderFn = ({ props } = {}) => {
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

  getMenuProps: PropGetter = (props = {}) => {
    const { data, itemKey } = this.props;

    return {
      ...props,
      id: this.getMenuId(),
      itemKey,
      data,
      item: this.renderItem,
      role: 'menu'
    };
  };

  renderMenu: RenderFn = ({ props } = {}) => {
    const { menu } = this.props;

    if (isRenderProp(menu)) {
      return menu({
        ...this.getStateAndHelpers(),
        props: this.getMenuProps(props)
      });
    }

    return <Menu {...this.getMenuProps(props)} />;
  };

  getItemProps: PropGetter = (props = {}) => {
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

  renderItem: RenderFn = (props = {}) => {
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
