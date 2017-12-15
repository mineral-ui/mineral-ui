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
import React from 'react';
import { hideVisually } from 'polished';
import { createStyledComponent, pxToEm } from '../styles';

type Props = {
  /**
   * Checked state of the radio button. Primarily for use with controlled
   * components. If this prop is specified, an `onChange` handler must also be
   * specified. See also: `defaultChecked`.
   */
  checked?: boolean,
  /** @Private CSS className */
  className?: string,
  /**
   * Initial checked state of the radio button; primarily for use with
   * uncontrolled components
   */
  defaultChecked?: boolean,
  /** Disables the radio button */
  disabled?: boolean,
  /** Ref for the radio button */
  inputRef?: (node: ?React$Component<*, *>) => void,
  /** Props to be applied directly to the root element rather than the input */
  rootProps?: Object,
  /** Indicates that the value of the input is invalid */
  invalid?: boolean,
  /** Label associated with the input element */
  label: string | React$Element<*>,
  /** Used to uniquely define a group of radio buttons */
  name?: string,
  /** Function called when a radio button is selected */
  onChange?: (event: SyntheticEvent<>) => void,
  /** Indicates that the user must select an option before submitting a form */
  required?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** The value of the radio button */
  value?: string
};

export const componentTheme = (baseTheme: Object) => {
  const colors = {
    background: baseTheme.color_white,
    regular: baseTheme.borderColor,
    checked: baseTheme.color_theme_60,
    focus: baseTheme.color_theme_60,
    hover: baseTheme.color_theme_70
  };

  return {
    RadioControl_backgroundColor: colors.background,
    RadioControl_backgroundColor_checked: colors.checked,
    RadioControl_backgroundColor_checkedHover: colors.hover,

    RadioControl_borderColor: colors.regular,
    RadioControl_borderColor_focus: colors.focus,
    RadioControl_borderColor_hover: colors.hover,
    RadioControl_borderColor_checked: colors.checked,
    RadioControl_borderColor_checkedFocus: colors.background,
    RadioControl_borderColor_checkedHover: colors.hover,

    RadioControl_boxShadow_focus: `0 0 0 1px ${colors.background}, 0 0 0 2px ${colors.focus}`,
    RadioControl_boxShadow_checkedFocus: `0 0 0 1px ${colors.focus}`,

    RadioControl_marginHorizontal: baseTheme.space_inline_md,
    RadioControl_size: pxToEm(16),
    RadioControl_size_jumbo: pxToEm(24),

    RadioIcon_size: pxToEm(8),
    RadioIcon_size_jumbo: pxToEm(16),

    RadioText_color_text: baseTheme.color_text_80,
    RadioText_fontSize: baseTheme.fontSize_ui,
    RadioText_fontSize_small: pxToEm(12),

    ...baseTheme
  };
};

const styles = {
  control: ({ disabled, size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';
    const backgroundColor = disabled
      ? theme.backgroundColor_disabled
      : theme.RadioControl_backgroundColor;
    const controlDimensions =
      size === 'jumbo'
        ? theme.RadioControl_size_jumbo
        : theme.RadioControl_size;
    const svgDimensions =
      size === 'jumbo' ? theme.RadioIcon_size_jumbo : theme.RadioIcon_size;

    return {
      alignItems: 'center',
      backgroundColor,
      borderColor: theme.RadioControl_borderColor,
      borderRadius: '100%',
      borderStyle: 'solid',
      borderWidth: '1px',
      color: backgroundColor,
      content: ' ',
      display: 'inline-flex',
      flex: 'none',
      height: controlDimensions,
      justifyContent: 'center',
      marginLeft: rtl ? theme.RadioControl_marginHorizontal : 0,
      marginRight: rtl ? 0 : theme.RadioControl_marginHorizontal,
      width: controlDimensions,

      '& svg': {
        fill: 'currentColor',
        height: svgDimensions,
        width: svgDimensions
      }
    };
  },
  input: ({ disabled, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      ...hideVisually(),

      // NOTE: These hover styles are only needed for the "states" demo.
      // Otherwise they are applied from styles.root
      '&:hover,&[data-simulate-hover]': {
        '& + span': {
          borderColor: !disabled && theme.RadioControl_borderColor_hover
        }
      },

      '&:focus,&[data-simulate-focus]': {
        '& + span': {
          boxShadow: theme.RadioControl_boxShadow_focus
        }
      },

      '&:checked': {
        ...(disabled
          ? {
              '& + span': {
                backgroundColor: theme.RadioControl_borderColor,
                borderColor: theme.RadioControl_borderColor,
                color: theme.RadioControl_backgroundColor
              }
            }
          : {
              '& + span': {
                backgroundColor: theme.RadioControl_backgroundColor_checked,
                borderColor: theme.RadioControl_borderColor_checked
              },

              '&:hover,&[data-simulate-hover]': {
                '& + span': {
                  backgroundColor:
                    theme.RadioControl_backgroundColor_checkedHover,
                  borderColor: theme.RadioControl_borderColor_checkedHover
                }
              },

              '&:focus,&[data-simulate-focus]': {
                '& + span': {
                  borderColor: theme.RadioControl_borderColor_checkedFocus,
                  boxShadow: theme.RadioControl_boxShadow_checkedFocus
                }
              }
            })
      }
    };
  },
  root: ({ disabled, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      alignItems: 'center',
      cursor: !disabled && 'pointer',
      display: 'flex',
      position: 'relative',

      '&:hover,&[data-simulate-hover]': {
        '& span:first-of-type': {
          borderColor: !disabled && theme.RadioControl_borderColor_hover
        }
      }
    };
  },
  text: ({ disabled, size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      color: disabled ? theme.color_text_disabled : theme.RadioText_color_text,
      fontSize:
        size === 'small'
          ? theme.RadioText_fontSize_small
          : theme.RadioText_fontSize
    };
  }
};

const Root = createStyledComponent('label', styles.root, {
  displayName: 'Radio',
  includeStyleReset: true
});
const Input = createStyledComponent('input', styles.input, {
  rootEl: 'input'
});
const Text = createStyledComponent('span', styles.text);
const Control = createStyledComponent('span', styles.control);

/**
 * Radio allows users to select a single option from a set.
 *
 * Mineral UI also provides a [RadioGroup](../radio-group), which offers a
 * simpler API for working with a group of Radios.
 */
export default function Radio({
  className,
  disabled,
  inputRef,
  invalid,
  label,
  required,
  rootProps: otherRootProps,
  size = 'large',
  ...restProps
}: Props) {
  const rootProps = {
    className,
    disabled,
    ...otherRootProps
  };

  const inputProps = {
    'aria-invalid': invalid,
    'aria-required': required,
    disabled,
    innerRef: ref => {
      if (inputRef) {
        inputRef(ref);
      }
    },
    required,
    size,
    type: 'radio',
    ...restProps // Note: Props are spread to Input rather than Root
  };

  const controlProps = {
    disabled,
    size
  };

  const textProps = {
    disabled,
    size
  };

  return (
    <Root {...rootProps}>
      <Input {...inputProps} />
      <Control {...controlProps}>
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <circle cx="12" cy="12" r="6" />
        </svg>
      </Control>
      <Text {...textProps}>{label}</Text>
    </Root>
  );
}
