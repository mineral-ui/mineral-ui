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
import React from 'react';
import { createStyledComponent, pxToEm } from '../utils';

type Props = {
  /** Rendered content of the component */
  children?: MnrlReactNode,
  /** Disables the menu item */
  disabled?: boolean,
  /** Icon that goes after the children*/
  iconEnd?: React$Element<*>,
  /** Icon that goes before the children */
  iconStart?: React$Element<*>,
  /** Called with the click event */
  onClick?: (event: Object) => void,
  /** Secondary text */
  secondaryText?: MnrlReactNode,
  /** Available variants */
  variant?: 'regular' | 'danger' | 'success' | 'warning'
};

// Button_padding_large: pxToEm(8),
//
// ButtonContent_lineHeight_large: pxToEm(24),
// ButtonContent_padding_large: pxToEm(6),
//
// ButtonIcon_padding_large: pxToEm(4),

export const componentTheme = (baseTheme: Object) => ({
  MenuItem_backgroundColor: baseTheme.color_white,
  MenuItem_color_text: baseTheme.color_text,
  MenuItem_paddingH: baseTheme.spacing_double,
  MenuItem_paddingV: baseTheme.spacing_half,

  MenuItemContent_fontSize: baseTheme.fontSize_ui,

  ...baseTheme
});

const menuItemStyles = props => {
  const { variant } = props;
  let theme = componentTheme(props.theme);

  if (variant !== 'regular') {
    // prettier-ignore
    theme = {
      ...theme,
      MenuItem_color_text: theme[`color_text_${variant}`]
    };
  }

  return {
    backgroundColor: theme.MenuItem_backgroundColor,
    color: theme.MenuItem_color_text,
    fontSize: theme.MenuItem_fontSize_ui,
    padding: `${theme.MenuItem_paddingV} ${theme.MenuItem_paddingH}`
  };
};

const contentStyles = props => {
  const theme = componentTheme(props.theme);

  return {
    display: 'block',
    fontSize: theme.MenuItemContent_fontSize
    // padding: `0 ${getNormalizedValue(
    //   theme[`MenuItemContent_padding_${size}`],
    //   fontSize
    // )}`
  };
};

const innerStyles = {
  display: 'inline-flex',
  maxHeight: '100%',
  width: '100%'
};

const Root = createStyledComponent('button', menuItemStyles, {
  displayName: 'MenuItem'
});
const Content = createStyledComponent('span', contentStyles);
const Inner = createStyledComponent('span', innerStyles);

/**
 * Menu item component
 */
export default function MenuItem({ children, ...restProps }: Props) {
  const rootProps = {
    ...restProps
  };
  return (
    <Root {...rootProps}>
      <Inner>
        {/* {startIcon} */}
        {children &&
          <Content>
            {children}
          </Content>}
        {/* {endIcon} */}
      </Inner>
    </Root>
  );
}
