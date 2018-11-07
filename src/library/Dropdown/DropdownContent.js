/* @flow */
import React, { Component } from 'react';
import { DropdownContentRoot as Root } from './styled';

import type { DropdownContentProps } from './types';

export default class DropdownContent extends Component<DropdownContentProps> {
  render() {
    const { children, ...rootProps } = this.props;

    return (
      <Root {...rootProps}>
        {({ popperProps, restProps }) => {
          const wrapperProps = {
            ...popperProps,
            ...restProps
          };

          return <div {...wrapperProps}>{children}</div>;
        }}
      </Root>
    );
  }
}
