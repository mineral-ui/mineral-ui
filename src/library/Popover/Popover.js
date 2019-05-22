/* @flow */
import React, { Children, Component } from 'react';
import { Manager } from 'react-popper';
import { findDOMNode } from 'react-dom';
import { composeEventHandlers, generateId, isRenderProp } from '../utils';
import ModifiersContext from '../Dialog/ModifiersContext';
import EventListener from '../EventListener';
import Portal from '../Portal';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';
import { PopoverRoot as Root } from './styled';
import { PLACEMENT } from './constants';

import { popoverPropTypes } from './propTypes';
import type {
  PopoverDefaultProps,
  PopoverProps,
  PopoverPropGetter,
  PopoverRenderMethod,
  PopoverState,
  PopoverStateAndHelpers
} from './types';

export default class Popover extends Component<PopoverProps, PopoverState> {
  static displayName = 'Popover';

  static defaultProps: PopoverDefaultProps = {
    focusTriggerOnClose: true,
    hasArrow: true,
    placement: PLACEMENT.bottom
  };

  static propTypes = popoverPropTypes;

  state = {
    isOpen: Boolean(this.props.defaultIsOpen)
  };

  id: string = this.props.id || `popover-${generateId()}`;

  popoverContent: ?HTMLElement;

  popoverTrigger: ?HTMLElement;

  render() {
    return (
      <ModifiersContext.Consumer>
        {(contextModifiers) => {
          const {
            content: ignoreContent,
            cursor: ignoreCursor,
            disabled: ignoreDisabled,
            modifiers,
            onClose: ignoreOnClose,
            onOpen: ignoreOnOpen,
            title: ignoreTitle,
            ...rootProps
          } = this.props;
          const isOpen = this.getControllableValue('isOpen');

          const contentProps = {
            modifiers: modifiers || contextModifiers
          };

          return (
            <Manager>
              <Root {...rootProps}>
                {this.renderTrigger()}
                {isOpen && this.renderContent(contentProps)}
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
            </Manager>
          );
        }}
      </ModifiersContext.Consumer>
    );
  }

  getStateAndHelpers = (): PopoverStateAndHelpers => {
    return {
      state: {
        isOpen: this.getControllableValue('isOpen')
      },
      helpers: {
        close: this.close,
        focusTrigger: this.focusTrigger,
        open: this.open,
        toggleOpen: this.toggleOpen
      }
    };
  };

  setTriggerRef = (node: ?HTMLElement) => {
    const { triggerRef } = this.props;

    this.popoverTrigger = node;
    triggerRef && triggerRef(node);
  };

  setContentRef = (node: ?HTMLElement) => {
    this.popoverContent = node;
  };

  getContentProps: PopoverPropGetter = (props = {}) => {
    const contentId = this.getContentId();
    const {
      content,
      hasArrow,
      modifiers,
      placement,
      positionFixed,
      subtitle,
      title
    } = this.props;

    return {
      ...props,
      hasArrow,
      id: contentId,
      modifiers,
      placement,
      positionFixed,
      ref: this.setContentRef,
      subtitle,
      tabIndex: 0,
      title,
      onBlur: composeEventHandlers(
        content && content.props && content.props.onBlur,
        this.onBlur
      )
    };
  };

  renderContent: PopoverRenderMethod = (props = {}) => {
    const { content, usePortal } = this.props;
    let popoverContent;

    if (isRenderProp(content)) {
      popoverContent = content({
        ...this.getStateAndHelpers(),
        props: this.getContentProps(props)
      });
    } else {
      popoverContent = (
        <PopoverContent {...this.getContentProps(props)}>
          {content}
        </PopoverContent>
      );
    }

    if (usePortal) {
      popoverContent = <Portal>{popoverContent}</Portal>;
    }

    return popoverContent;
  };

  getContentId = () => {
    return `${this.id}-content`;
  };

  getTriggerProps: PopoverPropGetter = (props = {}) => {
    const isOpen = this.getControllableValue('isOpen');
    const contentId = this.getContentId();
    const { children, cursor, disabled } = this.props;

    let child, childDisabled;
    if (!isRenderProp(children)) {
      child = children ? Children.only(children) : undefined;
      childDisabled = child && child.props.disabled !== undefined;
    }

    return {
      ...(isRenderProp(children) ? props : {}),
      'aria-describedby': contentId,
      'aria-disabled': disabled,
      'aria-expanded': isOpen,
      'aria-owns': contentId,
      id: contentId,
      children: child,
      cursor,
      disabled: child && childDisabled ? childDisabled : disabled,
      ref: this.setTriggerRef,
      role: 'button',
      ...(!isRenderProp(children) ? props : {}),
      onBlur: composeEventHandlers(props.onBlur, this.onBlur),
      onClick: !disabled
        ? composeEventHandlers(props.onClick, this.toggleOpen)
        : undefined
    };
  };

  renderTrigger: PopoverRenderMethod = (props = {}) => {
    const { children } = this.props;

    if (isRenderProp(children)) {
      return children({
        ...this.getStateAndHelpers(),
        props: this.getTriggerProps(props)
      });
    }

    const child = Children.only(children);
    return (
      <PopoverTrigger
        {...this.getTriggerProps({ ...child.props, children: child })}
      />
    );
  };

  onBlur = (event: SyntheticEvent<>) => {
    const isOpen = this.getControllableValue('isOpen');
    if (isOpen && this.isEventOutsideComponent(event)) {
      this.close(event);
    }
  };

  close = (event: SyntheticEvent<>) => {
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
    const { focusTriggerOnClose, onClose } = this.props;
    onClose && onClose(event);
    const isOpen = this.getControllableValue('isOpen');
    !isOpen && focusTriggerOnClose && this.focusTrigger();
  };

  focusTrigger = () => {
    const node = this.popoverTrigger;

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

  handleDocumentClick = (event: SyntheticEvent<>) => {
    if (this.isEventOutsideComponent(event)) {
      this.close(event);
    }
  };

  handleDocumentKeydown = (event: SyntheticKeyboardEvent<>) => {
    if (event.key.indexOf('Esc') === 0) {
      event.preventDefault();
      this.close(event);
    }
  };

  isEventOutsideComponent = (
    event: SyntheticEvent<> | SyntheticFocusEvent<>
  ) => {
    /* eslint-disable react/no-find-dom-node */
    const { usePortal } = this.props;
    const node = findDOMNode(this);
    const popoverContentNode = this.popoverContent;

    const target =
      event.type === 'blur' &&
      event.relatedTarget &&
      popoverContentNode === event.target
        ? event.relatedTarget
        : event.target;

    if (usePortal) {
      return (
        node &&
        node instanceof HTMLElement &&
        target &&
        target instanceof HTMLElement &&
        !node.contains(target) &&
        popoverContentNode &&
        !popoverContentNode.contains(target)
      );
    } else {
      return (
        node &&
        node instanceof HTMLElement &&
        target &&
        target instanceof HTMLElement &&
        !node.contains(target)
      );
    }
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
    this.focusTrigger();
    this.props.onOpen && this.props.onOpen(event);
  };

  toggleOpen = (event: SyntheticEvent<>) => {
    const isOpen = this.getControllableValue('isOpen');
    if (isOpen) {
      this.close(event);
    } else {
      this.open(event);
    }
  };

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}
