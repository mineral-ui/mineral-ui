/* @flow */
import React from 'react';
import Radio from './Radio';
import { RadioGroupRoot as Root } from './styled';

import { radioGroupPropTypes } from './propTypes';
import type { RadioGroupProps } from './types';

const RadioGroup = (props: RadioGroupProps) => {
  const { rootProps: otherRootProps, ...restProps } = props;
  const rootProps = {
    rootProps: {
      role: 'radiogroup',
      ...otherRootProps
    },
    input: Radio,
    type: 'radio',
    ...restProps // Note: Props are spread to input rather than Root
  };

  return <Root {...rootProps} />;
};

RadioGroup.displayName = 'RadioGroup';
RadioGroup.propTypes = radioGroupPropTypes;

export default RadioGroup;
