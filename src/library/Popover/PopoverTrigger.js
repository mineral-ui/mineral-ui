/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import { PopoverTriggerRoot as Root } from './styled';

import type { PopoverTriggerProps } from './types';

export default class PopoverTrigger extends Component<PopoverTriggerProps> {
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
