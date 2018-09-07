/* @flow */
import React, { cloneElement, Component } from 'react';
import { canUseDOM } from 'exenv';
import FocusTrap from 'focus-trap-react';
import noScroll from 'no-scroll';
import Transition from 'react-transition-group/Transition';
import { createStyledComponent, pxToEm } from '../styles';
import { createThemedComponent, withTheme } from '../themes';
import { generateId } from '../utils';
import { excludeByType, findByType } from '../utils/children';
import Button from '../Button';
import IconClose from '../Icon/IconClose';
import Portal from '../Portal';
import EventListener from '../EventListener';
import DialogActions from './DialogActions';
import DialogBody from './DialogBody';
import DialogFooter from './DialogFooter';
import DialogHeader from './DialogHeader';
import DialogTitle from './DialogTitle';
import { componentTheme as dialogRowComponentTheme } from './DialogRow';

type Props = {
  /**
   * Configuration for the [Buttons](/components/button) rendered at the bottom
   * of Dialog; accepts all Button props
   */
  actions?: Array<{
    text: string,
    size?: 'small' | 'medium' | 'large' | 'jumbo'
  }>,
  /**
   * CSS selector matching the node(s) which will be accessibly hidden (unless
   * \`modeless\`)
   */
  appSelector?: string,
  /** @Private Accessible label */
  'aria-label'?: string,
  /**
   * Content of Dialog (see the [Basic](#basic) and
   * [Alternate Syntax](#alternate) examples)
   */
  children?: React$Node,
  /** Accessible label for the close button */
  closeButtonLabel?: string,
  /** Close Dialog with the 'Escape' key */
  closeOnEscape?: boolean,
  /** Close Dialog by clicking outside of its content */
  closeOnClickOutside?: boolean,
  /** Disable focus being placed on Dialog upon opening */
  disableFocusOnOpen?: boolean,
  /** Disable focus being trapped within the Dialog when open */
  disableFocusTrap?: boolean,
  /** Hide the overlay underneath Dialog */
  hideOverlay?: boolean,
  /** Id of the Dialog */
  id?: string,
  /** Dialog only renders its content when true */
  isOpen?: boolean,
  /** Renders Dialog without modal behavior ([see example](#modeless)) */
  modeless?: boolean,
  /** Called when Dialog is closed */
  onClose?: () => void,
  /** Called when Dialog is opened */
  onOpen?: () => void,
  /** @Private Prevent the dialog from closing when the close button is clicked */
  preventCloseButtonClose?: boolean,
  /** Render a close button for Dialog */
  showCloseButton?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large',
  /**
   * Title of the dialog; must be a string or
   * [DialogTitle](/components/dialog-title)
   */
  title?: string | React$Element<*>,
  /** @Private Use a Portal to render Dialog to the body */
  usePortal?: boolean,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

type State = {
  isExited: boolean,
  isExiting: boolean
};

export const componentTheme = (baseTheme: Object) => ({
  Dialog_transitionDuration: '250ms',
  Dialog_zIndex: baseTheme.zIndex_1600,

  DialogCloseButton_margin: baseTheme.space_inline_sm,

  DialogContent_backgroundColor: baseTheme.panel_backgroundColor,
  DialogContent_borderColor: baseTheme.panel_borderColor,
  DialogContent_borderRadius: baseTheme.borderRadius_1,
  DialogContent_boxShadow: baseTheme.boxShadow_5,
  DialogContent_maxHeight: '80vh',
  DialogContent_maxHeight_small: pxToEm(560),
  DialogContent_maxHeight_medium: pxToEm(560),
  DialogContent_maxHeight_large: pxToEm(720),
  DialogContent_maxWidth_small: pxToEm(400),
  DialogContent_maxWidth_medium: pxToEm(640),
  DialogContent_maxWidth_large: pxToEm(1200),
  DialogContent_minWidth: pxToEm(360),
  DialogContent_offsetVertical: baseTheme.space_stack_xxl,
  DialogContent_width_small: '35vw',
  DialogContent_width_medium: '50vw',
  DialogContent_width_large: '80vw',

  DialogOverlay_backgroundColor: 'rgba(0, 0, 0, 0.6)',

  ...dialogRowComponentTheme(baseTheme),
  ...baseTheme
});

const styles = {
  animate: ({ state, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    return {
      opacity: state === 'entered' ? 1 : 0,
      position: 'relative',
      transition: `opacity ${theme.Dialog_transitionDuration} ease`,
      willChange: 'opacity',
      zIndex: theme.Dialog_zIndex
    };
  },
  content: ({ size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    const getSizeStyles = (size: string) => {
      const maxWidth = theme[`DialogContent_maxWidth_${size}`];
      const maxHeight = theme[`DialogContent_maxHeight_${size}`];
      const width = theme[`DialogContent_width_${size}`];
      const offsetVertical = theme.DialogContent_offsetVertical;

      const maxHeightNumber = parseFloat(maxHeight);
      const offsetVerticalNumber = parseFloat(offsetVertical);
      const minHeight = `${maxHeightNumber + 2 * offsetVerticalNumber}em`;

      return {
        maxWidth,
        width,

        [`@media(min-height: ${minHeight})`]: {
          maxHeight
        }
      };
    };

    return {
      backgroundColor: theme.DialogContent_backgroundColor,
      border: `1px solid ${theme.DialogContent_borderColor}`,
      borderRadius: theme.DialogContent_borderRadius,
      boxShadow: theme.DialogContent_boxShadow,
      display: 'flex',
      flexDirection: 'column',
      maxHeight: theme.DialogContent_maxHeight,
      minWidth: theme.DialogContent_minWidth,
      pointerEvents: 'all',
      position: 'relative',
      ...getSizeStyles(size)
    };
  },
  ieWrapper: {
    display: 'flex'
  },
  overlay: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      backgroundColor: theme.DialogOverlay_backgroundColor,
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0
    };
  },
  root: ({ modeless }) => ({
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    pointerEvents: modeless ? 'none' : undefined,
    right: 0,
    top: 0
  })
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'Dialog',
  filterProps: ['title'],
  includeStyleReset: true
});

