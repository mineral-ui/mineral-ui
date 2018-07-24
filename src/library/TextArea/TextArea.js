/* @flow */
import React, { Component } from 'react';
import { canUseDOM } from 'exenv';
import FontFaceObserver from 'fontfaceobserver';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import FauxControl, {
  componentTheme as fauxControlComponentTheme
} from '../FauxControl/FauxControl';

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
  /**
   * @Private Used internally in conjunction with autoSize prop. Must also
   * support a custom function.
   */
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
      name: 'TextArea',
      theme: {
        // The following padding values make appearances equivalent to TextInputs of same size when rows=1.
        // This enables usage of a TextArea as a single line input that can accept multiple lines of text.
        TextArea_paddingVertical_jumbo: pxToEm(14.5),
        TextArea_paddingVertical_large: pxToEm(8.5),
        TextArea_paddingVertical_medium: pxToEm(4.5),
        TextArea_paddingVertical_small: pxToEm(2)
      }
    },
    baseTheme
  );

const ThemedFauxControl = createThemedComponent(
  FauxControl,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'TextArea',
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
  textArea: ({ resizeable, size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    const fontSize =
      size === 'small'
        ? theme.TextArea_fontSize_small
        : theme.TextArea_fontSize;
    const paddingVerticalNormalized = getNormalizedValue(
      theme[`TextArea_paddingVertical_${size}`],
      fontSize
    );

    return {
      backgroundColor: 'transparent',
      border: 0,
      boxShadow: 'none',
      flex: '1 1 auto',
      fontFamily: 'inherit',
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
      paddingBottom: paddingVerticalNormalized,
      paddingTop: paddingVerticalNormalized,
      resize: resizeable ? 'vertical' : 'none',
      width: '100%'
    };
  },
  root: {
    alignItems: 'center',
    cursor: 'text',
    display: 'flex',
    width: '100%'
  }
};

const Root = createStyledComponent(ThemedFauxControl, styles.root, {
  displayName: 'TextArea'
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

    const textAreaProps = {
      'aria-invalid': invalid,
      'aria-required': required,
      autoSize,
      controlRef: (ref) => {
        this.textArea = ref;
        if (inputRef) {
          inputRef(ref);
        }
      },
      disabled,
      onInput: this.handleInput,
      readOnly,
      required,
      resizeable: autoSize ? false : resizeable,
      rows: rows || (size && sizeToRows[size]) || undefined,
      size,
      ...restProps // Note: Props are spread to TextArea rather than Root
    };

    const rootProps = {
      className,
      control: _TextArea,
      controlProps: textAreaProps,
      disabled,
      iconEnd: null, // Opt out of the variant icon
      readOnly,
      size,
      variant,
      ...otherRootProps
    };

    return <Root {...rootProps} />;
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
