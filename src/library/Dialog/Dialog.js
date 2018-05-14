/* @flow */
import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import { createStyledComponent } from '../styles';
import { generateId } from '../utils';
import Portal from '../Portal';
import Button from '../Button';
import EventListener from '../EventListener';

type Props = {
  /** TODO */
  closeOnEscape?: boolean,
  /** TODO */
  closeOnClickOutside?: boolean,
  /** Id of the Dialog */
  id?: string,
  /**
   * Determines whether the Dialog is open.
   */
  isOpen?: boolean,
  /** Called when Dialog is closed */
  onClose?: () => void,
  /** Called when Dialog is opened */
  onOpen?: () => void,
  /** TODO */
  showOverlay?: boolean
};

type State = {
  isExited: boolean,
  isExiting: boolean
};

export const componentTheme = (baseTheme: Object) => ({
  Dialog_zIndex: baseTheme.zIndex_100,

  DialogBody_paddingHorizontal: baseTheme.space_inset_lg,

  DialogContent_backgroundColor: baseTheme.panel_backgroundColor,
  DialogContent_borderColor: baseTheme.panel_borderColor,
  DialogContent_borderRadius: baseTheme.borderRadius_1,
  DialogContent_boxShadow: baseTheme.boxShadow_5,
  DialogContent_zIndex: baseTheme.zIndex_200,
  DialogContent_margin: baseTheme.space_inset_lg,
  DialogContent_maxWidth: '80%',

  DialogHeader_padding: baseTheme.space_inset_lg,

  DialogFooter_padding: baseTheme.space_inset_lg,

  DialogFooterItem_marginRight: baseTheme.space_stack_md,

  DialogOverlay_backgroundColor: 'rgba(0, 0, 0, 0.6)',

  ...baseTheme
});

const ANIMATION_DURATION_MS = 250; // TODO: Make prop or theme variable?

const styles = {
  overlay: ({ theme: baseTheme }) => {
    let theme = componentTheme(baseTheme);

    return {
      backgroundColor: theme.DialogOverlay_backgroundColor,
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: -1
    };
  },
  body: ({ theme: baseTheme }) => {
    let theme = componentTheme(baseTheme);

    return {
      flex: '1 1 auto',
      overflowx: 'hidden',
      overflowY: 'auto',
      padding: `0 ${theme.DialogBody_paddingHorizontal}`
    };
  },
  content: ({ theme: baseTheme }) => {
    let theme = componentTheme(baseTheme);

    return {
      backgroundColor: theme.DialogContent_backgroundColor,
      border: `1px solid ${theme.DialogContent_borderColor}`,
      borderRadius: theme.DialogContent_borderRadius,
      boxShadow: theme.DialogContent_boxShadow,
      display: 'flex',
      flex: '0 1 auto',
      flexDirection: 'column',
      margin: theme.DialogContent_margin,
      maxHeight: '90vh',
      maxWidth: theme.DialogContent_maxWidth
    };
  },
  header: ({ theme: baseTheme }) => {
    let theme = componentTheme(baseTheme);

    return {
      flex: '0 0 auto',
      padding: theme.DialogHeader_padding
    };
  },
  footer: ({ theme: baseTheme }) => {
    let theme = componentTheme(baseTheme);

    return {
      alignItems: 'center',
      display: 'flex',
      flex: '0 0 auto',
      justifyContent: 'flex-end',
      padding: theme.DialogFooter_padding,

      '& > *:not(:last-child)': {
        marginRight: theme.DialogFooterItem_marginRight
      }
    };
  },
  root: ({ theme: baseTheme }) => {
    let theme = componentTheme(baseTheme);

    return {
      alignItems: 'flex-start',
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

const DialogHeader = createStyledComponent('header', styles.header, {
  displayName: 'DialogHeader'
});

const DialogBody = createStyledComponent('div', styles.body, {
  displayName: 'DialogBody'
});

const DialogFooter = createStyledComponent('footer', styles.footer, {
  displayName: 'DialogFooter'
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
    showOverlay: true
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
      closeOnClickOutside,
      closeOnEscape,
      isOpen,
      showOverlay,
      ...restProps
    } = this.props;
    const { isExited, isExiting } = this.state;

    if (isExited) {
      return null;
    }

    const rootProps = {
      'aria-labelledby': this.getHeaderId(),
      'aria-modal': true,
      id: this.id,
      isOpen,
      role: 'dialog',
      ...(closeOnClickOutside ? { onClick: this.handleClick } : undefined),
      ...restProps
    };

    const contentProps = {
      isOpen,
      innerRef: this.setContentRef,
      role: 'document'
    };

    const headerProps = {
      id: this.getHeaderId(),
      tabindex: '-1' // TODO: set focus here when dialog opens
    };

    const overlayProps = {
      isOpen
    };

    const animationProps = {
      in: isOpen && !isExiting,
      onExiting: this.handleExiting,
      onExited: this.handleExited,
      onEntered: this.handleEntered
    };

    return (
      <Portal>
        <Animation {...animationProps}>
          <Root {...rootProps}>
            {showOverlay && <Overlay {...overlayProps} />}
            <DialogContent {...contentProps}>
              <DialogHeader {...headerProps}>
                <h3>Lorem Ipsum</h3>
              </DialogHeader>
              <DialogBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Viverra nam libero justo laoreet sit amet. Vitae sapien
                  pellentesque habitant morbi tristique. Posuere lorem ipsum
                  dolor sit. Vel risus commodo viverra maecenas accumsan. Id
                  cursus metus aliquam eleifend mi in nulla posuere
                  sollicitudin. Lectus mauris ultrices eros in cursus turpis.
                  Natoque penatibus et magnis dis. Eget aliquet nibh praesent
                  tristique magna sit amet. Pellentesque elit eget gravida cum
                  sociis natoque penatibus. Luctus accumsan tortor posuere ac ut
                  consequat semper viverra. Sed vulputate odio ut enim. Vivamus
                  at augue eget arcu.
                </p>
                <p>
                  Gravida neque convallis a cras semper auctor. Neque gravida in
                  fermentum et sollicitudin ac orci phasellus egestas. Interdum
                  posuere lorem ipsum dolor sit amet consectetur adipiscing.
                  Purus ut faucibus pulvinar elementum integer enim. Id porta
                  nibh venenatis cras sed felis eget velit. Id consectetur purus
                  ut faucibus pulvinar. In aliquam sem fringilla ut morbi. Sed
                  egestas egestas fringilla phasellus faucibus scelerisque. Odio
                  pellentesque diam volutpat commodo sed. Donec ac odio tempor
                  orci dapibus ultrices. Duis at tellus at urna condimentum
                  mattis pellentesque. In fermentum posuere urna nec tincidunt
                  praesent. Aliquet sagittis id consectetur purus ut faucibus
                  pulvinar elementum integer. Faucibus in ornare quam viverra.
                  Sed sed risus pretium quam vulputate dignissim suspendisse.
                </p>
              </DialogBody>
              <DialogFooter>
                <Button minimal size="medium">
                  Cancel
                </Button>
                <Button primary size="medium">
                  Action
                </Button>
              </DialogFooter>
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
        </Animation>
      </Portal>
    );
  }

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
