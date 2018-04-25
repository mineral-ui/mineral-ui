/* @flow */
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import deepEqual from 'fast-deep-equal';
import { composeEventHandlers, generateId } from '../utils';
import { createStyledComponent } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import _Dropdown, {
  componentTheme as dropdownComponentTheme
} from '../Dropdown/Dropdown';
import ItemMatcher from '../Dropdown/ItemMatcher';
import SelectTrigger, {
  componentTheme as selectTriggerComponentTheme
} from './SelectTrigger';
import { pxToEm } from '../styles';
import Menu, { getItems } from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

import type { Item, Items, ItemGroups } from '../Menu/Menu';

type Props = {
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
   * Open the Select upon initialization. Primarily for use with uncontrolled
   * components.
   */
  defaultIsOpen?: boolean,
  /**
   * Item selected upon initialization. Primarily for use with uncontrolled
   * components.
   */
  defaultSelectedItem?: Item,
  /** Disables the control */
  disabled?: boolean,
  /** Index of the highlighted item. For use with controlled components. */
  highlightedIndex?: number,
  /** Id of the Select */
  id?: string,
  /** Indicates that the value of the element is invalid */
  invalid?: boolean,
  /** Determines whether the Select is open. For use with controlled components. */
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
  /** Name of the field when submitted in a form */
  name?: string,
  /**
   * Called when an item is selected and it is different than the previously
   * selected item.
   */
  onChange?: (item: Item, event: SyntheticEvent<>) => void,
  /** Called when Select is closed */
  onClose?: (event: SyntheticEvent<>) => void,
  /** Called when Select is opened */
  onOpen?: (event: SyntheticEvent<>) => void,
  /** Called when an item is selected */
  onSelect?: (item: Item, event: SyntheticEvent<>) => void,
  /** Text displayed when there is no item selected */
  placeholder?: string,
  /** Placement of the Select */
  placement?: 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start',
  /** Indicates that the user cannot modify the value of the control */
  readOnly?: boolean,
  /** Provides custom rendering control for the items. See the [render item example](/components/select#render-item) and [React docs](https://reactjs.org/docs/render-props.html). */
  renderItem?: RenderItem,
  /** Provides custom rendering control for the menu. See the [render trigger example](/components/select#render-menu) and [React docs](https://reactjs.org/docs/render-props.html). */
  renderMenu?: RenderMenu,
  /** Provides custom rendering control for the trigger. See the [render trigger example](/components/select#render-trigger) and [React docs](https://reactjs.org/docs/render-props.html). */
  renderTrigger?: RenderTrigger,
  /** Indicates that the user must select a value before submitting a form */
  required?: boolean,
  /** The selected item. For use with controlled components. */
  selectedItem?: Item,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Ref for the trigger */
  triggerRef?: (node: ?React$Component<*, *>) => void,
  /**
   * Use a Portal to render the Select menu to the body rather than as a sibling
   * to the trigger
   */
  usePortal?: boolean,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

type State = {
  highlightedIndex: ?number,
  isOpen: boolean,
  selectedItem: ?Item
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
  ...mapComponentThemes(
    {
      name: 'Dropdown',
      theme: dropdownComponentTheme(baseTheme)
    },
    {
      name: 'Select',
      theme: {}
    },
    {
      ...selectTriggerComponentTheme(baseTheme),
      ...baseTheme
    }
  )
});

const Dropdown = createThemedComponent(_Dropdown, ({ theme: baseTheme }) => ({
  ...mapComponentThemes(
    {
      name: 'Select',
      theme: componentTheme(baseTheme)
    },
    {
      name: 'Dropdown',
      theme: {}
    },
    baseTheme
  )
}));

const Root = createStyledComponent(
  Dropdown,
  {
    width: '100%',

    '& > span': {
      width: '100%'
    }
  },
  {
    displayName: 'Select'
  }
);

const contentWidthModifier = {
  enabled: true,
  fn: (data) => {
    data.styles.minWidth = pxToEm(224);
    data.styles.width = pxToEm(data.offsets.reference.width);
    return data;
  }
};

