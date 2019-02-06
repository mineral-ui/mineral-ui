/* @flow */
import React, { Component } from 'react';
import deepEqual from 'react-fast-compare';
import memoizeOne from 'memoize-one';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import { composeEventHandlers, generateId, isRenderProp } from '../utils';
import ModifiersContext from '../Dialog/ModifiersContext';
import ItemMatcher from '../Dropdown/ItemMatcher';
import Menu, { getItems } from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import SelectTrigger from './SelectTrigger';
import { PLACEMENT, SIZE } from './constants';
import { SelectRoot as Root, contentWidthModifier } from './styled';

import { selectPropTypes } from './propTypes';
import { MenuItemType, MenuItems } from '../Menu/types';
import {
  SelectDefaultProps,
  SelectProps,
  SelectPropGetter,
  SelectRenderFn,
  SelectState,
  SelectStateAndHelpers
} from './types';

export default class Select extends Component<SelectProps, SelectState> {
  static displayName = 'Select';

  static defaultProps: SelectDefaultProps = {
    itemKey: 'value',
    placeholder: 'Select...',
    placement: PLACEMENT['bottom-start'],
    size: SIZE.large
  };

  static propTypes = selectPropTypes;

  state = {
    highlightedIndex: this.props.defaultHighlightedIndex,
    isOpen: Boolean(this.props.defaultIsOpen),
    selectedItem: this.props.defaultSelectedItem
  };

  id: string = this.props.id || `select-${generateId()}`;

  itemMatcher: any;

  items: MenuItems;

  getItems = memoizeOne(getItems, deepEqual);

  selectTrigger: HTMLElement | null | undefined;

  render() {
    return (
      <ModifiersContext.Consumer>
        {(contextModifiers) => {
          const {
            data,
            disabled,
            modifiers,
            name: ignoreName,
            placeholder: ignorePlaceholder,
            readOnly,
            required: ignoreRequired,
            size: ignoreSize,
            trigger,
            ...restProps
          } = this.props;

          const isOpen = this.getControllableValue('isOpen');

          this.items = this.getItems(data);

          const rootProps = {
            ...restProps,
            id: this.id,
            data,
            disabled: disabled || readOnly,
            highlightedIndex: this.getHighlightedOrSelectedIndex(),
            isOpen,
            modifiers: {
              contentWidth: contentWidthModifier,
              ...(modifiers || contextModifiers)
            },
            onClose: this.close,
            onOpen: this.open,
            menu: this.renderMenu
          };

          return (
            <Root {...rootProps}>
              {isRenderProp(trigger)
                ? this.renderTrigger
                : this.renderTrigger()}
            </Root>
          );
        }}
      </ModifiersContext.Consumer>
    );
  }

  getStateAndHelpers = (): SelectStateAndHelpers => {
    return {
      state: {
        highlightedIndex: this.getControllableValue('highlightedIndex'),
        isOpen: this.getControllableValue('isOpen'),
        selectedItem: this.getControllableValue('selectedItem')
      },
      helpers: {
        close: this.close,
        focusTrigger: this.focusTrigger,
        open: this.open
      }
    };
  };

  setTriggerRef = (node: HTMLElement | null | undefined) => {
    const { triggerRef } = this.props;

    this.selectTrigger = node;
    triggerRef && triggerRef(node);
  };

  getContentId = () => {
    return `${this.id}-content`;
  };

  getMenuItemId = (index: string | number) => {
    return `${this.id}-item-${index}`;
  };

  getTriggerProps: SelectPropGetter = (props = {}) => {
    const isOpen = this.getControllableValue('isOpen');
    const selectedItem = this.getControllableValue('selectedItem');
    const {
      disabled,
      invalid,
      name,
      placeholder,
      readOnly,
      trigger,
      required,
      size,
      variant
    } = this.props;

    const refKey = trigger ? 'ref' : 'triggerRef';

    return {
      ...(isRenderProp(trigger) ? props : {}),
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
      variant,
      ...(!isRenderProp(trigger) ? props : {}),
      ...(!readOnly ? { onKeyDown: this.onTriggerKeyDown } : {})
    };
  };

  renderTrigger: SelectRenderFn = ({ props } = {}) => {
    const { trigger } = this.props;

    if (isRenderProp(trigger)) {
      return trigger({
        ...this.getStateAndHelpers(),
        props: this.getTriggerProps(props)
      });
    }

    return <SelectTrigger {...this.getTriggerProps(props)} />;
  };

  getMenuProps: SelectPropGetter = (props = {}) => {
    const { itemKey } = this.props;

    return {
      ...props,
      itemKey,
      role: 'listbox',
      item: this.renderItem
    };
  };

  renderMenu: SelectRenderFn = ({ props } = {}) => {
    const { menu } = this.props;

    if (isRenderProp(menu)) {
      return menu({
        ...this.getStateAndHelpers(),
        props: this.getMenuProps(props)
      });
    }

    return <Menu {...this.getMenuProps(props)} />;
  };

  getItemProps: SelectPropGetter = (props = {}) => {
    const highlightedIndex = this.getControllableValue('highlightedIndex');
    const selectedItem = this.getControllableValue('selectedItem');
    const { props: itemProps } = props;
    const { index, item } = itemProps;

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
      )
    };
  };

  renderItem: SelectRenderFn = (props = {}) => {
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
            : prevState.highlightedIndex
            ? prevState.highlightedIndex
            : 0
        };
      }, this.scrollHighlightedItemIntoViewIfNeeded);
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

  onSelect = (item: MenuItemType, event: React.SyntheticEvent) => {
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
    item: MenuItemType,
    prevSelectedItem: MenuItemType,
    event: React.SyntheticEvent
  ) => {
    this.props.onSelect && this.props.onSelect(item, event);

    if (prevSelectedItem !== item) {
      this.onChange(item, event);
    }

    this.close(event);
    this.focusTrigger();
  };

  onChange = (item: MenuItemType, event: React.SyntheticEvent) => {
    this.props.onChange && this.props.onChange(item, event);
  };

  focusTrigger = () => {
    const node = this.selectTrigger;
    node && node.focus();
  };

  open = (event: React.SyntheticEvent) => {
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

  openActions = (event: React.SyntheticEvent) => {
    this.props.onOpen && this.props.onOpen(event);
  };

  close = (event: React.SyntheticEvent) => {
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

  closeActions = (event: React.SyntheticEvent) => {
    this.props.onClose && this.props.onClose(event);
  };

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}
