/* @flow */

import { ellipsis } from 'polished';
import { createStyledComponent, getNormalizedValue } from '../styles';
import { SIZE } from './constants';
import { buttonTheme } from './themes';

import type { CreateRootNode } from '../styles/types';
import type { ButtonDefaultProps, ButtonProps } from './types';

const chooseColor = ({ disabled, primary, minimal }: ButtonProps, theme) => {
  if (disabled) {
    return theme.color_disabled;
  } else if (primary) {
    return theme.Button_color_primary;
  } else if (minimal) {
    return theme.Button_color_minimal;
  } else {
    return theme.Button_color;
  }
};

const isTypeButton = (type: ?string) => {
  return ['button', 'submit', 'reset'].indexOf(type) !== -1;
};

const filterProps = ({ element, type }: ButtonProps) => {
  // When element is a component, e.g. ReactRouterLink,
  // these are not filtered automatically by rootEl
  const invalidComponentProps = ['primary', 'text', 'variant', 'element'];
  const shouldFilterType =
    (element === 'button' && !isTypeButton(type)) ||
    (element !== 'button' && isTypeButton(type));
  const invalidLinkProps = shouldFilterType ? ['type'] : [];

  return invalidComponentProps.concat(invalidLinkProps);
};

export const Content = createStyledComponent(
  'span',
  ({ size, theme: baseTheme }) => {
    const theme = buttonTheme(baseTheme);
    const rtl = theme.direction === 'rtl';
    const firstChildPaddingProperty = rtl ? 'paddingRight' : 'paddingLeft';
    const lastChildPaddingProperty = rtl ? 'paddingLeft' : 'paddingRight';

    let paddings;

    const fontSize =
      size === SIZE.small
        ? theme.ButtonContent_fontSize_small
        : theme.ButtonContent_fontSize;

    if (size === undefined || size === SIZE.large || size === SIZE.jumbo) {
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
  }
);

export const Inner = createStyledComponent('span', {
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  maxHeight: '100%',
  pointerEvents: 'none',
  width: '100%'
});

export const createButtonRootNode: CreateRootNode<
  ButtonProps,
  ButtonDefaultProps
> = (props, defaultProps) => {
  const { element = defaultProps.element } = props;

  return createStyledComponent(
    element,
    ({
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
      let theme = buttonTheme(baseTheme);
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
        '&:focus': !disabled && {
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
    {
      displayName: 'Button',
      filterProps: filterProps(props),
      includeStyleReset: true,
      rootEl: element
    }
  );
};