/**
 * Select is a form control that provides users with a list of options.
 * The selected option is always visible and the others become visible upon user
 * interaction. Once open, users can scroll or type to cycle through matching
 * options.
 */
export default class Select extends Component<Props, State> {
  static defaultProps = {
    itemKey: 'value',
    placeholder: 'Select...',
    placement: 'bottom-start',
    size: 'large'
  };

  state: State = {
    highlightedIndex: this.props.defaultHighlightedIndex,
    isOpen: Boolean(this.props.defaultIsOpen),
    selectedItem: this.props.defaultSelectedItem
  };

  id: string = this.props.id || `select-${generateId()}`;

  selectTrigger: ?React$Component<*, *>;

  itemMatcher: any;

  items: Items = getItems(this.props.data);

  componentWillReceiveProps(nextProps: Props) {
    if (!deepEqual(this.props.data, nextProps.data)) {
      this.items = getItems(nextProps.data);
    }
  }

  render() {
    const {
      disabled,
      modifiers,
      readOnly,
      renderTrigger,
      ...restProps
    } = this.props;
    const isOpen = this.getControllableValue('isOpen');

    const rootProps = {
      ...restProps,
      id: this.id,
      disabled: disabled || readOnly,
      highlightedIndex: this.getHighlightedOrSelectedIndex(),
      isOpen,
      modifiers: {
        contentWidth: contentWidthModifier,
        ...modifiers
      },
      onClose: this.close,
      onOpen: this.open,
      renderMenu: this.renderMenu,
      renderTrigger: renderTrigger ? this.renderTrigger : undefined
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
      selectedItem: this.getControllableValue('selectedItem'),

      // Helpers
      close: this.close,
      focusTrigger: this.focusTrigger,
      open: this.open
    };
  };

  setTriggerRef = (node: ?React$Component<*, *>) => {
    const { triggerRef } = this.props;

    this.selectTrigger = node;
    triggerRef && triggerRef(node);
  };

  getMenuItemId = (index: string | number) => {
    return `${this.id}-item-${index}`;
  };

  getTriggerProps: PropGetter = (props = {}) => {
    const isOpen = this.getControllableValue('isOpen');
    const selectedItem = this.getControllableValue('selectedItem');
    const {
      disabled,
      invalid,
      name,
      placeholder,
      readOnly,
      renderTrigger,
      required,
      size,
      variant
    } = this.props;

    const refKey = renderTrigger ? 'ref' : 'triggerRef';

    /* console.log('Select.getTriggerProps props', props); */

    /* console.log('Select.getTriggerProps props.onKeyDown', props.onKeyDown); */

    const triggerProps = {
      'aria-haspopup': 'listbox',
      'aria-invalid': invalid,
      'aria-readonly': readOnly,
      'aria-required': required,
      disabled,
      isOpen,
      item: selectedItem,
      name,
      placeholder,
      readOnly,
      size,
      tabIndex: !disabled ? 0 : undefined,
      [refKey]: this.setTriggerRef,
      variant
    };

    const mergedProps = renderTrigger
      ? {
          ...props,
          ...triggerProps
        }
      : {
          ...triggerProps,
          ...props
        };

    const ret = {
      ...mergedProps,
      onKeyDown: !readOnly ? this.onTriggerKeyDown : undefined
    };

    /* console.log('Select.getTriggerProps', ret); */
    return ret;
  };

  renderTrigger = ({ triggerProps }: Object = {}) => {
    const { renderTrigger } = this.props;

    if (renderTrigger) {
      /* console.log('Select.renderTrigger - CUSTOM'); */
      return renderTrigger({
        ...this.getStateAndHelpers(),
        triggerProps: this.getTriggerProps(triggerProps)
      });
    }

    /* console.log('Select.renderTrigger - DEFAULT'); */
    return <SelectTrigger {...this.getTriggerProps(triggerProps)} />;
  };

