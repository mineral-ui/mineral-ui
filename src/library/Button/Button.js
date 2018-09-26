/* @flow */
import React, { Component, cloneElement } from 'react';
import memoizeOne from 'memoize-one';
import { ellipsis } from 'polished';
import { createStyledComponent, pxToEm, getNormalizedValue } from '../styles';

type Props = {
  /** Rendered content of the component */
  children?: React$Node,
  /** Displays a circular Button */
  circular?: boolean,
  /** Disables the Button */
  disabled?: boolean,
  /** Element to be used as the root node - e.g. `a` can be used to create a link that is styled like a Button */
  element?: $FlowFixMe, // Should allow string | React class
  /** Stretch Button to fill its container */
  fullWidth?: boolean,
  /** Icon that goes after the children*/
  iconEnd?: React$Element<*>,
  /** Icon that goes before the children */
  iconStart?: React$Element<*>,
  /** Display a minimal Button */
  minimal?: boolean,
  /** Called with the click event */
  onClick?: (event: SyntheticEvent<>) => void,
  /** Display a primary Button */
  primary?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Available types */
  type?: string,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

// prettier-ignore
export const componentTheme = (baseTheme: Object) => ({
  Button_backgroundColor: baseTheme.backgroundColor,
  Button_backgroundColor_active: baseTheme.backgroundColor_active,
  Button_backgroundColor_focus: baseTheme.backgroundColor_focus,
  Button_backgroundColor_hover: baseTheme.backgroundColor_hover,
  Button_backgroundColor_minimal_active: baseTheme.backgroundColor_active,
  Button_backgroundColor_minimal_hover: baseTheme.backgroundColor_hover,
  Button_backgroundColor_primary: baseTheme.backgroundColor_themePrimary,
  Button_backgroundColor_primary_active: baseTheme.backgroundColor_themePrimary_active,
  Button_backgroundColor_primary_focus: baseTheme.backgroundColor_themePrimary_focus,
  Button_backgroundColor_primary_hover: baseTheme.backgroundColor_themePrimary_hover,
  Button_borderColor: baseTheme.borderColor,
  Button_borderColor_active: baseTheme.borderColor_theme_active,
  Button_borderColor_focus: baseTheme.borderColor_theme_focus,
  Button_borderColor_hover: baseTheme.borderColor_theme_hover,
  Button_borderRadius: baseTheme.borderRadius_1,
  Button_borderWidth: 1, // px
  Button_boxShadow_focus: `0 0 0 1px ${baseTheme.boxShadow_focusInner}, 0 0 0 2px ${baseTheme.borderColor_theme_focus}`,
  Button_color: baseTheme.color_theme,
  Button_color_minimal: baseTheme.color_theme,
  Button_color_primary: baseTheme.color_themePrimary,
  Button_fontWeight: baseTheme.fontWeight_semiBold,
  Button_paddingHorizontal: baseTheme.space_inset_sm,
  Button_paddingIconOnly_small: pxToEm(3),
  Button_paddingIconOnly_medium: pxToEm(7),
  Button_paddingIconOnly_large: pxToEm(7),
  Button_paddingIconOnly_jumbo: pxToEm(13),
  Button_height_small: baseTheme.size_small,
  Button_height_medium: baseTheme.size_medium,
  Button_height_large: baseTheme.size_large,
  Button_height_jumbo: baseTheme.size_jumbo,

  ButtonContent_fontSize: baseTheme.fontSize_ui,
  ButtonContent_fontSize_small: pxToEm(12),

  ButtonIcon_color: baseTheme.icon_color_theme,
  ButtonIcon_margin: baseTheme.space_inset_sm,

  ...baseTheme
});

function chooseColor({ disabled, primary, minimal }: Props, theme) {
  if (disabled) {
    return theme.color_disabled;
  } else if (primary) {
    return theme.Button_color_primary;
  } else if (minimal) {
    return theme.Button_color_minimal;
  } else {
    return theme.Button_color;
  }
}

const styles = {
  button: ({
    circular,
    disabled,
    fullWidth,
    minimal,
    primary,
    size,
    text,
    theme: baseTheme,
    variant
  }) => {
    let theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';
    const firstChildMarginProperty = rtl ? 'marginLeft' : 'marginRight';
    const lastChildMarginProperty = rtl ? 'marginRight' : 'marginLeft';

    if (variant) {
      // prettier-ignore
      theme = {
        ...theme,
        Button_backgroundColor_primary: theme[`backgroundColor_${variant}Primary`],
        Button_backgroundColor_primary_active: theme[`backgroundColor_${variant}Primary_active`],
        Button_backgroundColor_primary_focus: theme[`backgroundColor_${variant}Primary_focus`],
        Button_backgroundColor_primary_hover: theme[`backgroundColor_${variant}Primary_hover`],
        Button_borderColor_active: theme[`borderColor_${variant}_active`],
        Button_borderColor_focus: theme[`borderColor_${variant}_focus`],
        Button_borderColor_hover: theme[`borderColor_${variant}_hover`],
        Button_boxShadow_focus: `0 0 0 1px ${theme.boxShadow_focusInner}, 0 0 0 2px ${theme[`borderColor_${variant}_focus`]}`,
        Button_color: theme[`color_${variant}`],
        Button_color_primary: theme[`color_${variant}Primary`],
        Button_color_minimal: theme[`color_${variant}`],
        ButtonIcon_color: theme[`icon_color_${variant}`]
      };
    }

    const color = chooseColor({ disabled, primary, minimal }, theme);
    return {
      backgroundColor: (() => {
        if (disabled && !minimal) {
          return theme.backgroundColor_disabled;
        } else if (primary) {
          return theme.Button_backgroundColor_primary;
        } else if (minimal) {
          return 'transparent';
        } else {
          return theme.Button_backgroundColor;
        }
      })(),
      borderColor:
        disabled || primary || minimal
          ? 'transparent'
          : theme.Button_borderColor,
      borderRadius: circular
        ? `${parseFloat(theme[`Button_height_${size}`]) / 2}em`
        : theme.Button_borderRadius,
      borderStyle: 'solid',
      borderWidth: `${theme.Button_borderWidth}px`,
      color,
      cursor: disabled ? 'default' : 'pointer',
      display: 'inline-block',
      fontWeight: theme.Button_fontWeight,
      height: theme[`Button_height_${size}`],
      margin: 0,
      // if the user puts in a small icon in a large button
      // we want to force the button to be round/square
      // (really just pertinent on icon-only buttons)
      minWidth: theme[`Button_height_${size}`],
      padding:
        text === undefined
          ? theme[`Button_paddingIconOnly_${size}`]
          : `0 ${theme.Button_paddingHorizontal}`,
      textDecoration: 'none',
      verticalAlign: 'middle',
      width: fullWidth && '100%',
      '&:focus': {
        backgroundColor: (() => {
          if (primary) {
            return theme.Button_backgroundColor_primary_focus;
          } else if (minimal) {
            return theme.Button_backgroundColor_minimal_focus;
          } else {
            return theme.Button_backgroundColor_focus;
          }
        })(),
        borderColor: minimal ? theme.Button_borderColor_focus : undefined,
        boxShadow: minimal ? undefined : theme.Button_boxShadow_focus,
        color,
        textDecoration: 'none'
      },
      '&:hover': {
        backgroundColor: (() => {
          if (!disabled) {
            if (primary) {
              return theme.Button_backgroundColor_primary_hover;
            } else if (minimal) {
              return theme.Button_backgroundColor_minimal_hover;
            } else {
              return theme.Button_backgroundColor_hover;
            }
          }
        })(),
        borderColor:
          disabled || minimal || primary
            ? undefined
            : theme.Button_borderColor_hover,
        color,
        textDecoration: 'none'
      },
      '&:focus:active, &:focus:hover': {
        borderColor: (() => {
          if (primary) {
            return 'transparent';
          } else if (minimal) {
            return theme.Button_borderColor_focus;
          } else {
            return theme.Button_borderColor;
          }
        })()
      },
      // `:active` must be last, to follow LVHFA order:
      // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
      '&:active': {
        backgroundColor: (() => {
          if (!disabled) {
            if (primary) {
              return theme.Button_backgroundColor_primary_active;
            } else if (minimal) {
              return theme.Button_backgroundColor_minimal_active;
            } else {
              return theme.Button_backgroundColor_active;
            }
          }
        })(),
        borderColor:
          !minimal && !disabled ? theme.Button_borderColor_active : undefined,
        color
      },
      '&::-moz-focus-inner': { border: 0 },

      '& [role="img"]': {
        boxSizing: 'content-box',
        color: disabled || primary ? null : theme.ButtonIcon_color,
        display: 'block',
        flexShrink: 0,

        '&:first-child': {
          [firstChildMarginProperty]: theme.ButtonIcon_margin
        },

        '&:last-child': {
          [lastChildMarginProperty]: theme.ButtonIcon_margin
        },

        '&:only-child': {
          margin: 0
        }
      }
    };
  },
  content: ({ size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';
    const firstChildPaddingProperty = rtl ? 'paddingRight' : 'paddingLeft';
    const lastChildPaddingProperty = rtl ? 'paddingLeft' : 'paddingRight';

    let paddings;

    const fontSize =
      size === 'small'
        ? theme.ButtonContent_fontSize_small
        : theme.ButtonContent_fontSize;

    if (size === undefined || size === 'large' || size === 'jumbo') {
      const padding = getNormalizedValue(
        theme.Button_paddingHorizontal,
        fontSize
      );
      paddings = {
        '&:first-child': {
          [firstChildPaddingProperty]: padding
        },

        '&:last-child': {
          [lastChildPaddingProperty]: padding
        }
      };
    }

    return {
      ...ellipsis('100%'),

      display: 'block',
      fontSize,
      lineHeight: getNormalizedValue(theme[`Button_height_${size}`], fontSize),
      ...paddings
    };
  },
  inner: {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    maxHeight: '100%',
    pointerEvents: 'none',
    width: '100%'
  }
};

const iconSize = {
  small: 'medium',
  medium: 'medium',
  large: pxToEm(24),
  jumbo: pxToEm(24)
};

const Content = createStyledComponent('span', styles.content);
const Inner = createStyledComponent('span', styles.inner);

function isTypeButton(type: ?string) {
  return ['button', 'submit', 'reset'].indexOf(type) !== -1;
}

function filterProps({ element, type }: Props) {
  // When element is a component, e.g. ReactRouterLink,
  // these are not filtered automatically by rootEl
  const invalidComponentProps = ['primary', 'text', 'variant', 'element'];
  const shouldFilterType =
    (element === 'button' && !isTypeButton(type)) ||
    (element !== 'button' && isTypeButton(type));
  const invalidLinkProps = shouldFilterType ? ['type'] : [];

  return invalidComponentProps.concat(invalidLinkProps);
}

const createRootNode = (props: Props) => {
  const { element = Button.defaultProps.element } = props;

  return createStyledComponent(element, styles.button, {
    displayName: 'Button',
    filterProps: filterProps(props),
    includeStyleReset: true,
    rootEl: element
  });
};

/**
 * The Button component represents a clickable button.
 * Buttons draw attention to actions that can be performed in your app.
 * Buttons are used to trigger any sort of event.
 */
export default class Button extends Component<Props> {
  static defaultProps = {
    element: 'button',
    size: 'large',
    type: 'button'
  };

  // Must be an instance method to avoid affecting other instances memoized keys
  getRootNode = memoizeOne(
    createRootNode,
    (nextProps: Props, prevProps: Props) =>
      nextProps.element === prevProps.element
  );

  render() {
    const {
      children,
      iconStart,
      iconEnd,
      size = Button.defaultProps.size,
      type = Button.defaultProps.type,
      variant,
      ...restProps
    } = this.props;

    const rootProps = {
      size,
      text: children,
      type,
      variant,
      ...restProps
    };

    const Root = this.getRootNode(this.props);

    const startIcon = iconStart
      ? cloneElement(iconStart, { size: iconSize[size], key: 'iconStart' })
      : null;
    const endIcon = iconEnd
      ? cloneElement(iconEnd, { size: iconSize[size], key: 'iconEnd' })
      : null;

    return (
      <Root {...rootProps}>
        <Inner>
          {startIcon}
          {children && <Content size={size}>{children}</Content>}
          {endIcon}
        </Inner>
      </Root>
    );
  }
}
