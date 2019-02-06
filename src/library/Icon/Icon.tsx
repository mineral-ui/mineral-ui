/* @flow */
import React, { Component } from 'react';
import { generateId } from '../utils';
import { IconRoot as Root } from './styled';
import { SIZE } from './constants';

import { iconPropTypes } from './propTypes';
import { IconDefaultProps, IconProps } from './types';

export default class Icon extends Component<IconProps> {
  static displayName = 'Icon';

  static propTypes = iconPropTypes;

  static defaultProps: IconDefaultProps = {
    size: SIZE.medium
  };

  id: string = `icon-${generateId()}`;

  render() {
    const { title, children, ...restProps } = this.props;
    const titleElementId = `icon-title-${this.id}`;
    const rootProps = {
      'aria-hidden': title ? null : true,
      'aria-labelledby': title && titleElementId,
      focusable: 'false',
      role: 'img',
      viewBox: '0 0 24 24',
      ...restProps
    };

    const titleProps = {
      id: titleElementId
    };

    return (
      <Root {...rootProps}>
        {title && <title {...titleProps}>{title}</title>}
        {children}
      </Root>
    );
  }
}
