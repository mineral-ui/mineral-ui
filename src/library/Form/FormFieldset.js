/* @flow */
import React from 'react';
import { FormFieldsetRoot as Root } from './styled';

import { formFieldsetPropTypes } from './propTypes';
import type { FormFieldsetProps } from './types';

const FormFieldset = (props: FormFieldsetProps) => {
  const { children, legend, ...restProps } = props;
  return (
    <Root {...restProps}>
      {legend && <legend>{legend}</legend>}
      {children}
    </Root>
  );
};

FormFieldset.propTypes = formFieldsetPropTypes;

export default FormFieldset;
