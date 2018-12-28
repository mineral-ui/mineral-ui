/* @flow */
import React, { cloneElement, Component } from 'react';
import { canUseDOM } from 'exenv';
import FocusTrap from 'focus-trap-react';
import noScroll from 'no-scroll';
import Transition from 'react-transition-group/Transition';
import { withTheme } from '../themes';
import { generateId } from '../utils';
import { excludeByType, findByType } from '../utils/children';
import Button from '../Button';
import Portal from '../Portal';
import EventListener from '../EventListener';
import { ACTIONS_SIZE, SIZE } from './constants';
import {
  DialogRoot as Root,
  DialogAnimate,
  DialogCloseButton,
  DialogContent,
  DialogIEWrapper,
  DialogOverlay
} from './styled';
import { dialogTheme } from './themes';
import DialogActions from './DialogActions';
import DialogBody from './DialogBody';
import DialogFooter from './DialogFooter';
import DialogHeader from './DialogHeader';
import DialogTitle from './DialogTitle';

import { dialogPropTypes } from './propTypes';
import type { DialogDefaultProps, DialogProps, DialogState } from './types';

const Animation = withTheme(({ children, theme, ...restProps }: Object) => {
  return (
    <Transition
      appear
      mountOnEnter
      timeout={parseFloat(dialogTheme(theme).Dialog_transitionDuration)}
      unmountOnExit
      {...restProps}>
      {(state) => <DialogAnimate state={state}>{children}</DialogAnimate>}
    </Transition>
  );
});

export default class Dialog extends Component<DialogProps, DialogState> {
  static displayName = 'Dialog';

  static defaultProps: DialogDefaultProps = {
    closeButtonLabel: 'close',
    closeOnClickOutside: true,
    closeOnEscape: true,
    size: SIZE.medium,
    usePortal: true
  };

  static propTypes = dialogPropTypes;

  state = {
    isExited: false,
    isExiting: false
  };

  appNodes: ?Array<HTMLElement>;

  id: string = this.props.id || `dialog-${generateId()}`;

  dialogRoot: ?HTMLElement;

  dialogContent: ?HTMLElement;

  lastFocusedElement: ?HTMLElement;

