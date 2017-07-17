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
import { ellipsis } from 'polished';
import {
  createStyledComponent,
  getNormalizedValue
} from '@mineral-ui/component-utils';

type Props = {
  /** Rendered content of the component */
  children?: MnrlReactNode,
  /** Displays a circular button */
  circular?: boolean,
  /** Disables the button */
  disabled?: boolean,
  /** Stretch Button to fill its container */
  fullWidth?: boolean,
  /** Icon that goes after the children*/
  iconEnd?: React$Element<*>,
  /** Icon that goes before the children */
  iconStart?: React$Element<*>,
  /** Display a minimal button */
  minimal?: boolean,
  /** Called with the click event */
  onClick?: (event: Object) => void,
  /** Display a primary button */
  primary?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large',
  /** Available types */
  type?: 'button' | 'submit',
  /** Available variants */
  variant?: 'regular' | 'danger' | 'success' | 'warning'
};

const buttonTheme = (props, baseTheme) => ({
  Button_backgroundColor: baseTheme.color_gray_10,
  Button_backgroundColor_active: baseTheme.color_theme_10,
  Button_backgroundColor_focus: baseTheme.color_gray_10,
  Button_backgroundColor_hover: baseTheme.color_gray_20,
  Button_backgroundColor_minimal_active: baseTheme.color_theme_10,
  Button_backgroundColor_minimal_hover: baseTheme.color_gray_20,
  Button_backgroundColor_primary: baseTheme.color_theme_50,
  Button_backgroundColor_primary_active: baseTheme.color_theme_30,
  Button_backgroundColor_primary_focus: baseTheme.color_theme_50,
  Button_backgroundColor_primary_hover: baseTheme.color_theme_40,
  Button_backgroundImage_primary_active: 'none',
  Button_backgroundImage_primary_hover: `radial-gradient(circle, ${baseTheme.color_theme_40} 0%, ${baseTheme.color_theme_50} 100%)`,
  Button_borderColor: baseTheme.borderColor,
  Button_borderColor_active: baseTheme.borderColor_active,
  Button_borderColor_focus: baseTheme.borderColor_focus,
  Button_borderColor_hover: baseTheme.borderColor,
  Button_borderColor_primary: 'transparent',
  Button_borderColor_primary_active: 'transparent',
  Button_borderColor_primary_hover: 'transparent',
  Button_borderColor_primary_focus: baseTheme.color_theme_100,
  Button_borderRadius: baseTheme.borderRadius_1,
  Button_borderWidth: '1px',
  Button_boxShadow: baseTheme.shadow_1,
  Button_boxShadow_focus: `0 0 0 1px ${baseTheme.borderColor_focus}`,
  Button_boxShadow_minimal_focus: `0 0 0 1px ${baseTheme.borderColor_focus}`,
  Button_boxShadow_primary_focus: `0 0 0 1px ${baseTheme.color_theme_100}, rgba(0,0,0,0.25) 0 2px 2px`,
  Button_color_text: baseTheme.color_gray_80,
  Button_color_text_minimal: baseTheme.color_link,
  Button_color_text_primary: baseTheme.color_text_onprimary,
  Button_fontSize: baseTheme.fontSize_ui,
  Button_fontSize_small: '1.5em',
  Button_fontWeight: baseTheme.fontWeight_bold,
  Button_padding: baseTheme.spacing_single,
  Button_padding_large: baseTheme.spacing_double,
  [`Button_size_${props.size}`]: baseTheme[`size_${props.size}`],

  Button_icon_margin: baseTheme.spacing_single,
  Button_icon_margin_small: baseTheme.spacing_half,
  ...baseTheme
});

