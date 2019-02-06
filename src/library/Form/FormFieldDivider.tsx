/* @flow */
import React from 'react';
import { FormFieldDividerRoot as Root } from './styled';

import { formFieldDividerPropTypes } from './propTypes';
import { FormFieldDividerProps } from './types';

const FormFieldDivider = (props: FormFieldDividerProps) => (
  <Root {...props} role="separator" />
);

FormFieldDivider.displayName = 'FormFieldDivider';
FormFieldDivider.propTypes = formFieldDividerPropTypes;

export default FormFieldDivider;
