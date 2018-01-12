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
import React, { Component } from 'react';
import { canUseDOM } from 'exenv';
import FontFaceObserver from 'fontfaceobserver';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';

type Props = {
  /** Automatically adjust the height of the input to fit the content */
  autoSize?: boolean,
  /** @Private CSS className */
  className?: string,
  /** Initial value of the input. Primarily for use with uncontrolled components */
  defaultValue?: string,
  /** Disables the input */
  disabled?: boolean,
  /** ref for the input */
  inputRef?: (node: ?React$Component<*, *>) => void,
  /** Props to be applied directly to the root element, rather than the input */
  rootProps?: Object,
  /** Indicates that the value of the element is invalid */
  invalid?: boolean,
  /** @Private Used internally in conjunction with autoSize prop. Must also support a custom function. */
  onInput?: (event: SyntheticEvent<>) => void,
  /** Function called when input value changes */
  onChange?: (event: SyntheticEvent<>) => void,
  /** Indicates that the user cannot modify the value of the input */
  readOnly?: boolean,
  /** Indicates that the user must fill in a value before submitting a form */
  required?: boolean,
  /** Indicates whether input is resizable. _Not currently supported in IE/Edge._ */
  resizeable?: boolean,
  /** The number of visible text lines in the input */
  rows?: number,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** The initial value of the input. Primarily for use with controlled components.  If this prop is specified, an onChange handler must also be specified.  Also see `defaultValue`. */
  value?: string,
  /** Available variants */
  variant?: 'success' | 'warning' | 'danger'
};

