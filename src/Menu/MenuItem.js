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
import { createStyledComponent, getNormalizedValue, pxToEm } from '../utils';
import Button from '../Button';
import { componentTheme as buttonComponentTheme } from '../Button/Button';
import IconChevronRight from '../Icon/IconChevronRight';

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
  variant?: 'regular' | 'danger' | 'success' | 'warning',
  /** Displays an arrow in place of the end icon */
  withArrow?: boolean
};

// Button_padding_large: pxToEm(8),
//
// ButtonContent_lineHeight_large: pxToEm(24),
// ButtonContent_padding_large: pxToEm(6),
//
// ButtonIcon_padding_large: pxToEm(4),

export const componentTheme = (baseTheme: Object) => ({
  MenuItem_backgroundColor: baseTheme.color_white,
  MenuItem_backgroundColor_active: baseTheme.color_theme_50,
  MenuItem_backgroundColor_focus: baseTheme.color_theme_10,
  MenuItem_backgroundColor_hover: baseTheme.color_theme_10,
  MenuItem_color_text: baseTheme.color_text,
  MenuItem_color_text_active: baseTheme.color_text_onprimary,
  MenuItem_fontWeight: baseTheme.fontWeight_regular,
  MenuItem_paddingH: baseTheme.spacing_double,
  MenuItem_paddingV: baseTheme.spacing_half,

  MenuItemArrow_fill: baseTheme.color_caption,

  MenuItemContent_fontSize: baseTheme.fontSize_ui,

  MenuItemSecondaryText_color_text: baseTheme.color_caption,
  MenuItemSecondaryText_fontSize: pxToEm(12),

  ...baseTheme
});

const menuItemStyles = props => {
  const { disabled, variant, withArrow } = props;
  let theme = {
    ...componentTheme(props.theme),
    ...buttonComponentTheme(props.theme)
  };

  if (variant !== 'regular') {
    // prettier-ignore
    theme = {
      ...theme,
      MenuItem_backgroundColor_active: theme[`backgroundColor_${variant}_hover`],
      MenuItem_backgroundColor_focus: theme[`backgroundColor_input_${variant}`],
      MenuItem_backgroundColor_hover: theme[`backgroundColor_input_${variant}`],
      MenuItem_color_text_active: theme[`color_text_on${variant}`]
    };
  }

  // if (props.iconStart) {
  //   console.log('pxToEm(3)', pxToEm(3));
  //   console.log('theme.ButtonContent_fontSize', theme.ButtonContent_fontSize);
  // }

  return {
    backgroundColor: theme.MenuItem_backgroundColor,
    border: 0,
    borderRadius: 0,
    color: !disabled && variant === 'regular' && theme.MenuItem_color_text,
    fontWeight: theme.MenuItem_fontWeight,
    height: 'auto',

    '&:hover': {
      backgroundColor: !disabled && theme.MenuItem_backgroundColor_hover
    },

    '&:focus': {
      backgroundColor: theme.MenuItem_backgroundColor_focus,
      border: 0,
      boxShadow: 0
    },

    '&:active': {
      backgroundColor: !disabled && theme.MenuItem_backgroundColor_active,
      color: !disabled && theme.MenuItem_color_text_active
    },

    // ButtonInner
    '& > span': {
      alignItems: 'start',
      display: 'inline-flex',
      justifyContent: 'space-between'
    },

    // ButtonContent
    '& > span > span': {
      display: 'flex',
      flex: '1 1 auto',
      lineHeight: theme.lineHeight,
      justifyContent: 'space-between',
      overflow: 'initial',
      paddingBottom: getNormalizedValue(
        pxToEm(4),
        theme.ButtonContent_fontSize
      ),
      paddingTop: getNormalizedValue(pxToEm(3), theme.ButtonContent_fontSize),
      textAlign: theme.direction === 'ltr' ? 'left' : 'right',
      textOverflow: 'initial',
      whiteSpace: 'initial'
    },

    '& [role="icon"]': {
      fill: (() => {
        if (!disabled && withArrow) {
          return theme.color_gray_60;
        } else if (!disabled && variant === 'regular') {
          return theme.color_theme_70;
        }
      })(),
      flex: '0 0 auto'
    }
  };
};

const secondaryTextStyles = props => {
  let theme = {
    ...componentTheme(props.theme),
    ...buttonComponentTheme(props.theme)
  };

  const margin = getNormalizedValue(
    theme.spacing_single,
    theme.MenuItemSecondaryText_fontSize
  );

  return {
    color: theme.MenuItemSecondaryText_color_text,
    fontSize: theme.MenuItemSecondaryText_fontSize,
    marginLeft: theme.direction === 'ltr' && margin,
    marginRight: theme.direction === 'rtl' && margin,
    // The regular text fontSize is larger than that of the secondary text.
    // This magic number re-aligns both sets of text vertically.
    paddingTop: getNormalizedValue(
      pxToEm(3),
      theme.MenuItemSecondaryText_fontSize
    )
  };
};

const Root = createStyledComponent(Button, menuItemStyles, {
  displayName: 'MenuItem'
});
const SecondaryText = createStyledComponent('span', secondaryTextStyles);

/**
 * Menu item component
 */
export default function MenuItem({
  children,
  iconEnd,
  secondaryText,
  variant = 'regular',
  withArrow,
  ...restProps
}: Props) {
  // debugger;
  const endIcon = withArrow ? <IconChevronRight /> : iconEnd;

  const rootProps = {
    iconEnd: endIcon,
    fullWidth: true,
    size: 'large',
    minimal: true,
    variant,
    withArrow,
    ...restProps
  };

  return (
    <Root {...rootProps}>
      <span>
        {children}
      </span>
      {SecondaryText &&
        <SecondaryText>
          {secondaryText}
        </SecondaryText>}
    </Root>
  );
}
