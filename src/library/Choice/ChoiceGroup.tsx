/* @flow */
import React, { Children, cloneElement, createElement } from 'react';
import { ChoiceGroupRoot as Root } from './styled';
import { SIZE, TYPE } from './constants';

import type { ChoiceGroupDefaultProps, ChoiceGroupProps } from './types';

const isChecked = (checked: string | Array<string>, value) => {
  return Array.isArray(checked)
    ? checked.indexOf(value) !== -1
    : checked === value;
};

const ChoiceGroup = (props: ChoiceGroupProps) => {
  const {
    checked,
    children,
    data,
    defaultChecked,
    inline,
    input,
    invalid,
    required,
    role,
    rootProps: otherRootProps,
    size,
    type,
    ...restProps
  } = props;
  const rootProps = {
    inline,
    role,
    size,
    ...otherRootProps
  };

  const inputProps = (value, index, inputData = {}) => {
    return {
      checked: checked !== undefined ? isChecked(checked, value) : undefined,
      defaultChecked:
        defaultChecked !== undefined
          ? isChecked(defaultChecked, value)
          : undefined,
      invalid: type === TYPE.checkbox ? undefined : invalid,
      key: index,
      required: type === TYPE.checkbox ? undefined : required,
      size,
      ...restProps, // Note: Props are spread to input rather than Root
      ...inputData
    };
  };

  let inputs = null;
  if (data && input) {
    inputs = data.map((inputData, index) => {
      return createElement(
        input,
        inputProps(inputData.value, index, inputData)
      );
    });
  } else if (children) {
    inputs = Children.map(children, (child, index) => {
      return cloneElement(child, inputProps(child.props.value, index));
    });
  }

  return <Root {...rootProps}>{inputs}</Root>;
};

const defaultProps: ChoiceGroupDefaultProps = {
  role: 'group',
  size: SIZE.large
};

ChoiceGroup.displayName = 'ChoiceGroup';
ChoiceGroup.defaultProps = defaultProps;

export default ChoiceGroup;