  getMenuProps: PropGetter = (props = {}) => {
    const { itemKey } = this.props;

    return {
      ...props,
      itemKey,
      role: 'listbox',
      renderItem: this.renderItem
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
    const selectedItem = this.getControllableValue('selectedItem');
    const { itemProps, index, item } = props;

    return {
      ...itemProps,
      ...item,
      'aria-selected': selectedItem ? selectedItem.value === item.value : false,
      'aria-disabled': this.props.disabled || item.disabled,
      children: item.text,
      id: this.getMenuItemId(index),
      isHighlighted: highlightedIndex === index,
      role: 'option',
      tabIndex: null, // Unset tabIndex because we use arrow keys to navigate instead
      onClick: composeEventHandlers(
        item.onClick,
        this.onSelect.bind(null, item)
      ),
      render: undefined // Prevent recursion
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

  getHighlightedOrSelectedIndex = () => {
    const isOpen = this.getControllableValue('isOpen');
    const selectedItem = this.getControllableValue('selectedItem');
    const highlightedIndex = this.getControllableValue('highlightedIndex');

    if (
      isOpen &&
      selectedItem &&
      (highlightedIndex === null || highlightedIndex === undefined)
    ) {
      return this.items.indexOf(selectedItem);
    }

    return highlightedIndex;
  };

  getHighlightedItemId = () => {
    const highlightedIndex = this.getControllableValue('highlightedIndex');
    return highlightedIndex !== undefined && highlightedIndex !== null
      ? this.getMenuItemId(highlightedIndex)
      : undefined;
  };

  onTriggerKeyDown = (event: SyntheticKeyboardEvent<>) => {
    // $FlowFixMe
    event.nativeEvent.preventMineralDefault = true;

    const { key } = event;
    const isOpen = this.getControllableValue('isOpen');
    /* console.log('Select.onTriggerKeyDown', key); */

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
      isOpen ? this.clickHighlightedItem() : this.open(event);
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
            prevState.highlightedIndex === undefined
              ? prevState.selectedItem
                ? this.items.indexOf(prevState.selectedItem)
                : 0
              : prevState.highlightedIndex === this.items.length - 1
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
          highlightedIndex:
            prevState.highlightedIndex === null ||
            prevState.highlightedIndex === undefined
              ? prevState.selectedItem
                ? this.items.indexOf(prevState.selectedItem)
                : this.items.length - 1
              : prevState.highlightedIndex === 0
                ? this.items.length - 1
                : prevState.highlightedIndex - 1
        }),
        this.scrollHighlightedItemIntoViewIfNeeded
      );
    }
  };

  highlightDefaultItem = () => {
    if (!this.isControlled('highlightedIndex')) {
      this.setState((prevState) => {
        const selectedItem = this.isControlled('selectedItem')
          ? this.props.selectedItem
          : prevState.selectedItem;
        return {
          highlightedIndex: selectedItem
            ? this.items.indexOf(selectedItem)
            : prevState.highlightedIndex ? prevState.highlightedIndex : 0
        };
      }, this.scrollHighlightedItemIntoViewIfNeeded);
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

  onSelect = (item: Item, event: SyntheticEvent<>) => {
    const prevSelectedItem = this.getControllableValue('selectedItem');

    let stateToSet;
    if (!this.isControlled('selectedItem')) {
      stateToSet = {
        selectedItem: item
      };
    }
    if (!this.isControlled('highlightedIndex')) {
      stateToSet = {
        ...stateToSet,
        highlightedIndex: this.items.indexOf(item)
      };
    }

    if (stateToSet) {
      this.setState(stateToSet, () => {
        this.onSelectActions(item, prevSelectedItem, event);
      });
    } else {
      this.onSelectActions(item, prevSelectedItem, event);
    }
  };

  onSelectActions = (
    item: Item,
    prevSelectedItem: Item,
    event: SyntheticEvent<>
  ) => {
    this.props.onSelect && this.props.onSelect(item, event);

    if (prevSelectedItem !== item) {
      this.onChange(item, event);
    }

    this.close(event);
    this.focusTrigger();
  };

  onChange = (item: Item, event: SyntheticEvent<>) => {
    this.props.onChange && this.props.onChange(item, event);
  };

  focusTrigger = () => {
    const node = findDOMNode(this.selectTrigger); // eslint-disable-line react/no-find-dom-node
    if (node instanceof HTMLElement) {
      node.focus();
    }
  };

  open = (event: SyntheticEvent<>) => {
    this.highlightDefaultItem();

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

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}
