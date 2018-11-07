/* @flow */
import React from 'react';
import Checkbox from './Checkbox';
import { CheckboxGroupRoot as Root } from './styled';

import { checkboxGroupPropTypes } from './propTypes';
import type { CheckboxGroupProps } from './types';

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { rootProps: otherRootProps, ...restProps } = props;
  const rootProps = {
    rootProps: {
      ...otherRootProps
    },
    input: Checkbox,
    type: 'checkbox',
    ...restProps // Note: Props are spread to input rather than Root
  };

  return <Root {...rootProps} />;
};

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.propTypes = checkboxGroupPropTypes;

export default CheckboxGroup;