  componentDidUpdate(prevProps: DialogProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      this.open();
    }
  }

  render() {
    const {
      children,
      closeOnClickOutside,
      closeOnEscape,
      disableFocusTrap,
      isOpen,
      hideOverlay,
      modeless,
      size,
      title,
      usePortal,
      ...restProps
    } = this.props;
    const { isExited, isExiting } = this.state;

    if (isExited) {
      return null;
    }

    const headerId = this.getTitleId();
    const contentId = this.getContentId();
    const hasBody = findByType(children, DialogBody);
    const hasImmediatleTitle = findByType(children, DialogTitle);
    const hasHeader = title || findByType(children, DialogHeader);

    if (hasBody && hasImmediatleTitle) {
      throw new Error(
        '[mineral-ui/Dialog] You must wrap DialogTitle in DialogHeader'
      );
    }
    if (!hasHeader && !this.props['aria-label']) {
      throw new Error(
        '[mineral-ui/Dialog] You must provide an accessible title via the title prop, the DialogTitle component, or the aria-label prop'
      );
    }

    const rootProps = {
      'aria-labelledby': this.props['aria-label']
        ? undefined
        : hasHeader
        ? headerId
        : contentId,
      'aria-modal': !modeless,
      id: this.id,
      ref: this.setRootRef,
      modeless,
      role: 'dialog',
      tabIndex: '-1',
      ...(closeOnClickOutside && !modeless
        ? { onClick: this.handleClick }
        : undefined),
      ...restProps
    };

    const contentProps = {
      id: contentId,
      ref: this.setContentRef,
      role: 'document',
      size
    };

    const animationProps = {
      in: isOpen && !isExiting,
      onExiting: this.handleExiting,
      onExited: this.handleExited,
      onEntered: this.handleEntered
    };

    const focusTrapProps = {
      active: !disableFocusTrap && !modeless
    };

    const output = (
      <Animation {...animationProps}>
        <FocusTrap {...focusTrapProps}>
          <Root {...rootProps}>
            {!hideOverlay && !modeless && <DialogOverlay />}
            <DialogIEWrapper>
              <DialogContent {...contentProps}>
                {this.renderHeader()}
                {this.renderBody()}
                {this.renderFooter()}
              </DialogContent>
            </DialogIEWrapper>
            {closeOnEscape && (
              <EventListener
                listeners={[
                  {
                    target: 'document',
                    event: 'keydown',
                    handler: this.handleDocumentKeydown
                  }
                ]}
              />
            )}
          </Root>
        </FocusTrap>
      </Animation>
    );

    return usePortal ? <Portal>{output}</Portal> : output;
  }

  renderHeader = () => {
    const {
      children,
      closeButtonLabel,
      preventCloseButtonClose,
      showCloseButton,
      title,
      variant
    } = this.props;

    const closeButtonProps = {
      'aria-label': closeButtonLabel,
      ...(preventCloseButtonClose ? undefined : { onClick: this.close })
    };

    // prettier-ignore
    const closeButton = showCloseButton ? <DialogCloseButton {...closeButtonProps} /> : undefined;

    let header;
    const titleProps = {
      id: this.getTitleId(),
      variant
    };

    if (title) {
      header = (
        <DialogHeader closeButton={closeButton}>
          {typeof title === 'string' ? (
            <DialogTitle {...titleProps}>{title}</DialogTitle>
          ) : (
            cloneElement(title, titleProps)
          )}
        </DialogHeader>
      );
    } else {
      const headerChild = findByType(children, DialogHeader);
      if (headerChild) {
        const headerChildProps = {
          titleProps,
          closeButton: headerChild.props.closeButton || closeButton
        };
        header = cloneElement(headerChild, headerChildProps);
      }
    }

    return header;
  };

  renderBody = () => {
    const { children } = this.props;

    let body;
    const bodyChild = findByType(children, DialogBody);
    if (bodyChild) {
      body = bodyChild;
    } else {
      const bodyChildren = excludeByType(children, [
        DialogHeader,
        DialogFooter
      ]);
      if (bodyChildren) {
        body = <DialogBody>{bodyChildren}</DialogBody>;
      }
    }

    return body;
  };

  renderFooter = () => {
    const { actions, children, size, variant } = this.props;

    let footer;
    if (actions) {
      const keyedActions = actions.map(
        ({ text, size: buttonSize, ...restProps }, index) => {
          const buttonProps = {
            size:
              buttonSize ||
              (size === ACTIONS_SIZE.large
                ? ACTIONS_SIZE.large
                : ACTIONS_SIZE.medium),
            ...restProps
          };
          return (
            <Button {...buttonProps} key={index}>
              {text}
            </Button>
          );
        }
      );
      footer = (
        <DialogFooter>
          <DialogActions variant={variant}>{keyedActions}</DialogActions>
        </DialogFooter>
      );
    } else {
      const footerChild = findByType(children, DialogFooter);
      if (footerChild) {
        footer = footerChild;
      }
    }

    return footer;
  };

  getTitleId = () => {
    return `${this.id}-title`;
  };

  getContentId = () => {
    return `${this.id}-content`;
  };

  setContentRef = (node: ?HTMLElement) => {
    this.dialogContent = node;
  };

  setRootRef = (node: ?HTMLElement) => {
    this.dialogRoot = node;
  };

  setLastFocusedElement = () => {
    if (canUseDOM) {
      const { activeElement, body } = global.document;
      this.lastFocusedElement =
        activeElement && activeElement.focus ? activeElement : body;
    }
  };

  restoreFocus = () => {
    this.lastFocusedElement && this.lastFocusedElement.focus();
  };

  setInitialFocus = () => {
    this.dialogRoot && this.dialogRoot.focus();
  };

  open = () => {
    const { modeless } = this.props;

    this.setLastFocusedElement();

    if (!modeless) {
      this.setAppNode();
      this.disableAppNode();
      if (canUseDOM) {
        noScroll.on();
      }
    }

    this.setState({
      isExited: false
    });
  };

  close = () => {
    this.handleExiting();
  };

  handleClick = (event: SyntheticEvent<Node>) => {
    if (this.isEventOutsideNode(event, this.dialogContent)) {
      this.close();
    }
  };

  handleDocumentKeydown = (event: SyntheticKeyboardEvent<>) => {
    if (event.key === 'Escape' && !event.defaultPrevented) {
      this.close();
    }
  };

  handleEntered = () => {
    !this.props.disableFocusOnOpen && this.setInitialFocus();
    this.props.onOpen && this.props.onOpen();
  };

  handleExiting = () => {
    this.setState({
      isExiting: true
    });
  };

  handleExited = () => {
    const { modeless, onClose } = this.props;

    this.setState(
      {
        isExited: true,
        isExiting: false
      },
      () => {
        if (!modeless) {
          if (canUseDOM) {
            noScroll.off();
          }
          this.enableAppNode();
        }

        this.restoreFocus();
        onClose && onClose();
      }
    );
  };

  isEventOutsideNode = (event: SyntheticEvent<Node>, node: ?HTMLElement) => {
    const { target } = event;
    return node && target instanceof Node && !node.contains(target);
  };

  setAppNode = () => {
    const { appSelector } = this.props;

    if (appSelector && canUseDOM) {
      this.appNodes = Array.from(document.querySelectorAll(appSelector));

      if (!this.appNodes.length) {
        throw new Error(
          `[mineral-ui/Dialog]: Unable to find app node(s) using the appSelector of '${appSelector}'.`
        );
      }
    }
  };

  disableAppNode = () => {
    this.appNodes &&
      this.appNodes.forEach((node) => node.setAttribute('aria-hidden', 'true'));
  };

  enableAppNode = () => {
    this.appNodes &&
      this.appNodes.forEach((node) => node.removeAttribute('aria-hidden'));
  };
}
