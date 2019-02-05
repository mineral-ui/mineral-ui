/* @flow */
import styled from '@emotion/styled';
import { componentStyleReset } from '../styles';
import { buttonGroupTheme } from './themes';

export const ButtonGroupRoot = styled('div')(
  ({ fullWidth, theme: baseTheme, variant }) => {
    let theme = buttonGroupTheme(baseTheme);
    if (variant) {
      // prettier-ignore
      theme = {
        ...theme,
        ButtonGroupButton_borderColor_active: theme[`borderColor_${variant}_active`],
        ButtonGroupButton_borderColor_hover: theme[`borderColor_${variant}_hover`]
      };
    }
    const { direction } = theme;
    const rtl = direction === 'rtl';
    const start = rtl ? 'Right' : 'Left';
    const end = rtl ? 'Left' : 'Right';

    const borderStartColorProperty = `border${start}Color`;
    const borderEndColorProperty = `border${end}Color`;

    const borderBottomStartRadiusProperty = `borderBottom${start}Radius`;
    const borderBottomEndRadiusProperty = `borderBottom${end}Radius`;

    const borderTopStartRadiusProperty = `borderTop${start}Radius`;
    const borderTopEndRadiusProperty = `borderTop${end}Radius`;

    return {
      ...componentStyleReset(baseTheme),

      display: 'flex',

      '& button': {
        flexGrow: fullWidth && 1,

        '&:focus, &:active': {
          position: 'relative'
        },

        '&:hover:not(:focus):not(:active):not([aria-checked=true]):not([disabled])': {
          borderColor: theme.ButtonGroupButton_borderColor_hover,

          '&[data-variant="danger"]': {
            borderColor: theme.borderColor_danger_hover
          },

          '&[data-variant="success"]': {
            borderColor: theme.borderColor_success_hover
          },

          '&[data-variant="warning"]': {
            borderColor: theme.borderColor_warning_hover
          }
        },

        '&:active:not(:focus):not([aria-checked=true]):not([disabled])': {
          borderColor: theme.ButtonGroupButton_borderColor_active,

          '&[data-variant="danger"]': {
            borderColor: theme.borderColor_danger_active
          },

          '&[data-variant="success"]': {
            borderColor: theme.borderColor_success_active
          },

          '&[data-variant="warning"]': {
            borderColor: theme.borderColor_warning_active
          }
        },

        '&[disabled]': {
          border: theme.ButtonGroupButton_border_disabled,

          '&[aria-checked=true]': {
            backgroundColor:
              theme.ButtonGroupButton_backgroundColor_checkedDisabled,
            color: theme.ButtonGroupButton_color_checkedDisabled,

            '&:hover': {
              color: theme.ButtonGroupButton_color_checkedDisabled
            }
          }
        }
      },

      // 1 - Buttons except the first
      // 2 - "Anything" except the first with a nested button
      '& > button:not(:first-child), & > *:not(:first-child) button': {
        [borderBottomStartRadiusProperty]: 0,
        [borderTopStartRadiusProperty]: 0
      },

      // 1 - Buttons except the last
      // 2 - "Anything" except the last with a nested button
      '& > button:not(:last-child), & > *:not(:last-child) button': {
        [borderBottomEndRadiusProperty]: 0,
        [borderTopEndRadiusProperty]: 0,
        [borderEndColorProperty]: 'transparent'
      },

      // 1 - Mode'd, unchecked buttons
      // 2 - Non-mode'd buttons
      // 3 - Non-mode'd "anything" with a nested button
      '& > [aria-checked=false], & > button:not([aria-checked]), & > *:not([aria-checked]) button': {
        '&:focus, & button:focus': {
          borderLeftColor: theme.ButtonGroupButton_borderStartColor,
          borderRightColor: theme.ButtonGroupButton_borderStartColor
        }
      },

      // Mode'd, unchecked, un-focused, un-hovered button immediately following a mode'd, unchecked button
      '& > [aria-checked=false] + [aria-checked=false]:not(:focus)': {
        [borderStartColorProperty]: theme.ButtonGroupButton_borderStartColor
      },

      // 1 - Mode'd, unchecked, un-focused buttons immediately following a mode'd, unchecked, non-disabled, hovered button
      // 2 - Non-mode'd, un-focused buttons immediately following a non-mode'd, non-disabled, hovered "anything"
      // 3 - Non-mode'd "anything" with a nested, un-focused button immediately following a non-mode'd, non-disabled, hovered "anything"
      '& > [aria-checked=false]:not([disabled]):hover + [aria-checked=false], & > *:not([aria-checked]):not([disabled]):hover + button:not([aria-checked]), & > *:not([aria-checked]):not([disabled]):hover + *:not([aria-checked]) button': {
        '&:not(:focus)': {
          [borderStartColorProperty]: 'transparent'
        }
      },

      // Mode'd, unchecked, un-focused buttons immediately following a mode'd, checked button
      '& > [aria-checked=true] + [aria-checked=false]:not(:focus)': {
        [borderStartColorProperty]: 'transparent'
      },

      // Mode'd, checked, un-focused buttons immediately following a mode'd checked button
      '& > [aria-checked=true] + [aria-checked=true]:not(:focus)': {
        [borderStartColorProperty]:
          theme.ButtonGroupButton_borderStartColor_checked
      }
    };
  }
);
