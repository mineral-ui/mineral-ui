/* @flow */
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { componentStyleReset } from '../styles';
import { themed } from '../themes';
import Button from '../Button';
import { ALIGN, INTERNAL_TYPE } from './constants';
import { navigationTheme, navItemTheme } from './themes';

import { NavigationStyleProps, NavItemStyleProps } from './types';

export const NavigationRoot = styled('nav', {
  shouldForwardProp: (prop) =>
    ['prefix', 'type'].indexOf(prop) === -1 && isPropValid(prop)
})<NavigationStyleProps>(({ align, prefix, theme: baseTheme, type }) => {
  const theme = navigationTheme(baseTheme);

  const aligns = {
    [ALIGN.start]: 'flex-start',
    [ALIGN.center]: 'center',
    [ALIGN.end]: 'flex-end',
    [ALIGN.justify]: undefined
  };

  return {
    ...componentStyleReset(baseTheme),

    backgroundColor: theme[`${prefix}Nav_backgroundColor${type}`],
    borderBottom: theme[`${prefix}Nav_border`],
    display: 'flex',
    justifyContent: aligns[align],
    listStyle: 'none',
    margin: 0,
    // prettier-ignore
    padding: `${theme[`${prefix}Nav_paddingVertical`]} ${theme[`${prefix}Nav_paddingHorizontal`]}`,

    ...(type === INTERNAL_TYPE.tabs
      ? {
          paddingBottom: 0
        }
      : undefined),

    '& > :not(:first-child)': {
      marginLeft: theme[`${prefix}Nav_gutter`]
    }
  };
});

const NavItemButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop === 'as' || ['prefix', 'selected', 'type'].indexOf(prop) === -1
})<NavItemStyleProps>(
  ({
    align,
    disabled,
    maxWidth,
    prefix,
    selected,
    theme: baseTheme,
    styleType
  }) => {
    const theme = navItemTheme(baseTheme);

    return {
      backgroundColor: disabled && 'transparent',
      display: 'block',

      '&:hover': {
        color: !disabled && theme[`${prefix}NavItem_color${styleType}_hover`]
      },

      ...(align === ALIGN.justify ? { flexGrow: 1 } : { maxWidth }),

      ...(selected
        ? {
            ...(styleType === INTERNAL_TYPE.tabs
              ? {
                  position: 'relative',

                  '&::before': {
                    // prettier-ignore
                    backgroundColor:
                      theme[`${prefix}NavItem_borderColor${styleType}_selected`],
                    bottom: -2,
                    content: '""',
                    left: -1,
                    position: 'absolute',
                    right: -1,
                    height: 1
                  }
                }
              : {
                  borderColor:
                    theme[`${prefix}NavItem_borderColor${styleType}_selected`]
                }),

            '&:hover': {
              backgroundColor:
                theme[`${prefix}NavItem_backgroundColor${styleType}_selected`],
              borderColor:
                styleType !== '_tabs'
                  ? theme[`${prefix}NavItem_borderColor${styleType}_selected`]
                  : undefined,
              color: theme[`${prefix}NavItem_color${styleType}_selected`]
            },

            '&, &:focus': {
              backgroundColor:
                theme[`${prefix}NavItem_backgroundColor${styleType}_selected`],
              color: theme[`${prefix}NavItem_color${styleType}_selected`]
            }
          }
        : undefined),

      // Truncate
      '&:active > span > span > span > span > span:focus': {
        outline: 'none'
      },

      // Button's Inner
      '& > span': {
        // Content
        '& > span': {
          // Tooltip & TooltipTrigger & Truncate
          '& > span, & > span > span, & > span > span > span': {
            display: 'block'
          }
        }
      }
    };
  }
);

/*
 * Theming a styled button here (rather than styling a themed button, as we
 * usually do) because we need to filter some props, which breaks the usual
 * pattern.
 */
export const NavItemRoot = themed(NavItemButton)(
  ({ prefix, theme: baseTheme, styleType }) => {
    const theme = {
      ...navItemTheme(baseTheme),
      ...navigationTheme(baseTheme)
    };

    // prettier-ignore
    return {
      borderColor_theme_focus: theme[`${prefix}NavItem_borderColor${styleType}_focus`],
      boxShadow_focusInner: theme[`${prefix}Nav_backgroundColor${styleType}`],

      Button_backgroundColor: theme[`${prefix}NavItem_backgroundColor${styleType}`],
      Button_backgroundColor_active: theme[`${prefix}NavItem_backgroundColor${styleType}_active`],
      Button_backgroundColor_focus: theme[`${prefix}NavItem_backgroundColor${styleType}_focus`],
      Button_backgroundColor_hover: theme[`${prefix}NavItem_backgroundColor${styleType}_hover`],
      Button_borderColor: theme[`${prefix}NavItem_borderColor${styleType}`],
      Button_borderColor_active: theme[`${prefix}NavItem_borderColor${styleType}_active`],
      Button_borderColor_focus: theme[`${prefix}NavItem_borderColor${styleType}_focus`],
      Button_borderColor_hover: theme[`${prefix}NavItem_borderColor${styleType}_hover`],
      Button_color: theme[`${prefix}NavItem_color${styleType}`],
      Button_paddingHorizontal: theme[`${prefix}NavItem_paddingHorizontal`],

      ButtonContent_fontSize_small: theme.fontSize_ui,

      ButtonIcon_color: theme[`${prefix}NavItemIcon_color`],

      ...(styleType === INTERNAL_TYPE.none
        ? { color_disabled: theme[`${prefix}NavItem_color${styleType}_disabled`] }
        : undefined
      ),

      ...(styleType === INTERNAL_TYPE.tabs
        ? { Button_borderRadius: `${theme.borderRadius_1} ${theme.borderRadius_1} 0 0` }
        : undefined
      )
    };
  }
);
