/* @flow */
import React, { Component, cloneElement } from 'react';
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
  variant?: 'regular' | 'danger' | 'success' | 'warning'
};

// prettier-ignore
export const componentTheme = (baseTheme: Object) => ({
  Button_backgroundColor: baseTheme.color_gray_20,
  Button_backgroundColor_active: baseTheme.color_gray_30,
  Button_backgroundColor_focus: baseTheme.color_gray_20,
  Button_backgroundColor_hover: baseTheme.backgroundColor_hover,
  Button_backgroundColor_minimal_active: baseTheme.backgroundColor_active,
  Button_backgroundColor_minimal_hover: baseTheme.backgroundColor_hover,
  Button_backgroundColor_primary: baseTheme.backgroundColor_themePrimary,
  Button_backgroundColor_primary_active: baseTheme.backgroundColor_themePrimary_active,
  Button_backgroundColor_primary_focus: baseTheme.backgroundColor_themePrimary_focus,
  Button_backgroundColor_primary_hover: baseTheme.backgroundColor_themePrimary_hover,
  Button_borderColor: baseTheme.borderColor,
  Button_borderRadius: baseTheme.borderRadius_1,
  Button_borderWidth: 1, // px
  Button_boxShadow_focus: `0 0 0 1px ${baseTheme.boxShadow_focusInner}, 0 0 0 2px ${baseTheme.borderColor_theme_focus}`,
  Button_color: baseTheme.color,
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
  button: (props) => {
    let theme = componentTheme(props.theme);
    const {
      circular,
      disabled,
      fullWidth,
      minimal,
      primary,
      size,
      text,
      variant
    } = props;

    if (variant !== 'regular') {
      // prettier-ignore
      theme = {
        ...theme,
        Button_backgroundColor_primary: theme[`backgroundColor_${variant}Primary`],
        Button_backgroundColor_primary_active: theme[`backgroundColor_${variant}Primary_active`],
        Button_backgroundColor_primary_focus: theme[`backgroundColor_${variant}Primary_focus`],
        Button_backgroundColor_primary_hover: theme[`backgroundColor_${variant}Primary_hover`],
        Button_boxShadow_focus: `0 0 0 1px ${theme.boxShadow_focusInner}, 0 0 0 2px ${theme[`borderColor_${variant}_focus`]}`,
        Button_color: theme[`color_${variant}`],
        Button_color_primary: theme[`color_${variant}Primary`],
        Button_color_minimal: theme[`color_${variant}`],
        ButtonIcon_color: theme[`icon_color_${variant}`]
      };
    }

    const color = chooseColor(props, theme);
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
        boxShadow: theme.Button_boxShadow_focus,
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
        color,
        textDecoration: 'none'
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
        color
      },
      '&::-moz-focus-inner': { border: 0 },

      '& [role="img"]': {
        boxSizing: 'content-box',
        color: disabled || primary ? null : theme.ButtonIcon_color,
        display: 'block',

        '&:first-child': {
          marginLeft:
            theme.direction === 'rtl' ? theme.ButtonIcon_margin : null,
          marginRight:
            theme.direction === 'ltr' ? theme.ButtonIcon_margin : null
        },

        '&:last-child': {
          marginLeft:
            theme.direction === 'ltr' ? theme.ButtonIcon_margin : null,
          marginRight:
            theme.direction === 'rtl' ? theme.ButtonIcon_margin : null
        },

        '&:only-child': {
          margin: 0
        }
      }
    };
  },
  content: (props) => {
    const theme = componentTheme(props.theme);
    const { size } = props;

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
          paddingLeft: theme.direction === 'ltr' ? padding : null,
          paddingRight: theme.direction === 'rtl' ? padding : null
        },

        '&:last-child': {
          paddingLeft: theme.direction === 'rtl' ? padding : null,
          paddingRight: theme.direction === 'ltr' ? padding : null
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

// Button's root node must be created outside of render, so that the entire DOM
// element is replaced only when the element prop is changed, otherwise it is
// updated in place
function createRootNode(props: Props) {
  const { element = Button.defaultProps.element } = props;

  return createStyledComponent(element, styles.button, {
    filterProps: filterProps(props),
    includeStyleReset: true,
    rootEl: element
  });
}

/**
 * The Button component represents a clickable button.
 * Buttons draw attention to actions that can be performed in your app.
 * Buttons are used to trigger any sort of event.
 */
export default class Button extends Component<Props> {
  static defaultProps = {
    element: 'button',
    size: 'large',
    type: 'button',
    variant: 'regular'
  };

  componentWillUpdate(nextProps: Props) {
    if (this.props.element !== nextProps.element) {
      this.rootNode = createRootNode(nextProps);
    }
  }

  props: Props;

  rootNode: React$ComponentType<*> = createRootNode(this.props);

  render() {
    const {
      children,
      iconStart,
      iconEnd,
      size = Button.defaultProps.size,
      type = Button.defaultProps.type,
      variant = Button.defaultProps.variant,
      ...restProps
    } = this.props;

    const rootProps = {
      size,
      text: children,
      type,
      variant,
      ...restProps
    };

    const Root = this.rootNode;

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
