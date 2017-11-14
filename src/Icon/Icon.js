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
import React, { Component } from 'react';
import { createStyledComponent, pxToEm } from '../styles';
import { generateId } from '../utils';

type Props = {
  /** Available sizes, including custom - e.g. '5em' or '20px' */
  size?: 'small' | 'medium' | 'large' | string,
  /** SVG content, required for the generic Icon component */
  children?: React$Node,
  /** Fill color, defaults to theme.color_gray_60 */
  color?: string,
  /** Flip the Icon horizontally when used with RTL languages */
  rtl?: boolean,
  /** Alternative text */
  title?: string
};

export const componentTheme = (baseTheme: Object) => ({
  Icon_fill: baseTheme.color_gray_60,
  Icon_size_small: pxToEm(12),
  Icon_size_medium: pxToEm(16),
  Icon_size_large: pxToEm(20),
  ...baseTheme
});

const iconStyles = ({ color, rtl, size, theme: baseTheme }) => {
  let theme = componentTheme(baseTheme);

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
 * Icons use graphical symbols to represent an object or concept in your UI.
 * They can be used to aid comprehension of core actions in your app, and to provide feedback for user input.
 *
 * The Icon component allows you to use your own SVG to easily create an icon.
 *
 * In addition to the generic Icon component, Mineral UI provides a large number of
 * pre-built Icon components, available separately in the [mineral-ui-icons](https://www.npmjs.com/package/mineral-ui-icons) package.
 */
export default class Icon extends Component<Props> {
  static displayName = 'Icon';

  static defaultProps: Object = {
    size: 'medium'
  };

  props: Props;

  id: string = `icon-${generateId()}`;

  render() {
    const { title, children, ...restProps } = this.props;
    const titleElementId = `icon-title-${this.id}`;
    const rootProps = {
      'aria-hidden': title ? null : true,
      'aria-labelledby': title && titleElementId,
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
