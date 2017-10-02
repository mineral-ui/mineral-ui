/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { generateId } from '../utils';
import Root, { PopoverTrigger as DropdownTrigger } from '../Popover';
import DropdownContent from './DropdownContent';

type Item = {
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  disabled?: boolean,
  divider?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  render?: (item: Object, props: Object, theme: Object) => React$Element<*>,
  secondaryText?: React$Node,
  text?: React$Node,
  variant?: 'regular' | 'danger' | 'success' | 'warning'
};

type Props = {
  /** Trigger for the Dropdown */
  children: React$Node,
  /** Open the Dropdown immediately upon initialization */
  defaultIsOpen?: boolean,
  /** Disable the Dropdown */
  disabled?: boolean,
  /** Data from which the [Menu](./menu#data) will be constructed */
  data: Array<Object>,
  /** For use with controlled components, in which the app manages Dropdown state */
  isOpen?: boolean,
  /** Plugins that are used to alter behavior. See [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers) for options. */
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
  /** Focus trigger after selecting an item */
  restoreFocus?: boolean,
  /** Display a wider Dropdown menu */
  wide?: boolean
};

type State = {
  highlightedIndex: null | number,
  isOpen?: boolean
};

/**
 * Dropdown provides a list of actions to the user.
 */
export default class Dropdown extends Component<Props, State> {
  static defaultProps = {
    placement: 'bottom-start',
    restoreFocus: true
  };

  props: Props;

  state: State = {
    highlightedIndex: null,
    isOpen: Boolean(this.props.defaultIsOpen)
  };

  _isMounted: boolean = false;

  dropdownTrigger: ?React$Component<*, *>;

  id: string = `dropdown-${generateId()}`;

  items: Array<Item>;

  selectedItemId: ?string;

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
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

    const { isOpen } = this.isControlled() ? this.props : this.state;

    if (isOpen) {
      this.items = this.getItems();

      this.selectedItemId =
        this.state.highlightedIndex === null
          ? undefined
          : `${this.id}-menuItem-${this.state.highlightedIndex}`;
    }

    const dropdownTriggerProps = {
      'aria-activedescendant': this.selectedItemId,
      'aria-haspopup': true,
      children,
      isOpen,
      onKeyDown: this.onTriggerKeyDown
    };

    const dropdownContentProps = {
      data,
      getItemProps: this.getItemProps,
      modifiers,
      placement,
      wide
    };

    const rootProps = {
      id: this.id,
      restoreFocus: false,
      ...restProps,
      autoFocus: false,
      content: <DropdownContent {...dropdownContentProps} />,
      isOpen,
      onClose: this.onClose,
      onOpen: this.onOpen,
      trigger: <DropdownTrigger {...dropdownTriggerProps} />,
      triggerRef: node => {
        this.dropdownTrigger = node;
      },
      wrapContent: false
    };

    return (
      <Root {...rootProps}>
        {children}
      </Root>
    );
  }

  getItems = () => {
    return this.props.data.reduce((acc, group) => {
      return group.items && group.items.length
        ? acc.concat(group.items.filter(item => !item.divider))
        : acc;
    }, []);
  };

  onTriggerKeyDown = (event: SyntheticEvent<>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.setState(prevState => ({
        highlightedIndex:
          prevState.highlightedIndex === null ||
          prevState.highlightedIndex === this.items.length - 1
            ? 0
            : prevState.highlightedIndex + 1,
        isOpen: true
      }));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.setState(prevState => ({
        highlightedIndex:
          prevState.highlightedIndex === null ||
          prevState.highlightedIndex === 0
            ? this.items.length - 1
            : prevState.highlightedIndex - 1,
        isOpen: true
      }));
    } else if (event.key === 'Enter' || event.key === ' ') {
      const { isOpen } = this.isControlled() ? this.props : this.state;
      if (!isOpen || !this._isMounted || !this.selectedItemId) {
        return;
      }

      event.preventDefault(); // Prevent from reopening due to event on trigger

      const selectedItemNode = global.document.getElementById(
        this.selectedItemId
      );
      selectedItemNode && selectedItemNode.click();
    }
  };

  onOpen = (event: SyntheticEvent<>) => {
    this.setState({ isOpen: true }, () => {
      this.props.onOpen && this.props.onOpen(event);
    });
  };

  onClose = (event: SyntheticEvent<>) => {
    this.setState({ highlightedIndex: null, isOpen: false }, () => {
      this.props.onClose && this.props.onClose(event);
    });
  };

  isControlled = () => {
    return this.props.isOpen !== undefined;
  };

  getItemProps = (props: Object, scope: Object) => {
    const { index, item } = scope;

    return {
      ...props,
      id: `${this.id}-menuItem-${index}`,
      isHighlighted: this.state.highlightedIndex === index,
      onClick: this.itemOnClick.bind(null, item),
      role: 'menuitem',
      tabIndex: null
    };
  };

  itemOnClick = (item: Item, event: SyntheticEvent<>) => {
    const { onClick } = item;

    onClick && onClick(event);
    this.onClose(event);

    this.props.restoreFocus && this.focusTrigger();
  };

  focusTrigger = () => {
    const el = findDOMNode(this.dropdownTrigger); // eslint-disable-line react/no-find-dom-node
    if (el && el.firstChild && el.firstChild instanceof HTMLElement) {
      el.firstChild.focus();
    }
  };
}
