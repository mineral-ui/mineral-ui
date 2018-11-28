/* @flow */
import { hideVisually } from 'polished';
import { createStyledComponent, getNormalizedValue } from '../styles';
import { choiceTheme, choiceGroupTheme } from './themes';

export const ChoiceRoot = createStyledComponent(
  'label',
  ({ disabled, justify, hideLabel, labelPosition, size, theme: baseTheme }) => {
    const theme = choiceTheme(baseTheme);
    const labelPositionStart = labelPosition === 'start';

    return {
      alignItems: 'center',
      cursor: !disabled && 'pointer',
      display: 'flex',
      position: 'relative',
      flexDirection: labelPositionStart && 'row-reverse',
      justifyContent:
        !justify && (labelPositionStart ? 'flex-end' : 'flex-start'),

      '&:hover': {
        '& span:first-of-type': {
          borderColor: !disabled && theme.ChoiceControl_borderColor_hover
        }
      },

      // Preserve layout when hideLabel
      ...(hideLabel
        ? {
            '&::after': {
              content: "'.'",
              fontSize:
                size === 'small'
                  ? theme.ChoiceText_fontSize_small
                  : theme.ChoiceText_fontSize,
              visibility: 'hidden',
              width: '0.1px'
            }
          }
        : undefined)
    };
  },
  {
    displayName: 'Choice',
    includeStyleReset: true
  }
);

export const Input = createStyledComponent(
  'input',
  ({ theme: baseTheme }) => {
    const theme = choiceTheme(baseTheme);

    return {
      ...hideVisually(),

      '&:focus': {
        '& + span': {
          boxShadow: theme.ChoiceControl_boxShadow_focus
        }
      },

      '&:checked,&[type="checkbox"]:indeterminate': {
        '& + span': {
          backgroundColor: theme.ChoiceControl_backgroundColor_checked,
          borderColor: theme.ChoiceControl_borderColor_checked
        },

        '&:hover': {
          '& + span': {
            backgroundColor: theme.ChoiceControl_backgroundColor_checkedHover,
            borderColor: theme.ChoiceControl_borderColor_checkedHover
          }
        },

        '&:disabled': {
          '& + span': {
            backgroundColor: theme.ChoiceControl_borderColor,
            borderColor: theme.ChoiceControl_borderColor,
            color: theme.ChoiceControl_backgroundColor
          }
        }
      }
    };
  },
  {
    rootEl: 'input'
  }
);

export const Text = createStyledComponent(
  'span',
  ({ disabled, hideLabel, justify, labelPosition, size, theme: baseTheme }) => {
    const theme = choiceTheme(baseTheme);
    const rtl = theme.direction === 'rtl';
    const labelPositionStart = labelPosition === 'start';
    const fontSize =
      size === 'small'
        ? theme.ChoiceText_fontSize_small
        : theme.ChoiceText_fontSize;
    const marginHorizontal = justify
      ? 'auto'
      : getNormalizedValue(theme.ChoiceText_marginHorizontal, fontSize);

    return {
      color: disabled ? theme.color_disabled : theme.ChoiceText_color,
      fontSize,
      marginLeft:
        (labelPositionStart && !rtl) || (!labelPositionStart && rtl)
          ? 0
          : marginHorizontal,
      marginRight:
        (labelPositionStart && !rtl) || (!labelPositionStart && rtl)
          ? marginHorizontal
          : 0,

      ...(hideLabel ? hideVisually() : undefined)
    };
  },
  {
    displayName: 'Text'
  }
);

export const Control = createStyledComponent(
  'span',
  ({ disabled, size, theme: baseTheme }) => {
    const theme = choiceTheme(baseTheme);
    const backgroundColor = disabled
      ? theme.input_backgroundColor_disabled
      : theme.ChoiceControl_backgroundColor;
    const controlDimensions =
      size === 'jumbo'
        ? theme.ChoiceControl_size_jumbo
        : theme.ChoiceControl_size;

    return {
      alignItems: 'center',
      backgroundColor,
      borderColor: theme.ChoiceControl_borderColor,
      borderRadius: theme.ChoiceControl_borderRadius,
      borderStyle: 'solid',
      borderWidth: '1px',
      color: backgroundColor,
      content: '""',
      display: 'flex',
      flex: 'none',
      height: controlDimensions,
      justifyContent: 'center',
      width: controlDimensions,

      '& svg': {
        fill: 'currentColor',
        height: 'auto',
        width: '100%'
      }
    };
  },
  {
    displayName: 'Control'
  }
);

export const ChoiceGroupRoot = createStyledComponent(
  'div',
  ({ inline, size, theme: baseTheme }) => {
    const theme = choiceGroupTheme(baseTheme);

    return {
      display: 'flex',
      flexDirection: inline ? 'row' : 'column',

      '& > *:not(:last-child)': {
        marginBottom: inline
          ? 0
          : size === 'jumbo'
          ? theme.ChoiceGroupControl_marginVertical_stackedJumbo
          : theme.ChoiceGroupControl_marginVertical_stacked,
        marginRight: inline
          ? theme.ChoiceGroupControl_marginHorizontal_inline
          : undefined
      }
    };
  },
  {
    displayName: 'ChoiceGroup',
    includeStyleReset: true
  }
);
