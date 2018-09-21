/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import { Target } from 'react-popper';
import { createStyledComponent } from '../styles';

type Props = {
  children: React$Node,
  /**
   * Cursor applied when hovering the popover trigger; accepts any
   * [valid CSS value](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
   */
  cursor?: string
};

const Root = createStyledComponent(
  Target,
  ({ cursor }) => ({
    cursor,
    display: 'inline-block'
  }),
  {
    displayName: 'PopoverTrigger'
  }
);

export default class PopoverTrigger extends Component<Props> {
  render() {
    const { children, cursor, ...restProps } = this.props;
    const rootProps = {
      component: 'span',
      cursor
    };

    return (
      <Root {...rootProps}>
        {cloneElement(Children.only(children), restProps)}
      </Root>
    );
  }
}
