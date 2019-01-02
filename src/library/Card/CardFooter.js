/* @flow */
import React, { Component } from 'react';
import IconExpandLess from '../Icon/IconExpandLess';
import IconExpandMore from '../Icon/IconExpandMore';
import {
  CardFooterRoot as Root,
  CardFooterContent as Content,
  CardFooterTitle as Title,
  CardFooterTitleContent as TitleContent,
  CardFooterToggleButton as ToggleButton
} from './styled';

import { cardFooterPropTypes } from './propTypes';
import type {
  CardFooterDefaultProps,
  CardFooterProps,
  CardFooterState
} from './types';

export default class CardFooter extends Component<
  CardFooterProps,
  CardFooterState
> {
  static displayName = 'CardFooter';

  static defaultProps: CardFooterDefaultProps = {
    triggerTitle: (isOpen: boolean) =>
      isOpen ? 'Collapse contents' : 'Expand contents'
  };

  static propTypes = cardFooterPropTypes;

  state = {
    isOpen: !this.props.expandable || Boolean(this.props.defaultIsOpen)
  };

  render() {
    const {
      children,
      expandable,
      onClose: ignoreOnClose,
      onOpen: ignoreOnOpen,
      title,
      triggerTitle = CardFooter.defaultProps.triggerTitle,
      variant,
      ...restProps
    } = this.props;

    const rootProps = {
      variant,
      ...restProps
    };

    const isOpen = Boolean(this.getControllableValue('isOpen'));

    const ExpandCollapseIcon = isOpen ? IconExpandLess : IconExpandMore;

    return (
      <Root {...rootProps}>
        {title && (
          <Title>
            <TitleContent>{title}</TitleContent>
            {expandable && (
              <ToggleButton
                iconStart={<ExpandCollapseIcon title={triggerTitle(isOpen)} />}
                minimal
                onClick={this.toggleOpen}
                variant={variant}
              />
            )}
          </Title>
        )}
        {isOpen && children && <Content>{children}</Content>}
      </Root>
    );
  }

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
    this.props.onClose && this.props.onClose(event);
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
