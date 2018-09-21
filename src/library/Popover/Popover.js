/* @flow */
import React, { Children, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Manager } from 'react-popper';
import { createStyledComponent } from '../styles';
import { composeEventHandlers, generateId, isRenderProp } from '../utils';
import ModifiersContext from '../Dialog/ModifiersContext';
import EventListener from '../EventListener';
import Portal from '../Portal';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent, {
  componentTheme as popoverContentComponentTheme
} from './PopoverContent';
import { componentTheme as popoverArrowComponentTheme } from './PopoverArrow';

type Props = {
  /**
   * Trigger for the Popover. Optionally provides custom rendering control.
   * See the [custom trigger example](/components/popover#custom-trigger)
   * and our [render props guide](/render-props).
   */
  children: React$Node | RenderFn,
  /**
   * Content of the Popover. Optionally provides custom rendering control.
   * See the [custom content example](/components/popover#custom-content)
   * and our [render props guide](/render-props).
   */
  content: $FlowFixMe | RenderFn,
  /**
   * @Private Cursor applied when hovering the popover trigger; accepts any
   * [valid CSS value](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
   */
  cursor?: string,
  /**
   * Open the Popover upon initialization. Primarily for use with uncontrolled
   * components.
   */
  defaultIsOpen?: boolean,
  /** Disables the Popover */
  disabled?: boolean,
  /**
   * Determines whether focus will be set to the trigger when the Popover is
   * closed.
   */
  focusTriggerOnClose?: boolean,
  /** Include an arrow on the Popover content pointing to the trigger */
  hasArrow?: boolean,
  /** Id of the Popover */
  id?: string,
  /**
   * Determines whether the Popover is open. For use with controlled components.
   */
  isOpen?: boolean,
  /**
   * Plugins that are used to alter behavior. See
   * [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers)
   * for options.
   */
  modifiers?: Object,
  /** Called when Popover is closed */
  onClose?: (event: SyntheticEvent<>) => void,
  /** Called when Popover is opened */
  onOpen?: (event: SyntheticEvent<>) => void,
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
  /**
   * Use a Portal to render the Popover to the body rather than as a sibling to
   * the trigger
   */
  usePortal?: boolean
};

type State = {
  highlightedIndex?: ?number, // Appease Dropdown
  isOpen: boolean
};

type Helpers = {
  close: (event: SyntheticEvent<>) => void,
  focusTrigger: () => void,
  open: (event: SyntheticEvent<>) => void
};

type StateAndHelpers = {
  state: State,
  helpers: Helpers
};

type PropGetter = (props?: Object) => Object;
export type RenderFn = (props?: RenderProps) => React$Node;
type RenderProps = {
  props: Object
} & StateAndHelpers;

export const componentTheme = (baseTheme: Object) => ({
  ...popoverArrowComponentTheme(baseTheme),
  ...popoverContentComponentTheme(baseTheme),
  ...baseTheme
});

const Root = createStyledComponent(
  Manager,
  {
    color: null,
    display: 'inline-block'
  },
  {
    displayName: 'Popover',
    forwardProps: ['tag'],
    rootEl: 'span'
  }
);

/**
 * Popovers float over page content and hold supporting information or user controls.
 */
export default class Popover extends Component<Props, State> {
  static defaultProps = {
    focusTriggerOnClose: true,
    hasArrow: true,
    placement: 'bottom'
  };

  state: State = {
    isOpen: Boolean(this.props.defaultIsOpen)
  };

  id: string = this.props.id || `popover-${generateId()}`;

  popoverContent: ?React$Component<*, *>;

  popoverTrigger: ?React$Component<*, *>;

  render() {
    const { modifiers, ...restProps } = this.props;
    const isOpen = this.getControllableValue('isOpen');

    const rootProps = {
      ...restProps,
      tag: 'span'
    };

    return (
      <ModifiersContext.Consumer>
        {(contextModifiers) => {
          rootProps.modifiers = modifiers || contextModifiers;

          return (
            <Root {...rootProps}>
              {this.renderTrigger()}
              {isOpen && this.renderContent()}
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
        }}
      </ModifiersContext.Consumer>
    );
  }

  getStateAndHelpers = (): StateAndHelpers => {
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

  setTriggerRef = (node: ?React$Component<*, *>) => {
    const { triggerRef } = this.props;

    this.popoverTrigger = node;
    triggerRef && triggerRef(node);
  };

  setContentRef = (node: ?React$Component<*, *>) => {
    this.popoverContent = node;
  };

  getContentProps: PropGetter = (props = {}) => {
    const contentId = this.getContentId();
    const {
      content,
      hasArrow,
      modifiers,
      placement,
      subtitle,
      title
    } = this.props;

    return {
      ...props,
      hasArrow,
      id: contentId,
      modifiers,
      placement,
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

  renderContent: RenderFn = (props = {}) => {
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

  getTriggerProps: PropGetter = (props = {}) => {
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

  renderTrigger: RenderFn = (props = {}) => {
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
    const node = findDOMNode(this.popoverTrigger); // eslint-disable-line react/no-find-dom-node
    if (node && node.firstChild && node.firstChild instanceof HTMLElement) {
      node.firstChild.focus();
    }
  };

  handleDocumentClick = (event: SyntheticEvent<>) => {
    if (this.isEventOutsideComponent(event)) {
      this.close(event);
    }
  };

  handleDocumentKeydown = (event: SyntheticKeyboardEvent<>) => {
    if (event.key === 'Escape') {
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
    const popoverContentNode = findDOMNode(this.popoverContent);

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
        popoverContentNode instanceof HTMLElement &&
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
