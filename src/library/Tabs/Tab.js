/* @flow */
import React, { Component } from 'react';
import Truncate from '../Truncate';
import { TabAnchor as Anchor } from './styled';

import { tabPropTypes } from './propTypes';
import type { TabProps } from './types';

export default class Tab extends Component<TabProps> {
  static propTypes = tabPropTypes;

  render() {
    const {
      children,
      disabled,
      icon,
      index,
      panelId,
      selected,
      ...restProps
    } = this.props;
    const anchorProps = {
      'aria-controls': panelId,
      'aria-disabled': disabled,
      'aria-selected': selected,
      'data-index': index,
      disabled,
      href: panelId && `#${panelId}`,
      iconStart: icon,
      minimal: true,
      selected,
      tabIndex: selected ? 0 : -1,
      ...restProps
    };

    return (
      <li role="presentation">
        <Anchor {...anchorProps}>
          <Truncate>{children}</Truncate>
        </Anchor>
      </li>
    );
  }
}
