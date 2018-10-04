/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
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
  /** HTML `size` attribute */
  htmlSize?: number | string,
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
    | 'search'
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

export const componentTheme = (baseTheme: Object) =>
  mapComponentThemes(
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
  );

const ThemedFauxControl = createThemedComponent(
  FauxControl,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'TextInput',
        theme: componentTheme(baseTheme)
      },
      {
        name: 'FauxControl',
        theme: {}
      },
      baseTheme
    )
);

const styles = {
  input: ({ controlSize, size: nonHtmlSize, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    const size = controlSize || nonHtmlSize;

    return {
      backgroundColor: 'transparent',
      border: 0,
      boxShadow: 'none',
      flex: '1 1 auto',
      fontFamily: 'inherit',
      height: theme[`TextInput_height_${size}`],
      minWidth: 0,
      width: '100%',

      // Normalize Safari search inputs
      '&[type="search"]': {
        WebkitAppearance: 'none',

        '&::-webkit-search-decoration': {
          WebkitAppearance: 'none'
        }
      }
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

const Input = createStyledComponent('input', styles.input, {
  displayName: 'Input',
  rootEl: 'input',
  forwardProps: ['size']
});
const Root = createStyledComponent(ThemedFauxControl, styles.root, {
  displayName: 'TextInput'
});

/**
 * TextInput allows your app to accept a text value from the user. It supports
 * any of the text-based input types, such as `text`, `number` or `email`.
 */
const TextInput = (props: Props) => {
  const {
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
    size,
    suffix,
    variant,
    ...restProps
  } = props;
  const inputProps = {
    'aria-invalid': invalid,
    'aria-required': required,
    controlRef: inputRef,
    disabled,
    readOnly,
    required,
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
};

TextInput.defaultProps = {
  size: 'large',
  type: 'text'
};

export default TextInput;