const buttonStyles = (props, baseTheme) => {
  let theme = buttonTheme(props, baseTheme);

  const paddingLeftRight = props.size === 'large'
    ? theme.Button_padding_large
    : theme.Button_padding;

  // These values were chosen to add up to the height of each size Button
  const paddingTopBottom = props.size === 'small' ? '0.375em' : '0.875em';

  if (props.variant !== 'regular') {
    // prettier-ignore
    theme = {
      ...theme,
      Button_backgroundColor_active: theme[`backgroundColor_input_${props.variant}`],
      Button_backgroundColor_minimal_active: theme[`backgroundColor_input_${props.variant}`],
      Button_backgroundColor_primary: theme[`backgroundColor_${props.variant}`],
      Button_backgroundColor_primary_active: theme[`backgroundColor_${props.variant}_active`],
      Button_backgroundColor_primary_focus: theme[`backgroundColor_${props.variant}_focus`],
      Button_backgroundColor_primary_hover: theme[`backgroundColor_${props.variant}_hover`],
      Button_backgroundImage_primary_hover: `radial-gradient(circle, ${theme[`backgroundColor_${props.variant}_active`]} 0%, ${theme[`backgroundColor_${props.variant}`]} 100%)`,
      Button_borderColor_active: theme[`borderColor_${props.variant}`],
      Button_borderColor_focus: theme[`borderColor_${props.variant}_focus`],
      Button_borderColor_minimal_focus: theme[`borderColor_${props.variant}_focus`],
      Button_borderColor_primary_focus: theme[`borderColor_${props.variant}_focus`],
      Button_boxShadow_focus: `0 0 0 1px ${theme[`borderColor_${props.variant}_focus`]}`,
      Button_boxShadow_primary_focus: `0 0 0 1px ${theme[`borderColor_${props.variant}_focus`]}, rgba(0,0,0,0.25) 0 2px 2px`,
      Button_color_text: theme[`backgroundColor_${props.variant}`],
      Button_color_text_minimal: theme[`color_text_${props.variant}`],
      Button_color_text_primary: theme[`color_text_on${props.variant}`]
    };
  }

  return {
    backgroundColor: (() => {
      if (props.disabled && !props.minimal) {
        return theme.color_gray_30;
      } else if (props.primary) {
        return theme.Button_backgroundColor_primary;
      } else if (props.minimal) {
        return 'transparent';
      } else {
        return theme.Button_backgroundColor;
      }
    })(),
    borderColor: (() => {
      if (props.disabled) {
        return 'transparent';
      } else if (props.primary) {
        return theme.Button_borderColor_primary;
      } else if (props.minimal) {
        return 'transparent';
      } else {
        return theme.Button_borderColor;
      }
    })(),
    borderRadius: props.circular
      ? `${parseFloat(theme[`Button_size_${props.size}`]) / 2}em`
      : theme.Button_borderRadius,
    borderStyle: 'solid',
    borderWidth: theme.Button_borderWidth,
    boxShadow:
      props.primary &&
        !props.minimal &&
        !props.disabled &&
        theme.Button_boxShadow,
    color: (() => {
      if (props.disabled) {
        return theme.color_text_disabled;
      } else if (props.primary) {
        return theme.Button_color_text_primary;
      } else if (props.minimal) {
        return theme.Button_color_text_minimal;
      } else {
        return theme.Button_color_text;
      }
    })(),
    cursor: props.disabled ? 'default' : 'pointer',
    fontWeight: theme.Button_fontWeight,
    height: theme[`Button_size_${props.size}`],
    padding: props.circular
      ? `${paddingTopBottom} 0`
      : `${paddingTopBottom} ${paddingLeftRight}`,
    verticalAlign: 'middle',
    width: (() => {
      if (props.circular) {
        return theme[`Button_size_${props.size}`];
      } else if (props.fullWidth) {
        return '100%';
      }
    })(),
    '&:focus, &[data-simulate-focus]': {
      backgroundColor: (() => {
        if (props.primary) {
          return theme.Button_backgroundColor_primary_focus;
        } else if (props.minimal) {
          return theme.Button_backgroundColor_minimal_focus;
        } else {
          return theme.Button_backgroundColor_focus;
        }
      })(),
      borderColor: props.primary
        ? theme.Button_borderColor_primary_focus
        : theme.Button_borderColor_focus,
      boxShadow: props.primary
        ? theme.Button_boxShadow_primary_focus
        : theme.Button_boxShadow_focus,
      '&:hover, &[data-simulate-hover]': {
        borderColor: props.primary
          ? theme.Button_borderColor_primary_focus
          : theme.Button_borderColor_focus
      },
      // `:active` must be last, to follow LVHFA order:
      // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
      '&:active, &[data-simulate-active]': {
        borderColor: theme.Button_borderColor_focus,
        boxShadow: theme.Button_boxShadow_focus
      }
    },
    '&:hover, &[data-simulate-hover]': {
      backgroundColor: (() => {
        if (!props.disabled) {
          if (props.primary) {
            return theme.Button_backgroundColor_primary_hover;
          } else if (props.minimal) {
            return theme.Button_backgroundColor_minimal_hover;
          } else {
            return theme.Button_backgroundColor_hover;
          }
        }
      })(),
      backgroundImage: props.disabled
        ? 'none'
        : props.primary && theme.Button_backgroundImage_primary_hover,
      borderColor: (() => {
        if (!props.disabled) {
          if (props.primary) {
            return theme.Button_borderColor_primary_hover;
          } else if (props.minimal) {
            return 'transparent';
          } else {
            return theme.Button_borderColor_hover;
          }
        }
      })()
    },
    // `:active` must be last, to follow LVHFA order:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
    '&:active, &[data-simulate-active]': {
      backgroundColor: (() => {
        if (!props.disabled) {
          if (props.primary) {
            return theme.Button_backgroundColor_primary_active;
          } else if (props.minimal) {
            return theme.Button_backgroundColor_minimal_active;
          } else {
            return theme.Button_backgroundColor_active;
          }
        }
      })(),
      backgroundImage:
        props.primary && theme.Button_backgroundImage_primary_active,
      borderColor: (() => {
        if (!props.disabled) {
          if (props.primary) {
            return theme.Button_borderColor_primary_active;
          } else if (props.minimal) {
            return 'transparent';
          } else {
            return theme.Button_borderColor_active;
          }
        }
      })(),
      boxShadow: 'none'
    },
    '&::-moz-focus-inner': { border: 0 }
  };
};
const contentStyles = (props, baseTheme) => {
  const theme = buttonTheme(props, baseTheme);

  const fontSize = props.size === 'small'
    ? theme.Button_fontSize_small
    : theme.Button_fontSize;

  return {
    ...ellipsis('100%'),

    display: 'block',
    fontSize,
    // Values here are based on the appropriate Icon size for each Button size
    lineHeight: props.size === 'large'
      ? getNormalizedValue('3em', fontSize)
      : getNormalizedValue('2em', fontSize)
  };
};

