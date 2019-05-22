/* @flow */
import React from 'react';
import { TextInputRoot as Root, Input } from './styled';
import { SIZE, TYPE } from './constants';

import { textInputPropTypes } from './propTypes';
import type { TextInputDefaultProps, TextInputProps } from './types';

const TextInput = (props: TextInputProps) => {
  const {
    /* TargetX Custom props */
    borderRadius,

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
    /* TargetX Custom props */
    borderRadius,
    
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

TextInput.displayName = 'TextInput';
const defaultProps: TextInputDefaultProps = {
  size: SIZE.large,
  type: TYPE.text
};
TextInput.defaultProps = defaultProps;
TextInput.propTypes = textInputPropTypes;

export default TextInput;
