/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React, { cloneElement } from 'react';
import { ellipsis } from 'polished';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';

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
  /** The initial value of the input. Primarily for use with controlled components.  If this prop is specified, an onChange handler must also be specified.  Also see `defaultValue`. */
  value?: string,
  /** Available variants */
  variant?: 'success' | 'warning' | 'danger'
};

export const componentTheme = (baseTheme: Object) => ({
  TextInput_backgroundColor: baseTheme.backgroundColor_input,
  TextInput_borderColor: baseTheme.borderColor,
  TextInput_borderColor_active: baseTheme.borderColor,
  TextInput_borderColor_focus: baseTheme.borderColor,
  TextInput_borderColor_hover: baseTheme.borderColor_hover,
  TextInput_borderRadius: baseTheme.borderRadius_1,
  TextInput_borderWidth: '1px',
  TextInput_boxShadow_active: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_active}`,
  TextInput_boxShadow_focus: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_focus}`,
  TextInput_color_text: baseTheme.color_gray_80,
  TextInput_color_placeholder: baseTheme.color_gray_60,
  TextInput_fontSize: baseTheme.fontSize_ui,
  TextInput_fontSize_small: pxToEm(12),
  TextInput_height_small: baseTheme.size_small,
  TextInput_height_medium: baseTheme.size_medium,
  TextInput_height_large: baseTheme.size_large,
  TextInput_height_jumbo: baseTheme.size_jumbo,
  TextInput_paddingHorizontal: baseTheme.space_inset_md,

  TextInputIcon_fill: baseTheme.color_gray_40,
  TextInputIcon_marginHorizontal: baseTheme.space_inline_sm,

  ...baseTheme
});

const styles = {
  input: ({
    disabled,
    iconEnd,
    iconStart,
    prefix,
    readOnly,
    size,
    suffix,
    theme: baseTheme,
    variant
  }) => {
    let theme = componentTheme(baseTheme);
    if (variant) {
      // prettier-ignore
      theme = {
        ...theme,
        TextInput_borderColor_hover: theme[`borderColor_${variant}_hover`],
        TextInput_boxShadow_active: `0 0 0 1px ${theme.color_white}, 0 0 0 2px ${theme[`borderColor_${variant}`]}`,
        TextInput_boxShadow_focus: `0 0 0 1px ${theme.color_white}, 0 0 0 2px ${theme[`borderColor_${variant}`]}`,
      };
    }

    const rtl = theme.direction === 'rtl';
    const fontSize =
      size === 'small'
        ? theme.TextInput_fontSize_small
        : theme.TextInput_fontSize;
    const paddingWithoutIcon = getNormalizedValue(
      theme.TextInput_paddingHorizontal,
      fontSize
    );

    const placeholderStyles = {
      color: theme.TextInput_color_placeholder,
      fontStyle: 'italic'
    };

    return {
      backgroundColor: 'transparent',
      border: 0,
      boxShadow: 'none',
      color: disabled ? theme.color_text_disabled : theme.TextInput_color_text,
      flex: '1 1 auto',
      fontFamily: 'inherit',
      fontSize,
      height: getNormalizedValue(theme[`TextInput_height_${size}`], fontSize),
      minWidth: 0,
      outline: 0,
      paddingLeft:
        ((iconStart || prefix) && !rtl) ||
        ((iconEnd || variant || suffix) && rtl)
          ? 0
          : paddingWithoutIcon,
      paddingRight:
        ((iconEnd || variant || suffix) && !rtl) ||
        ((iconStart || prefix) && rtl)
          ? 0
          : paddingWithoutIcon,
      width: '100%',

      '&::placeholder': placeholderStyles,
      '&::-ms-input-placeholder': placeholderStyles, // Edge
      '&:-ms-input-placeholder': placeholderStyles, // IE 11

      '&::-ms-clear': {
        display: 'none'
      },

      '&:hover,&[data-simulate-hover]': {
        '& ~ div': {
          borderColor: !disabled ? theme.TextInput_borderColor_hover : null
        }
      },

      '&:focus,&[data-simulate-focus]': {
        '& ~ div': {
          borderColor: theme.TextInput_borderColor_focus,
          boxShadow: theme.TextInput_boxShadow_focus
        }
      },

      '&:active,&[data-simulate-active]': {
        '& ~ div': {
          borderColor: theme.TextInput_borderColor_active,
          boxShadow: disabled ? 'none' : theme.TextInput_boxShadow_active
        }
      },

      '& ~ div': {
        backgroundColor:
          disabled || readOnly
            ? theme.backgroundColor_disabled
            : theme.TextInput_backgroundColor,
        borderColor:
          variant && !disabled && !readOnly
            ? theme[`borderColor_${variant}`]
            : theme.TextInput_borderColor,
        borderRadius: theme.TextInput_borderRadius,
        borderStyle: 'solid',
        borderWidth: theme.TextInput_borderWidth,
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: -1
      }
    };
  },
  prefix: ({ iconStart, size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    const fontSize =
      size === 'small'
        ? theme.TextInput_fontSize_small
        : theme.TextInput_fontSize;
    const marginWithIcon = getNormalizedValue(
      theme.TextInput_paddingHorizontal,
      fontSize
    );
    const marginWithoutIcon = getNormalizedValue(
      `${parseFloat(theme.TextInputIcon_marginHorizontal) / 2}em`,
      fontSize
    );

    return {
      flex: '0 0 auto',
      fontSize,
      marginLeft: rtl ? marginWithoutIcon : iconStart ? 0 : marginWithIcon,
      marginRight: rtl ? (iconStart ? 0 : marginWithIcon) : marginWithoutIcon,
      whiteSpace: 'nowrap',
      ...ellipsis('8em')
    };
  },
  root: ({ theme: baseTheme, variant }) => {
    const theme = componentTheme(baseTheme);

    return {
      alignItems: 'center',
      cursor: 'text',
      display: 'flex',
      position: 'relative',
      width: '100%',

      '& [role="img"]': {
        display: 'block',
        fill: theme.TextInputIcon_fill,
        flex: '0 0 auto',
        margin: `0 ${theme.TextInputIcon_marginHorizontal}`,

        '&:last-of-type': {
          fill: variant
            ? theme[`color_text_${variant}`]
            : theme.TextInputIcon_fill
        }
      }
    };
  },
  suffix: ({ iconEnd, size, theme: baseTheme, variant }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    const fontSize =
      size === 'small'
        ? theme.TextInput_fontSize_small
        : theme.TextInput_fontSize;
    const marginWithIcon = getNormalizedValue(
      theme.TextInput_paddingHorizontal,
      fontSize
    );
    const marginWithoutIcon = getNormalizedValue(
      `${parseFloat(theme.TextInputIcon_marginHorizontal) / 2}em`,
      fontSize
    );

    return {
      flex: '0 0 auto',
      fontSize,
      marginLeft: rtl
        ? iconEnd || variant ? 0 : marginWithIcon
        : marginWithoutIcon,
      marginRight: rtl
        ? marginWithoutIcon
        : iconEnd || variant ? 0 : marginWithIcon,
      whiteSpace: 'nowrap',
      ...ellipsis('8em')
    };
  }
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'TextInput',
  includeStyleReset: true
});
const Input = createStyledComponent('input', styles.input, {
  rootEl: 'input'
});
const Prefix = createStyledComponent('span', styles.prefix);
const Suffix = createStyledComponent('span', styles.suffix);

