/* @flow */
import React, { Component } from 'react';
import {
  TabPanelRoot as Root,
  TabPanelOverflowContainer as OverflowContainer
} from './styled';

import type { TabPanelProps } from './types';

export default class TabPanel extends Component<TabPanelProps> {
  static displayName = 'TabPanel';

  render() {
    const { children, tabId, ...restProps } = this.props;
    const rootProps = {
      'aria-labelledby': tabId,
      ...restProps
    };

    return (
      <Root {...rootProps}>
        <OverflowContainer>{children}</OverflowContainer>
      </Root>
    );
  }
}
