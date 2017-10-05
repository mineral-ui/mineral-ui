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
import React, { cloneElement, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Manager } from 'react-popper';
import { createStyledComponent } from '../styles';
import { generateId } from '../utils';
import EventListener from '../EventListener';
import Portal from '../Portal';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';

type Props = {
  /** Trigger for the Popover */
  children: React$Node,
  /** Content of the Popover */
  content: $FlowFixMe,
  /** Disables the Popover */
  disabled?: boolean,
  /** Include an arrow on the Popover content pointing to the trigger */
  hasArrow?: boolean,
  /** For use with controlled components, in which the app manages Popover state */
  isOpen?: boolean,
  /** Plugins that are used to alter behavior. See [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers) for options.*/
  modifiers?: Object,
  /** Called when Popover is closed */
  onClose?: (event: SyntheticEvent<>) => void,
  /** Called when Popover is opened */
  onOpen?: (event: SyntheticEvent<>) => void,
  /** Open the Popover immediately upon initialization */
  defaultIsOpen?: boolean,
  /** Function that returns props to be applied to the trigger */
  getTriggerProps?: (props: Object, scope?: Object) => Object,
  /** Placement of the Popover */
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
  /** Subtitle displayed under the title */
  subtitle?: React$Node,
  /** Title of the Popover */
  title?: React$Node,
  /** @Private ref for the Popover trigger */
  triggerRef?: (node: ?React$Component<*, *>) => void,
  /** Use a Portal to render the Popover to the body rather than as a sibling to the trigger */
  usePortal?: boolean,
  /** Display the content with default styles */
  wrapContent?: boolean
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
    displayName: 'Popover',
    rootEl: 'div'
  }
);

/**
 * Popovers hold supporting information or user controls.
 * Popovers float over page content.
 * You can control placement, scroll behavior, and focus management to customize your implementation.
 * Popovers can be toggled on a user action or a state change.
 */
export default class Popover extends Component<Props, State> {
  static defaultProps = {
    hasArrow: true,
    placement: 'bottom',
    wrapContent: true
  };

  props: Props;

  state: State = {
    isOpen: Boolean(this.props.defaultIsOpen)
  };

  id: string = `popover-${generateId()}`;

  popoverContent: ?React$Component<*, *>;

  popoverTrigger: ?React$Component<*, *>;

  render() {
    const {
      children,
      content,
      disabled,
      getTriggerProps,
      hasArrow,
      modifiers,
      placement,
      subtitle,
      title,
      triggerRef,
      usePortal,
      wrapContent,
      ...restProps
    } = this.props;

    const { isOpen } = this.isControlled() ? this.props : this.state;

    const rootProps = {
      ...restProps
    };
    const contentId = `${this.id}-popoverContent`;

    let popoverTriggerProps = {
      contentId,
      children,
      disabled,
      isOpen,
      onClick: !disabled ? this.toggleOpenState : undefined,
      ref: node => {
        this.popoverTrigger = node;
        triggerRef && triggerRef(node);
      }
    };

    popoverTriggerProps = {
      ...popoverTriggerProps,
      ...(getTriggerProps && getTriggerProps(popoverTriggerProps))
    };

    let popoverContent;
    if (isOpen) {
      if (wrapContent) {
        const popoverContentProps = {
          hasArrow,
          id: contentId,
          modifiers,
          placement,
          ref: node => {
            this.popoverContent = node;
          },
          subtitle,
          title
        };

        popoverContent = (
          <PopoverContent {...popoverContentProps}>{content}</PopoverContent>
        );
      } else {
        popoverContent = cloneElement(content, {
          ref: node => {
            this.popoverContent = node;
          }
        });
      }

      if (usePortal) {
        popoverContent = <Portal>{popoverContent}</Portal>;
      }
    }

    return (
      <Root {...rootProps}>
        <PopoverTrigger {...popoverTriggerProps} />
        {isOpen && popoverContent}
        {isOpen && (
          <EventListener
            listeners={[
              {
                target: 'document',
                event: 'click',
                handler: this.handleDocumentClick,
                options: true
              },
              {
                target: 'document',
                event: 'keydown',
                handler: this.handleDocumentKeydown,
                options: true
              }
            ]}
          />
        )}
      </Root>
    );
  }

  close = (event: SyntheticEvent<>) => {
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
    const { isOpen } = this.isControlled() ? this.props : this.state;
    !isOpen && this.focusTrigger();
  };

  focusTrigger = () => {
    const node = findDOMNode(this.popoverTrigger); // eslint-disable-line react/no-find-dom-node
    if (node && node.firstChild && node.firstChild instanceof HTMLElement) {
      node.firstChild.focus();
    }
  };

  handleDocumentClick = (event: SyntheticEvent<>) => {
    if (this.isClickOutsideComponent(event)) {
      this.close(event);
    }
  };

  handleDocumentKeydown = (event: SyntheticEvent<>) => {
    if (event.key === 'Escape') {
      this.close(event);
    }
  };

  isClickOutsideComponent = (event: SyntheticEvent<>) => {
    /* eslint-disable react/no-find-dom-node */
    const { usePortal } = this.props;
    const node = findDOMNode(this);
    const popoverContentNode = findDOMNode(this.popoverContent);

    if (usePortal) {
      return (
        node &&
        node instanceof HTMLElement &&
        event.target &&
        event.target instanceof HTMLElement &&
        !node.contains(event.target) &&
        popoverContentNode &&
        popoverContentNode instanceof HTMLElement &&
        !popoverContentNode.contains(event.target)
      );
    } else {
      return (
        node &&
        node instanceof HTMLElement &&
        event.target &&
        event.target instanceof HTMLElement &&
        !node.contains(event.target)
      );
    }
  };

  isControlled = () => {
    return this.props.isOpen !== undefined;
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
    this.focusTrigger();
    this.props.onOpen && this.props.onOpen(event);
  };

  toggleOpenState = (event: SyntheticEvent<>) => {
    const { isOpen } = this.isControlled() ? this.props : this.state;
    if (isOpen) {
      this.close(event);
    } else {
      this.open(event);
    }
  };
}