const Overlay = createStyledComponent('div', styles.overlay, {
  displayName: 'Overlay'
});

const IEWrapper = createStyledComponent('div', styles.ieWrapper);

const Content = createStyledComponent('div', styles.content, {
  displayName: 'DialogContent'
});

const Animate = createStyledComponent('div', styles.animate, {
  displayName: 'Animate'
});

const Animation = withTheme(({ children, theme, ...restProps }: Object) => {
  return (
    <Transition
      appear
      mountOnEnter
      timeout={parseFloat(componentTheme(theme).Dialog_transitionDuration)}
      unmountOnExit
      {...restProps}>
      {(state) => <Animate state={state}>{children}</Animate>}
    </Transition>
  );
});

const ThemedButton = createThemedComponent(Button, ({ theme }) => ({
  ButtonIcon_color: theme.color
}));

const CloseButton = createStyledComponent(
  ThemedButton,
  ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const marginProperty =
      theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';

    return {
      [marginProperty]: theme.DialogCloseButton_margin
    };
  },
  {
    displayName: 'CloseButton',
    withProps: {
      iconStart: <IconClose />,
      minimal: true,
      size: 'small'
    }
  }
);

/**
 * Dialog displays content in a layer above the app and requires user
 * interaction to dismiss it. It may appear contextually or as a modal.
 */
export default class Dialog extends Component<Props, State> {
  static defaultProps: Props = {
    closeButtonLabel: 'close',
    closeOnClickOutside: true,
    closeOnEscape: true,
    size: 'medium',
    usePortal: true
  };

  state: State = {
    isExited: false,
    isExiting: false
  };

  appNodes: ?Array<HTMLElement>;

  id: string = this.props.id || `dialog-${generateId()}`;

  dialogRoot: ?HTMLElement;

  dialogContent: ?HTMLElement;

  lastFocusedElement: ?HTMLElement;

  componentDidUpdate(prevProps: Props) {
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
      innerRef: this.setRootRef,
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
      innerRef: this.setContentRef,
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
            {!hideOverlay && !modeless && <Overlay />}
            <IEWrapper>
              <Content {...contentProps}>
                {this.renderHeader()}
                {this.renderBody()}
                {this.renderFooter()}
              </Content>
            </IEWrapper>
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
    const closeButton = showCloseButton ? <CloseButton {...closeButtonProps} /> : undefined;

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
            size: buttonSize || (size === 'large' ? 'large' : 'medium'),
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