const innerStyles = (props, baseTheme) => {
  const theme = buttonTheme(props, baseTheme);

  const iconMargin = props.size === 'small'
    ? theme.Button_icon_margin_small
    : theme.Button_icon_margin;

  return {
    display: 'inline-flex',
    flexDirection: theme.direction === 'rtl' && 'row-reverse',
    justifyContent: 'center',
    width: '100%',

    '& > [role="icon"]': {
      display: 'block',

      '&:not(:only-child)': {
        flex: '0 0 auto',

        '&:first-child': {
          marginLeft: theme.direction === 'rtl' && iconMargin,
          marginRight: theme.direction === 'ltr' && iconMargin
        },
        '&:last-child': {
          marginLeft: theme.direction === 'ltr' && iconMargin,
          marginRight: theme.direction === 'rtl' && iconMargin
        }
      }
    }
  };
};

const Root = createStyledComponent('button', buttonStyles, {
  includeStyleReset: true
});
const Content = createStyledComponent('span', contentStyles);

const Inner = createStyledComponent('span', innerStyles);

/**
 * The Button component represents a clickable button.
 */
export default function Button({
  children,
  iconStart,
  iconEnd,
  size = 'medium',
  type = 'button',
  variant = 'regular',
  ...restProps
}: Props) {
  const rootProps = {
    size,
    type,
    variant,
    ...restProps
  };

  const iconSize = size === 'large' ? 'medium' : 'small';
  const startIcon =
    iconStart && React.cloneElement(iconStart, { size: iconSize });
  const endIcon = iconEnd && React.cloneElement(iconEnd, { size: iconSize });

  return (
    <Root {...rootProps}>
      <Inner size={size}>
        {startIcon}
        {children && <Content size={size}>{children}</Content>}
        {endIcon}
      </Inner>
    </Root>
  );
}
