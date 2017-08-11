/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React, { PureComponent } from 'react';
import {
  createStyledComponent,
  pxToEm,
  generateId
} from '@mineral-ui/component-utils';

type Props = {
  /** Available sizes, including custom - e.g. '5em' or '20px' */
  size?: 'small' | 'medium' | 'large' | string,
  /** SVG content, required for the generic Icon component */
  children?: MnrlReactNode,
  /** Fill color, defaults to theme.color_gray_60 */
  color?: string,
  /** Flip the icon horizontally when used with RTL languages */
  rtl?: boolean,
  /** Alternative text */
  title?: string
};

const iconStyles = ({ color, rtl, size, theme: baseTheme }) => {
  const theme = {
    Icon_fill: baseTheme.color_gray_60,
    Icon_size_small: pxToEm(12),
    Icon_size_medium: pxToEm(16),
    Icon_size_large: pxToEm(20),
    ...baseTheme
  };

  return {
    fill: color || theme.Icon_fill,
    fontSize: theme.fontSize_base,
    height: theme[`Icon_size_${size}`] || size,
    transform: theme.direction === 'rtl' && rtl && 'scaleX(-1)',
    width: theme[`Icon_size_${size}`] || size
  };
};

const Root = createStyledComponent('svg', iconStyles, { rootEl: 'svg' });

/**
 * The Icon component displays a graphic symbol representing an object or function.
 *
 * The package provides a large number of prepackaged icon components as well
 * as a generic icon component to which you can provide your own SVG.
 */
export default class Icon extends PureComponent {
  static displayName = 'Icon';

  static defaultProps: Object = {
    size: 'medium'
  };

  props: Props;

  uniqueId: string = generateId();

  render() {
    const { size, title, children, ...restProps } = this.props;
    const titleElementId = `Icon-title-${this.uniqueId}`;
    const rootProps = {
      'aria-hidden': title ? null : true,
      'aria-labelledby': title && titleElementId,
      role: 'icon',
      size,
      viewBox: '0 0 24 24',
      ...restProps
    };

    const titleProps = {
      id: titleElementId
    };

    return (
      <Root {...rootProps}>
        {title &&
          <title {...titleProps}>
            {title}
          </title>}
        {children}
      </Root>
    );
  }
}
