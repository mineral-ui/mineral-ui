/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import { composeEventHandlers, generateId } from '../utils';
import PopoverContent from '../Popover/PopoverContent';
import { TooltipRoot as Root, TriggerText } from './styled';
import { DELAY_OPEN, PLACEMENT } from './constants';

import { tooltipPropTypes } from './propTypes';
import {
  TooltipDefaultProps,
  TooltipProps,
  TooltipState,
  TooltipRenderFn,
  TooltipPropGetter
} from './types';

export default class Tooltip extends Component<TooltipProps, TooltipState> {
  static displayName = 'Tooltip';

  static defaultProps: TooltipDefaultProps = {
    hasArrow: true,
    placement: PLACEMENT.bottom
  };

  static propTypes = tooltipPropTypes;

  state = {
    isOpen: Boolean(this.props.defaultIsOpen)
  };

  id: string = this.props.id || `tooltip-${generateId()}`;

  openTimer: ?number;

  componentWillUnmount() {
    this.clearOpenTimer();
  }

  render() {
    const {
      children,
      disabled,

      // Disallow these props passed to Popover
      subtitle: ignoreSubtitle,
      title: ignoreTitle,

      ...restProps
    } = this.props;

    if (disabled) {
      return children;
    }

    const popoverProps = {
      ...restProps,
      children: this.renderTrigger(),
      focusTriggerOnClose: false,
      id: this.id,
      isOpen: this.getControllableValue('isOpen'),
      onClose: this.close,
      onOpen: this.open,
      content: this.renderContent
    };

    return <Root {...popoverProps} />;
  }

  getTriggerProps: TooltipPropGetter = (props = {}) => {
    return {
      ...props,
      'aria-expanded': undefined,
      onBlur: composeEventHandlers(props.onBlur, this.close),
      onFocus: composeEventHandlers(props.onFocus, this.handleDelayedOpen),
      onMouseEnter: composeEventHandlers(
        props.onMouseEnter,
        this.handleDelayedOpen
      ),
      onMouseLeave: composeEventHandlers(props.onMouseLeave, this.close),
      tabIndex: 0
    };
  };

  renderTrigger = () => {
    const { children } = this.props;

    const trigger =
      typeof children === 'string' ? (
        <TriggerText>{children}</TriggerText>
      ) : (
        children
      );

    const child = Children.only(trigger);

    return cloneElement(child, this.getTriggerProps(child.props));
  };

  getContentProps: TooltipPropGetter = (props = {}) => {
    const { content } = this.props;
    const { tabIndex: ignoreTabIndex, ...restProps } = props;

    return {
      ...restProps,
      'aria-live': 'polite',
      children: content,
      role: 'tooltip'
    };
  };

  renderContent: TooltipRenderFn = ({ props } = {}) => {
    return <PopoverContent {...this.getContentProps(props)} />;
  };

  handleDelayedOpen = (event: React.SyntheticEvent) => {
    this.clearOpenTimer();
    const isOpen = this.getControllableValue('isOpen');
    if (!isOpen) {
      this.openTimer = global.setTimeout(() => {
        this.open(event);
      }, DELAY_OPEN);
    }
  };

  clearOpenTimer = () => {
    global.clearTimeout(this.openTimer);
    this.openTimer = null;
  };

  open = (event: React.SyntheticEvent) => {
    if (this.isControlled('isOpen')) {
      this.openActions(event);
    } else {
      this.setState({ isOpen: true }, () => {
        this.openActions(event);
      });
    }
  };

  openActions = (event: React.SyntheticEvent) => {
    this.props.onOpen && this.props.onOpen(event);
  };

  close = (event: React.SyntheticEvent) => {
    this.clearOpenTimer();
    if (this.isControlled('isOpen')) {
      this.closeActions(event);
    } else {
      this.setState({ isOpen: false }, () => {
        this.closeActions(event);
      });
    }
  };

  closeActions = (event: React.SyntheticEvent) => {
    this.props.onClose && this.props.onClose(event);
  };

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}
