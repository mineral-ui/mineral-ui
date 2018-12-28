/* @flow */
import { createStyledComponent } from '../styles';
import { createThemedComponent } from '../themes';
import Button from '../Button';
import { ALIGN, INTERNAL_TYPE } from './constants';
import { navigationTheme, navItemTheme } from './themes';

export const NavigationRoot = createStyledComponent(
  'nav',
  ({ align, prefix, theme: baseTheme, type }) => {
    const theme = navigationTheme(baseTheme);

    const aligns = {
      [ALIGN.start]: 'flex-start',
      [ALIGN.center]: 'center',
      [ALIGN.end]: 'flex-end',
      [ALIGN.justify]: undefined
    };

    return {
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

      '& > :not(:first-of-type)': {
        marginLeft: theme[`${prefix}Nav_gutter`]
      }
    };
  },
  {
    displayName: 'Navigation',
    filterProps: ['prefix'],
    includeStyleReset: true
  }
);

const NavItemButton = createStyledComponent(
  Button,
  ({ align, disabled, maxWidth, prefix, selected, theme: baseTheme, type }) => {
    const theme = navItemTheme(baseTheme);

    return {
      backgroundColor: disabled && 'transparent',
      display: 'block',

      '&:hover': {
        color: !disabled && theme[`${prefix}NavItem_color${type}_hover`]
      },

      ...(align === ALIGN.justify ? { flexGrow: 1 } : { maxWidth }),

      ...(selected
        ? {
            ...(type === INTERNAL_TYPE.tabs
              ? {
                  position: 'relative',

                  '&::before': {
                    // prettier-ignore
                    backgroundColor:
                      theme[`${prefix}NavItem_borderColor${type}_selected`],
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
                    theme[`${prefix}NavItem_borderColor${type}_selected`]
                }),

            '&:hover': {
              backgroundColor:
                theme[`${prefix}NavItem_backgroundColor${type}_selected`],
              borderColor:
                type !== '_tabs'
                  ? theme[`${prefix}NavItem_borderColor${type}_selected`]
                  : undefined,
              color: theme[`${prefix}NavItem_color${type}_selected`]
            },

            '&, &:focus': {
              backgroundColor:
                theme[`${prefix}NavItem_backgroundColor${type}_selected`],
              color: theme[`${prefix}NavItem_color${type}_selected`]
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
  },
  {
    displayName: 'NavItem',
    filterProps: ['prefix', 'type']
  }
);

/*
 * Theming a styled button here (rather than styling a themed button, as we
 * usually do) because we need to filter some props, which breaks the usual
 * pattern.
 */
export const NavItemRoot = createThemedComponent(
  NavItemButton,
  ({ prefix, theme: baseTheme, type }) => {
    const theme = {
      ...navItemTheme(baseTheme),
      ...navigationTheme(baseTheme)
    };

    // prettier-ignore
    return {
      borderColor_theme_focus: theme[`${prefix}NavItem_borderColor${type}_focus`],
      boxShadow_focusInner: theme[`${prefix}Nav_backgroundColor${type}`],

      Button_backgroundColor: theme[`${prefix}NavItem_backgroundColor${type}`],
      Button_backgroundColor_active: theme[`${prefix}NavItem_backgroundColor${type}_active`],
      Button_backgroundColor_focus: theme[`${prefix}NavItem_backgroundColor${type}_focus`],
      Button_backgroundColor_hover: theme[`${prefix}NavItem_backgroundColor${type}_hover`],
      Button_borderColor: theme[`${prefix}NavItem_borderColor${type}`],
      Button_borderColor_active: theme[`${prefix}NavItem_borderColor${type}_active`],
      Button_borderColor_focus: theme[`${prefix}NavItem_borderColor${type}_focus`],
      Button_borderColor_hover: theme[`${prefix}NavItem_borderColor${type}_hover`],
      Button_color: theme[`${prefix}NavItem_color${type}`],
      Button_paddingHorizontal: theme[`${prefix}NavItem_paddingHorizontal`],

      ButtonContent_fontSize_small: theme.fontSize_ui,

      ButtonIcon_color: theme[`${prefix}NavItemIcon_color`],

      ...(type === INTERNAL_TYPE.none
        ? { color_disabled: theme[`${prefix}NavItem_color${type}_disabled`] }
        : undefined
      ),

      ...(type === INTERNAL_TYPE.tabs
        ? { Button_borderRadius: `${theme.borderRadius_1} ${theme.borderRadius_1} 0 0` }
        : undefined
      )
    };
  }
);
