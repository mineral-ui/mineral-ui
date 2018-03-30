/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../../library/styles';

const Form = createStyledComponent('form', {
  '& > *:not(:last-child)': {
    marginBottom: '1rem'
  }
});

const DemoForm = (props: Object) => {
  const formProps = {
    onSubmit: (event) => event.preventDefault(),
    ...props
  };

  return <Form {...formProps} />;
};

export default DemoForm;
