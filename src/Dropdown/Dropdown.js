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
import Root from '../Popover';
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
  /** Data from which the [Menu](../menu#data) will be constructed (see [example](#data)) */
  data: Array<{ items: Array<Item>, title?: React$Node }>,
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
  /** Use a Portal to render the Dropdown menu to the body rather than as a sibling to the trigger */
  usePortal?: boolean,
  /** Display a wider Dropdown menu */
  wide?: boolean
};

type State = {
  highlightedIndex: null | number,
  isOpen?: boolean
};

/**
 * Dropdown presents a list of actions after a user interacts with a trigger.
 */
export default class Dropdown extends Component<Props, State> {
  static defaultProps = {
    placement: 'bottom-start'
  };

  props: Props;

  state: State = {
    highlightedIndex: null,
    isOpen: Boolean(this.props.defaultIsOpen)
  };

  _isMounted: boolean = false;

  dropdownTrigger: ?React$Component<*, *>;

  id: string = `dropdown-${generateId()}`;

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
      this.selectedItemId =
        this.state.highlightedIndex === null
          ? undefined
          : `${this.id}-menuItem-${this.state.highlightedIndex}`;
    }

    const dropdownContentProps = {
      data,
      id: `${this.id}-dropdownContent`,
      getItemProps: this.getItemProps,
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

  getTriggerProps = (props: Object) => {
    const contentId = `${this.id}-dropdownContent`;
    const { isOpen } = props;

    return {
      ...props,
      'aria-activedescendant': isOpen
        ? this.selectedItemId || `${contentId}-menu`
        : undefined,
      'aria-haspopup': true,
      contentId,
      onKeyDown: this.onTriggerKeyDown
    };
  };

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
          prevState.highlightedIndex === this.getItems().length - 1
            ? 0
            : prevState.highlightedIndex + 1
      }));
      this.open(event);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.setState(prevState => ({
        highlightedIndex:
          prevState.highlightedIndex === null ||
          prevState.highlightedIndex === 0
            ? this.getItems().length - 1
            : prevState.highlightedIndex - 1
      }));
      this.open(event);
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

  open = (event: SyntheticEvent<>) => {
    if (this.isControlled()) {
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
    this.setState({ highlightedIndex: null });

    if (this.isControlled()) {
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

  isControlled = () => {
    return this.props.isOpen !== undefined;
  };

  getItemProps = (props: Object, scope: Object) => {
    const { index, item } = scope;

    return {
      ...props,
      'aria-disabled': props.disabled,
      id: `${this.id}-menuItem-${index}`,
      isHighlighted: this.state.highlightedIndex === index,
      onClick: this.itemOnClick.bind(null, item),
      role: 'menuitem',
      tabIndex: null // Unset tabIndex because we use arrow keys to navigate instead
    };
  };

  itemOnClick = (item: Item, event: SyntheticEvent<>) => {
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
}
