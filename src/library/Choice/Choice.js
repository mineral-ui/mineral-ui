/* @flow */
import React, { PureComponent } from 'react';
import { hideVisually } from 'polished';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';

type Props = {
  /**
   * Checked state of the input. Primarily for use with controlled
   * components. If this prop is specified, an `onChange` handler must also be
   * specified. See also: `defaultChecked`.
   */
  checked?: boolean,
  /** @Private CSS className */
  className?: string,
  /** Determines the position of the label relative to the control */
  labelPosition?: 'start' | 'end',
  /**
   * Initial checked state of the input; primarily for use with
   * uncontrolled components
   */
  defaultChecked?: boolean,
  /** Disables the input */
  disabled?: boolean,
  /** Maximize the distance between the label and the control */
  justify?: boolean,
  /** The checked icon */
  iconChecked: React$Element<*>,
  /** Ref for the input */
  inputRef?: (node: ?HTMLInputElement) => void,
  /** Props to be applied directly to the root element rather than the input */
  rootProps?: Object,
  /** Visually hide label, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology) */
  hideLabel?: boolean,
  /** Indicates that the value of the input is invalid */
  invalid?: boolean,
  /** Label associated with the input element */
  label: string | React$Element<*>,
  /** Used to uniquely define a group of inputs */
  name?: string,
  /** Function called when a input is selected */
  onChange?: (event: SyntheticInputEvent<>) => void,
  /** Indicates that the user must select an option before submitting a form */
  required?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** The type of HTML input */
  type: 'checkbox' | 'radio',
  /** The value of the input */
  value?: string
};

export const componentTheme = (baseTheme: Object) => {
  const colors = {
    background: baseTheme.input_backgroundColor,
    regular: baseTheme.borderColor,
    checked: baseTheme.borderColor_theme,
    focus: baseTheme.borderColor_theme_focus,
    hover: baseTheme.borderColor_theme_hover
  };

  // prettier-ignore
  return {
    ChoiceControl_backgroundColor: colors.background,
    ChoiceControl_backgroundColor_checked: colors.checked,
    ChoiceControl_backgroundColor_checkedHover: colors.hover,
    ChoiceControl_borderColor: colors.regular,
    ChoiceControl_borderColor_hover: colors.hover,
    ChoiceControl_borderColor_checked: colors.checked,
    ChoiceControl_borderColor_checkedHover: colors.hover,
    ChoiceControl_borderRadius: baseTheme.borderRadius_1,
    ChoiceControl_boxShadow_focus: `0 0 0 1px ${baseTheme.boxShadow_focusInner}, 0 0 0 2px ${colors.focus}`,
    ChoiceControl_size: pxToEm(16),
    ChoiceControl_size_jumbo: pxToEm(24),

    ChoiceText_color: baseTheme.color,
    ChoiceText_fontSize: baseTheme.fontSize_ui,
    ChoiceText_fontSize_small: pxToEm(12),
    ChoiceText_marginHorizontal: baseTheme.space_inline_md,

    ...baseTheme
  };
};

const styles = {
  control: ({ disabled, size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
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
  input: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

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
  root: ({
    disabled,
    justify,
    hideLabel,
    labelPosition,
    size,
    theme: baseTheme
  }) => {
    const theme = componentTheme(baseTheme);
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
  text: ({
    disabled,
    hideLabel,
    justify,
    labelPosition,
    size,
    theme: baseTheme
  }) => {
    const theme = componentTheme(baseTheme);
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
  }
};

const Root = createStyledComponent('label', styles.root, {
  displayName: 'Choice',
  includeStyleReset: true
});
const Input = createStyledComponent('input', styles.input, {
  rootEl: 'input'
});
const Text = createStyledComponent('span', styles.text, {
  displayName: 'Text'
});
const Control = createStyledComponent('span', styles.control, {
  displayName: 'Control'
});

/**
 * Choice is base renderer for Checkbox and Radio.
 */
export default class Choice extends PureComponent<Props> {
  static defaultProps = {
    labelPosition: 'end',
    size: 'large'
  };

  render() {
    const {
      className,
      disabled,
      hideLabel,
      iconChecked,
      inputRef,
      invalid,
      justify,
      label,
      labelPosition,
      required,
      rootProps: otherRootProps,
      size,
      ...restProps
    } = this.props;
    const rootProps = {
      className,
      disabled,
      justify,
      hideLabel,
      labelPosition,
      size,
      ...otherRootProps
    };

    const inputProps = {
      'aria-invalid': invalid,
      'aria-required': required,
      disabled,
      innerRef: (ref) => {
        if (inputRef) {
          inputRef(ref);
        }
      },
      required,
      size,
      ...restProps // Note: Props are spread to input rather than Root
    };

    const controlProps = {
      disabled,
      size
    };

    const textProps = {
      disabled,
      hideLabel,
      justify,
      labelPosition,
      size
    };

    return (
      <Root {...rootProps}>
        <Input {...inputProps} />
        <Control {...controlProps}>{iconChecked}</Control>
        <Text {...textProps}>{label}</Text>
      </Root>
    );
  }
}
