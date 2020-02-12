/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import { ICON_SIZE, SHAPE, SIZE } from './constants';
import { avatarPropTypes } from './propTypes';
import { AvatarRoot as Root } from './styled';

import type { AvatarDefaultProps, AvatarProps } from './types';

export default class Avatar extends Component<AvatarProps> {
  static displayName = 'Avatar';

  static defaultProps: AvatarDefaultProps = {
    shape: SHAPE.circle,
    size: SIZE.large
  };

  static propTypes = avatarPropTypes;

  render() {
    const { abbr, children, size, ...restProps } = this.props;
    let icon, noBackground, text;

    Children.map(children, (child) => {
      if (typeof child === 'string') {
        text =
          abbr || child.length > 1 ? (
            <abbr title={child}>{abbr || child.charAt(0)}</abbr>
          ) : (
            <span>{child}</span>
          );
      } else if (
        child.type &&
        child.type.displayName &&
        child.type.displayName.indexOf('Icon') !== -1
      ) {
        icon = cloneElement(child, {
          size: ICON_SIZE[size || Avatar.defaultProps.size]
        });
      } else {
        noBackground = true;
      }
    });

    const rootProps = {
      icon,
      noBackground,
      size,
      ...restProps
    };

    return <Root {...rootProps}>{text || icon || children}</Root>;
  }
}
