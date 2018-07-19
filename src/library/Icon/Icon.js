/* @flow */
import React, { Component } from 'react';
import { createStyledComponent, pxToEm } from '../styles';
import { generateId } from '../utils';

type Props = {
  /** Available sizes, including custom - e.g. '5em' or '20px' */
  size?: 'small' | 'medium' | 'large' | string,
  /** SVG content, required for the generic Icon component */
  children?: React$Node,
  /** Fill color */
  color?: string,
  /** Flip the Icon horizontally when used with RTL languages */
  rtl?: boolean,
  /** Alternative text */
  title?: string
};

export const componentTheme = (baseTheme: Object) => ({
  Icon_fill: 'currentcolor',
  Icon_size_small: pxToEm(12),
  Icon_size_medium: pxToEm(16),
  Icon_size_large: pxToEm(20),
  ...baseTheme
});

const iconStyles = ({ color, rtl, size, theme: baseTheme }) => {
  let theme = componentTheme(baseTheme);

  return {
    color,
    fill: theme.Icon_fill,
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
