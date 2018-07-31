/* @flow */
import React, { PureComponent } from 'react';
import { createStyledComponent } from '../styles';
import { FlexItem } from '../Flex';
import { FormField } from '../Form';
import TextInput from '../TextInput';

type Props = {
  'aria-label'?: string,
  currentPage: number,
  inputRef: (node: ?HTMLInputElement) => void,
  messages: {|
    label: string,
    placeholder: string
  |},
  onPageChange: (currentPage: number) => void,
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  totalPages: number
};

const styles = {
  root: ({ width }) => ({ width }),
  input: {
    '& > input': {
      MozAppearance: 'textfield',

      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
      }
    }
  }
};

const NumberInput = createStyledComponent(TextInput, styles.input);
const Root = createStyledComponent(FlexItem, styles.root);

export default class PageJumper extends PureComponent<Props> {
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
