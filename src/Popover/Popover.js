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
import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import { canUseDOM } from 'exenv';
import update from 'immutability-helper';
import { Manager } from 'react-popper';
import { createStyledComponent } from '../utils';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';

type Props = {
  /** Focuses the popover content when opened */
  autoFocus?: boolean,
  /** The element which will define the boundaries of the popover position */
  boundariesElement?: 'scrollParent' | 'viewport' | 'window',
  /** Trigger for the popover */
  children: MnrlReactNode,
  /** Content of the popover */
  content: MnrlReactNode,
  /** Disables the popover */
  disabled: boolean,
  /** Include an arrow on the popover content pointing to the trigger */
  hasArrow?: boolean,
  /** For use with controlled components, in which the app manages popover state */
  isOpen?: boolean,
  /** Plugins used to alter behavior. See [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers) for options. Note that this will override `boundariesElement`.*/
  modifiers?: Object,
  /** Called when popover is closed */
  onClose?: (event: Object) => void,
  /** Called when popover is opened */
  onOpen?: (event: Object) => void,
  /** Open the popover immediately upon initialization */
  defaultIsOpen?: boolean,
  /** Placement of the popover */
  placement?:
    | 'auto'
    | 'auto-end'
    | 'auto-start'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left'
    | 'left-end'
    | 'left-start'
    | 'right'
    | 'right-end'
    | 'right-start'
    | 'top'
    | 'top-end'
    | 'top-start',
  /** Focuses trigger when popover is closed */
  restoreFocus?: boolean,
  /** Subtitle displayed under the title */
  subtitle?: MnrlReactNode,
  /** Title of the popover */
  title?: MnrlReactNode
};

type State = {
  isOpen?: boolean
};

const Root = createStyledComponent(
  Manager,
  {
    display: 'inline-block'
  },
  {
    displayName: 'Popover'
  }
);

/**
 * Popover component
 */
export default class Popover extends PureComponent {
  static defaultProps = {
    autoFocus: true,
    boundariesElement: 'viewport',
    hasArrow: true,
    modifiers: {
      flip: {
        boundariesElement: 'viewport',
        flipVariations: true
      },
      preventOverflow: {
        boundariesElement: 'viewport',
        escapeWithReference: true
      }
    },
    placement: 'bottom',
    restoreFocus: true
  };

  props: Props;

  state: State = {
    isOpen: this.props.defaultIsOpen
  };

  popoverContent: React$Component<*, *, *>;

  popoverTrigger: React$Component<*, *, *>;

  componentWillUnmount() {
    this.removeDocumentEventListeners();
  }

  render() {
    const {
      boundariesElement,
      children,
      content,
      disabled,
      hasArrow,
      modifiers,
      placement,
      subtitle,
      title,
      ...restProps
    } = this.props;

    // Prevent props from passing to underlying DOM element
    const updatedRestProps = update(restProps, {
      $unset: [
        'autoFocus',
        'defaultIsOpen',
        'isOpen',
        'onClose',
        'onOpen',
        'restoreFocus'
      ]
    });

    const { isOpen } = this.isControlled() ? this.props : this.state;
    if (isOpen) {
      this.addDocumentEventListeners();
    } else {
      this.removeDocumentEventListeners();
    }

    // Allow shorthand customization of boundariesElement across modifiers
    if (boundariesElement !== Popover.defaultProps.boundariesElement) {
      if (
        modifiers &&
        modifiers.flip &&
        modifiers.flip.boundariesElement ===
          Popover.defaultProps.modifiers.flip.boundariesElement
      ) {
        modifiers.flip.boundariesElement = boundariesElement;
      }

      if (
        modifiers &&
        modifiers.preventOverflow &&
        modifiers.preventOverflow.boundariesElement ===
          Popover.defaultProps.modifiers.preventOverflow.boundariesElement
      ) {
        modifiers.preventOverflow.boundariesElement = boundariesElement;
      }
    }

    const rootProps = {
      ...updatedRestProps
    };
    const popoverTriggerProps = {
      disabled,
      isOpen,
      onClick: !disabled && this.toggleOpenState,
      ref: node => {
        this.popoverTrigger = node;
      }
    };
    const popoverContentProps = {
      hasArrow,
      modifiers,
      placement,
      ref: node => {
        this.popoverContent = node;
      },
      subtitle,
      title
    };

    return (
      <Root {...rootProps}>
        <PopoverTrigger {...popoverTriggerProps}>
          {children}
        </PopoverTrigger>
        {isOpen &&
          <PopoverContent {...popoverContentProps}>
            {content}
          </PopoverContent>}
      </Root>
    );
  }

  addDocumentEventListeners = () => {
    if (canUseDOM) {
      global.document.addEventListener('click', this.handleDocumentClick, true);
      global.document.addEventListener(
        'keydown',
        this.handleDocumentKeydown,
        true
      );
    }
  };

  close = (event: Object) => {
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

  closeActions = (event: Object) => {
    this.props.onClose && this.props.onClose(event);
    this.props.restoreFocus && this.focusTrigger();
  };

  focusContent = () => {
    const el = findDOMNode(this.popoverContent); // eslint-disable-line react/no-find-dom-node
    if (el && el instanceof HTMLElement) {
      el.focus();
    }
  };

  focusTrigger = () => {
    const el = findDOMNode(this.popoverTrigger); // eslint-disable-line react/no-find-dom-node
    if (el && el.firstChild && el.firstChild instanceof HTMLElement) {
      el.firstChild.focus();
    }
  };

  handleDocumentClick = (event: Object) => {
    if (this.isClickOutsideComponent(event)) {
      this.close(event);
    }
  };

  handleDocumentKeydown = (event: Object) => {
    if (event.key === 'Escape') {
      this.close(event);
    }
  };

  isClickOutsideComponent = (event: Object) => {
    const node = findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    return node && !node.contains(event.target);
  };

  isControlled = () => {
    return this.props.isOpen !== undefined;
  };

  open = (event: Object) => {
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

  openActions = (event: Object) => {
    this.props.onOpen && this.props.onOpen(event);
    this.props.autoFocus && this.focusContent();
  };

  removeDocumentEventListeners = () => {
    if (canUseDOM) {
      global.document.removeEventListener(
        'click',
        this.handleDocumentClick,
        true
      );
      global.document.removeEventListener(
        'keydown',
        this.handleDocumentKeydown,
        true
      );
    }
  };

  toggleOpenState = (event: Object) => {
    const { isOpen } = this.isControlled() ? this.props : this.state;
    if (isOpen) {
      this.close(event);
    } else {
      this.open(event);
    }
  };
}
