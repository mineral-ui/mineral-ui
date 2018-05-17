/* @flow */
import React, { cloneElement, Component } from 'react';
import FocusTrap from 'focus-trap-react';
import Transition from 'react-transition-group/Transition';
import { createStyledComponent, pxToEm } from '../styles';
import { generateId, findByType } from '../utils';
import Portal from '../Portal';
import EventListener from '../EventListener';
import DialogBody from './DialogBody';
import DialogFooter from './DialogFooter';
import DialogHeader from './DialogHeader';
import { componentTheme as dialogRowComponentTheme } from './DialogRow';

type Props = {
  /** TODO */
  children: React$Node,
  /** TODO */
  closeOnEscape?: boolean,
  /** TODO */
  closeOnClickOutside?: boolean,
  /** TODO */
  hideOverlay?: boolean,
  /** Id of the Dialog */
  id?: string,
  /**
   * Determines whether the Dialog is open.
   */
  isOpen?: boolean,
  /** TODO */
  modeless?: boolean,
  /** Called when Dialog is closed */
  onClose?: () => void,
  /** Called when Dialog is opened */
  onOpen?: () => void,
  /** TODO */
  size?: 'small' | 'medium' | 'large',
  /** @Private TODO */
  usePortal?: boolean,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

type State = {
  isExited: boolean,
  isExiting: boolean
};

export const componentTheme = (baseTheme: Object) => ({
  Dialog_zIndex: baseTheme.zIndex_100,

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
  DialogContent_zIndex: baseTheme.zIndex_200,

  DialogOverlay_backgroundColor: 'rgba(0, 0, 0, 0.6)',

  ...dialogRowComponentTheme(baseTheme),
  ...baseTheme
});

const ANIMATION_DURATION_MS = 250; // TODO: Make prop or theme variable?

const styles = {
  overlay: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      backgroundColor: theme.DialogOverlay_backgroundColor,
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: -1
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
      ...getSizeStyles(size)
    };
  },
  root: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      alignItems: 'center',
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: theme.Dialog_zIndex
    };
  },
  animate: ({ state }) => ({
    opacity: state === 'entered' ? 1 : 0,
    transition: `opacity ${ANIMATION_DURATION_MS}ms ease`,
    willChange: 'opacity'
  })
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'Dialog',
  includeStyleReset: true
});

const Overlay = createStyledComponent('div', styles.overlay, {
  displayName: 'Overlay'
});

const DialogContent = createStyledComponent('div', styles.content, {
  displayName: 'DialogContent'
});

const Animate = createStyledComponent('div', styles.animate, {
  displayName: 'Animate'
});

const Animation = ({ children, ...restProps }: Object) => {
  return (
    <Transition
      appear
      mountOnEnter
      timeout={ANIMATION_DURATION_MS}
      unmountOnExit
      {...restProps}>
      {(state) => <Animate state={state}>{children}</Animate>}
    </Transition>
  );
};

/**
 * Dialog - TODO
 */
export default class Dialog extends Component<Props, State> {
  static defaultProps: Object = {
    closeOnClickOutside: true,
    closeOnEscape: true,
    hideOverlay: false,
    size: 'medium', // TODO: What is the default size?
    usePortal: true
  };

  state: State = {
    isExited: false,
    isExiting: false
  };

  id: string = `dialog-${generateId()}`;

  dialogContent: ?HTMLElement;

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isOpen && !this.props.isOpen) {
      this.setState({
        isExited: false
      });
    }
  }

  render() {
    const {
      children,
      closeOnClickOutside,
      closeOnEscape,
      isOpen,
      hideOverlay,
      size,
      usePortal,
      variant,
      ...restProps
    } = this.props;
    const { isExited, isExiting } = this.state;

    if (isExited) {
      return null;
    }

    let [_header, body, footer] = this.extractComponentsFromChildren(children);

    const header = cloneElement(_header, {
      id: this.getHeaderId(),
      tabIndex: '-1',
      variant
    });

    const rootProps = {
      'aria-labelledby': this.getHeaderId(),
      'aria-modal': true,
      id: this.id,
      role: 'dialog',
      ...(closeOnClickOutside ? { onClick: this.handleClick } : undefined),
      ...restProps
    };

    const contentProps = {
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
      focusTrapOptions: {
        initialFocus: `#${this.getHeaderId()}`
      }
    };

    const output = (
      <Animation {...animationProps}>
        <FocusTrap {...focusTrapProps}>
          <Root {...rootProps}>
            {!hideOverlay && <Overlay />}
            <DialogContent {...contentProps}>
              {header}
              {body}
              {footer}
            </DialogContent>
            {closeOnEscape && (
              <EventListener
                listeners={[
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
        </FocusTrap>
      </Animation>
    );

    return usePortal ? <Portal>{output}</Portal> : output;
  }

  extractComponentsFromChildren = (children: React$Node) => {
    return [DialogHeader, DialogBody, DialogFooter].reduce((acc, type) => {
      const child = findByType(children, type);
      if (!child) {
        throw new Error(
          `[mineral-ui/Dialog]: Dialog must contain a ${type.name}.`
        );
      }
      acc.push(child);
      return acc;
    }, []);
  };

  getHeaderId = () => {
    return `${this.id}-header`;
  };

  setContentRef = (node: ?HTMLElement) => {
    this.dialogContent = node;
  };

  close = () => {
    this.handleExiting();
  };

  handleClick = (event: SyntheticEvent<>) => {
    if (this.isEventOutsideNode(event, this.dialogContent)) {
      this.close();
    }
  };

  handleDocumentKeydown = (event: SyntheticKeyboardEvent<>) => {
    if (event.key === 'Escape') {
      this.close();
    }
  };

  handleEntered = () => {
    this.props.onOpen && this.props.onOpen();
  };

  handleExiting = () => {
    this.setState({
      isExiting: true
    });
  };

  handleExited = () => {
    this.setState(
      {
        isExited: true,
        isExiting: false
      },
      () => {
        this.props.onClose && this.props.onClose();
      }
    );
  };

  isEventOutsideNode = (event: SyntheticEvent<>, node: ?HTMLElement) => {
    const { target } = event;

    return node && target && !node.contains(target);
  };
}
