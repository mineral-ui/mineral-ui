/* @flow */
import React, { Component } from 'react';
import { canUseDOM } from 'exenv';
import FontFaceObserver from 'fontfaceobserver';
import { TextAreaRoot as Root, Input } from './styled';
import { SIZE, SIZE_TO_ROWS } from './constants';

import { textAreaPropTypes } from './propTypes';
import { TextAreaDefaultProps, TextAreaProps } from './types';

export default class TextArea extends Component<TextAreaProps> {
  static displayName = 'TextArea';

  static defaultProps: TextAreaDefaultProps = {
    size: SIZE.large
  };

  static propTypes = textAreaPropTypes;

  textArea: HTMLTextAreaElement | null | undefined;

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

  componentDidUpdate(prevProps: TextAreaProps) {
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
      size,
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
      rows: rows || (size && SIZE_TO_ROWS[size]) || undefined,
      size,
      ...restProps // Note: Props are spread to TextArea rather than Root
    };

    const rootProps = {
      className,
      control: Input,
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

  handleInput = (event: React.SyntheticEvent) => {
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
