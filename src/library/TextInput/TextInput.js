/* @flow */
import React from 'react';
import { createStyledComponent, getNormalizedValue } from '../styles';
import { mapComponentThemes } from '../themes';
import FauxControl, {
  componentTheme as fauxControlComponentTheme
} from '../FauxControl/FauxControl';

type Props = {
  /** @Private CSS className */
  className?: string,
  /** Initial value of the input. Primarily for use with uncontrolled components */
  defaultValue?: string,
  /** Disables the input */
  disabled?: boolean,
  /** Icon located at the start of the input */
  iconStart?: React$Element<*>,
  /** Icon located at the end of the input */
  iconEnd?: React$Element<*>,
  /** ref for the input */
  inputRef?: (node: ?React$Component<*, *>) => void,
  /** Props to be applied directly to the root element, rather than the input */
  rootProps?: Object,
  /** Indicates that the value of the element is invalid */
  invalid?: boolean,
  /** Function called when input value changes */
  onChange?: (event: SyntheticEvent<>) => void,
  /** Text to display before input value */
  prefix?: string | React$Element<*>,
  /** Indicates that the user cannot modify the value of the input */
  readOnly?: boolean,
  /** Indicates that the user must fill in a value before submitting a form */
  required?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Text to display after input value */
  suffix?: string | React$Element<*>,
  /** Type of input. Not all types are equally supported across browsers. */
  type?:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week',
  /**
   * The initial value of the input. Primarily for use with controlled
   * components.  If this prop is specified, an onChange handler must also be
   * specified.  Also see `defaultValue`.
   */
  value?: string,
  /** Available variants */
  variant?: 'success' | 'warning' | 'danger'
};

export const componentTheme = (baseTheme: Object) => ({
  ...mapComponentThemes(
    {
      name: 'FauxControl',
      theme: fauxControlComponentTheme(baseTheme)
    },
    {
      name: 'TextInput',
      theme: {
        TextInput_height_small: baseTheme.size_small,
        TextInput_height_medium: baseTheme.size_medium,
        TextInput_height_large: baseTheme.size_large,
        TextInput_height_jumbo: baseTheme.size_jumbo,

        TextInputIcon_color: baseTheme.color_gray_40
      }
    },
    baseTheme
  )
});

const styles = {
  input: ({ size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    const fontSize =
      size === 'small'
        ? theme.TextInput_fontSize_small
        : theme.TextInput_fontSize;

    return {
      backgroundColor: 'transparent',
      border: 0,
      boxShadow: 'none',
      flex: '1 1 auto',
      fontFamily: 'inherit',
      height: getNormalizedValue(theme[`TextInput_height_${size}`], fontSize),
      minWidth: 0,
      width: '100%'
    };
  },
  root: ({ theme: baseTheme, variant }) => {
    let theme = componentTheme(baseTheme);

    if (variant) {
      theme = {
        ...theme,
        TextInputIcon_color: theme[`icon_color_${variant}`]
      };
    }

    return {
      alignItems: 'center',
      cursor: 'text',
      display: 'flex',
      width: '100%',

      '& [role="img"]': {
        color: theme.TextInputIcon_color,
        display: 'block',
        flex: '0 0 auto',
        margin: `0 ${theme.TextInputIcon_marginHorizontal}`,

        '&:last-of-type': {
          color: theme.TextInputIcon_color
        }
      }
    };
  }
};

const Root = createStyledComponent(FauxControl, styles.root, {
  displayName: 'TextInput'
});
const Input = createStyledComponent('input', styles.input, {
  dispayName: 'Input',
  rootEl: 'input'
});

/**
 * TextInput allows your app to accept a text value from the user. It supports
 * any of the text-based input types, such as `text`, `number` or `email`.
 */
export default function TextInput({
  className,
  disabled,
  iconEnd,
  iconStart,
  inputRef,
  invalid,
  prefix,
  readOnly,
  required,
  rootProps: otherRootProps,
  size = 'large',
  suffix,
  type = 'text',
  variant,
  ...restProps
}: Props) {
  const inputProps = {
    'aria-invalid': invalid,
    'aria-required': required,
    controlRef: inputRef,
    disabled,
    readOnly,
    required,
    type,
    ...restProps // Note: Props are spread to Input rather than Root
  };

  const rootProps = {
    className,
    control: Input,
    controlProps: inputProps,
    disabled,
    iconEnd,
    iconStart,
    prefix,
    readOnly,
    size,
    suffix,
    variant,
    ...otherRootProps
  };

  return <Root {...rootProps} />;
}
