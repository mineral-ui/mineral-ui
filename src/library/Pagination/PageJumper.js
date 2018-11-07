/* @flow */
import React, { PureComponent } from 'react';
import { FormField } from '../Form';
import {
  PageJumperRoot as Root,
  PageJumperNumberInput as NumberInput
} from './styled';

import type { PageJumperProps } from './types';

export default class PageJumper extends PureComponent<PageJumperProps> {
  render() {
    const { inputRef, messages, size, ...restProps } = this.props;
    const rootProps = {
      ...restProps
    };

    const { label, placeholder } = messages;
    const inputProps = {
      label,
      hideLabel: true,
      input: NumberInput,
      caption: label,
      inputRef,
      onBlur: this.handlePageJump,
      onKeyDown: this.handlePageJump,
      pattern: '[0-9]*',
      placeholder,
      size,
      type: 'number'
    };

    return (
      <Root {...rootProps}>
        <FormField {...inputProps} />
      </Root>
    );
  }

  handlePageJump = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const { key, currentTarget: input, type } = event;

    if (type === 'blur' || (type === 'keydown' && key === 'Enter')) {
      const { currentPage, onPageChange, totalPages } = this.props;
      const page = parseInt(input.value);
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange(page);
      }
    }
  };
}
