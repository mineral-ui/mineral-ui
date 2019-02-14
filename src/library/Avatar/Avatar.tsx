/* @flow */
import React, {
  Children,
  cloneElement,
  Component,
  isValidElement
} from 'react';
import { AvatarRoot as Root } from './styled';
import { ICON_SIZE, SHAPE, SIZE } from './constants';

import { avatarPropTypes } from './propTypes';
import { AvatarDefaultProps, AvatarProps } from './types';

export default class Avatar extends Component<AvatarProps> {
  static displayName = 'Avatar';

  static defaultProps: AvatarDefaultProps = {
    shape: SHAPE.circle,
    size: SIZE.large
  };

  static propTypes = avatarPropTypes;

  render() {
    const { abbr, children, size, ...restProps } = this.props;
    let icon: React.ReactElement<any> | undefined;
    let noBackground: boolean;
    let text: React.ReactElement<any> | undefined;

    Children.map(children, (child) => {
      if (typeof child === 'string') {
        text =
          abbr || child.length > 1 ? (
            <abbr title={child}>{abbr || child.charAt(0)}</abbr>
          ) : (
            <span>{child}</span>
          );
      } else if (
        isValidElement(child) &&
        child.type.displayName &&
        child.type.displayName.indexOf('Icon') !== -1
      ) {
        icon = cloneElement<any>(child, {
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
