/* @flow */
import React, { PureComponent } from 'react';
import { LABEL_POSITION, SIZE } from './constants';
import { ChoiceRoot as Root, Control, Input, Text } from './styled';

import type { ChoiceDefaultProps, ChoiceProps } from './types';

export default class Choice extends PureComponent<ChoiceProps> {
  static displayName = 'Choice';

  static defaultProps: ChoiceDefaultProps = {
    labelPosition: LABEL_POSITION.end,
    size: SIZE.large
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
      ref: (ref) => {
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