export const componentTheme = (baseTheme: Object) => ({
  TextArea_backgroundColor: baseTheme.backgroundColor_input,
  TextArea_borderColor: baseTheme.borderColor,
  TextArea_borderColor_active: baseTheme.borderColor,
  TextArea_borderColor_focus: baseTheme.borderColor,
  TextArea_borderColor_hover: baseTheme.borderColor_hover,
  TextArea_borderRadius: baseTheme.borderRadius_1,
  TextArea_borderWidth: '1px',
  TextArea_boxShadow_active: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_active}`,
  TextArea_boxShadow_focus: `0 0 0 1px ${baseTheme.color_white}, 0 0 0 2px ${baseTheme.borderColor_focus}`,
  TextArea_color_text: baseTheme.color_gray_80,
  TextArea_color_placeholder: baseTheme.color_gray_60,
  TextArea_fontSize: baseTheme.fontSize_ui,
  TextArea_fontSize_small: pxToEm(12),
  TextArea_paddingHorizontal: baseTheme.space_inset_md,
  // The following padding values make appearances equivalent to TextInputs of same size when rows=1.
  // This enables usage of a TextArea as a single line input that can accept multiple lines of text.
  TextArea_paddingVertical_jumbo: pxToEm(14.5),
  TextArea_paddingVertical_large: pxToEm(8.5),
  TextArea_paddingVertical_medium: pxToEm(4.5),
  TextArea_paddingVertical_small: pxToEm(2),

  ...baseTheme
});

const styles = {
  textArea: ({
    disabled,
    readOnly,
    resizeable,
    size,
    theme: baseTheme,
    variant
  }) => {
    let theme = componentTheme(baseTheme);
    if (variant) {
      // prettier-ignore
      theme = {
        ...theme,
        TextArea_borderColor_hover: theme[`borderColor_${variant}_hover`],
        TextArea_boxShadow_active: `0 0 0 1px ${theme.color_white}, 0 0 0 2px ${theme[`borderColor_${variant}`]}`,
        TextArea_boxShadow_focus: `0 0 0 1px ${theme.color_white}, 0 0 0 2px ${theme[`borderColor_${variant}`]}`
      };
    }

    const fontSize =
      size === 'small'
        ? theme.TextArea_fontSize_small
        : theme.TextArea_fontSize;
    const paddingVerticalNormalized = getNormalizedValue(
      theme[`TextArea_paddingVertical_${size}`],
      fontSize
    );
    const placeholderStyles = {
      color: theme.TextArea_color_placeholder,
      fontStyle: 'italic'
    };

    return {
      backgroundColor: 'transparent',
      border: 0,
      boxShadow: 'none',
      color: disabled ? theme.color_text_disabled : theme.TextArea_color_text,
      flex: '1 1 auto',
      fontFamily: 'inherit',
      fontSize,
      lineHeight: theme.lineHeight_prose,
      margin: theme.TextArea_borderWidth,
      // minHeight value is an attempt to display a single line of text.
      // It is needed when a user manually resizes a textarea.
      minHeight: `${parseFloat(paddingVerticalNormalized) * 2 +
        parseFloat(theme.TextArea_fontSize) * theme.lineHeight +
        parseFloat(pxToEm(parseFloat(theme.TextArea_borderWidth) * 2)) +
        parseFloat(pxToEm(2))}em`,
      minWidth: 0,
      outline: 0,
      padding: `${paddingVerticalNormalized} ${getNormalizedValue(
        theme.TextArea_paddingHorizontal,
        fontSize
      )}`,
      resize: resizeable ? 'vertical' : 'none',
      width: '100%',

      '&::placeholder': placeholderStyles,
      '&::-ms-input-placeholder': placeholderStyles, // Edge
      '&:-ms-input-placeholder': placeholderStyles, // IE 11

      '&::-ms-clear': {
        display: 'none'
      },

      '&:hover,&[data-simulate-hover]': {
        '& ~ div': {
          borderColor: !disabled ? theme.TextArea_borderColor_hover : null
        }
      },

      '&:focus,&[data-simulate-focus]': {
        '& ~ div': {
          borderColor: theme.TextArea_borderColor_focus,
          boxShadow: theme.TextArea_boxShadow_focus
        }
      },

      '&:active,&[data-simulate-active]': {
        '& ~ div': {
          borderColor: theme.TextArea_borderColor_active,
          boxShadow: disabled ? 'none' : theme.TextArea_boxShadow_active
        }
      },

      '& ~ div': {
        backgroundColor:
          disabled || readOnly
            ? theme.backgroundColor_disabled
            : theme.TextArea_backgroundColor,
        borderColor:
          variant && !disabled && !readOnly
            ? theme[`borderColor_${variant}`]
            : theme.TextArea_borderColor,
        borderRadius: theme.TextArea_borderRadius,
        borderStyle: 'solid',
        borderWidth: theme.TextArea_borderWidth,
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: -1
      }
    };
  },
  root: {
    alignItems: 'center',
    cursor: 'text',
    display: 'flex',
    position: 'relative',
    width: '100%'
  }
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'TextArea',
  includeStyleReset: true
});
const _TextArea = createStyledComponent('textarea', styles.textArea, {
  rootEl: 'textarea'
});

const sizeToRows = {
  small: 2,
  medium: 6,
  large: 8,
  jumbo: 12
};

/**
 * TextArea allows your app to accept a potentially lengthy text value from the
 * user.
 */
export default class TextArea extends Component<Props> {
  textArea: ?HTMLTextAreaElement;

  componentDidMount() {
    this.autoSize();

    // Auto sized height can sometimes be slightly incorrect before web font has
    // loaded due differences in font metrics.  Here we call it again after the
    // fontFamily has loaded.
    if (this.textArea && canUseDOM) {
      const fontFamily = window
        .getComputedStyle(this.textArea)
        .fontFamily.replace(/["']/g, '')
        .split(',')[0];
      const font = new FontFaceObserver(fontFamily);
      font.load().then(this.autoSize, () => {});
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { autoSize, rows, size, value } = this.props;
    const {
      autoSize: prevAutoSize,
      rows: prevRows,
      size: prevSize,
      value: prevValue
    } = prevProps;

    if (
      autoSize &&
      (!prevAutoSize ||
        value !== prevValue ||
        rows !== prevRows ||
        size !== prevSize)
    ) {
      this.autoSize();
    }

    if (!autoSize && prevAutoSize) {
      this.removeAutoSize();
    }
  }

  render() {
    const {
      autoSize,
      className,
      disabled,
      inputRef,
      invalid,
      readOnly,
      required,
      resizeable = true,
      rootProps: otherRootProps,
      rows,
      size = 'large',
      variant,
      ...restProps
    } = this.props;

    const rootProps = {
      className,
      variant,
      ...otherRootProps
    };

    const textAreaProps = {
      'aria-invalid': invalid,
      'aria-required': required,
      autoSize,
      disabled,
      innerRef: ref => {
        this.textArea = ref;
        if (inputRef) {
          inputRef(ref);
        }
      },
      onInput: this.handleInput,
      readOnly,
      required,
      resizeable: autoSize ? false : resizeable,
      rows: rows || (size && sizeToRows[size]) || undefined,
      size,
      variant,
      ...restProps // Note: Props are spread to TextArea rather than Root
    };

    return (
      <Root {...rootProps}>
        <_TextArea {...textAreaProps} />
        <div />
      </Root>
    );
  }

  handleInput = (event: SyntheticEvent<>) => {
    const { autoSize, onInput } = this.props;

    autoSize && this.autoSize();

    onInput && onInput(event);
  };

  autoSize = () => {
    const { autoSize } = this.props;
    if (!autoSize || !this.textArea || !canUseDOM) {
      return;
    }

    const { maxHeight, minHeight } = window.getComputedStyle(this.textArea);

    /** $FlowFixMe */
    this.textArea.style.height = 'auto';
    /** $FlowFixMe */
    this.textArea.style.overflowY = 'hidden';
    /** $FlowFixMe */
    this.textArea.style.height = `${Math.max(
      parseFloat(minHeight),
      Math.min(
        /** $FlowFixMe */
        parseFloat(this.textArea.scrollHeight),
        parseFloat(maxHeight) || window.Infinity
      )
    )}px`;
  };

  removeAutoSize = () => {
    if (this.textArea) {
      this.textArea.style.height = '';
      this.textArea.style.overflowY = '';
    }
  };
}