const variantIcons = {
  danger: <IconDanger />,
  success: <IconSuccess />,
  warning: <IconWarning />
};

function getIcons({
  disabled,
  iconStart,
  iconEnd,
  readOnly,
  size,
  variant,
  variantIcons
}) {
  if (disabled || readOnly) {
    return [];
  }

  const iconSize = size === 'small' ? 'medium' : pxToEm(24);
  const startIcon =
    iconStart &&
    cloneElement(iconStart, {
      size: iconSize,
      key: 'iconStart'
    });

  const endIconSource = variant
    ? variantIcons[variant]
    : iconEnd ? iconEnd : null;

  const endIcon =
    endIconSource &&
    cloneElement(endIconSource, {
      size: iconSize,
      key: 'iconEnd'
    });

  return [startIcon, endIcon];
}

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
  rootProps: otherRootProps,
  invalid,
  prefix,
  readOnly,
  required,
  size = 'large',
  suffix,
  type = 'text',
  variant,
  ...restProps
}: Props) {
  const rootProps = {
    className,
    variant,
    ...otherRootProps
  };

  const inputProps = {
    'aria-invalid': invalid,
    'aria-required': required,
    disabled,
    iconEnd,
    iconStart,
    innerRef: ref => {
      if (inputRef) {
        inputRef(ref);
      }
    },
    prefix,
    readOnly,
    required,
    size,
    suffix,
    type,
    variant,
    ...restProps // Note: Props are spread to Input rather than Root
  };

  const prefixAndSuffixProps = {
    iconEnd,
    iconStart,
    size,
    variant
  };

  const [startIcon, endIcon] = getIcons({
    disabled,
    iconStart,
    iconEnd,
    readOnly,
    size,
    variant,
    variantIcons
  });

  return (
    <Root {...rootProps}>
      {startIcon}
      {prefix && <Prefix {...prefixAndSuffixProps}>{prefix}</Prefix>}
      <Input {...inputProps} />
      {suffix && <Suffix {...prefixAndSuffixProps}>{suffix}</Suffix>}
      {endIcon}
      <div />
    </Root>
  );
}
