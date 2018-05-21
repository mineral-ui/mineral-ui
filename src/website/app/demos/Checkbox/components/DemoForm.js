/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../../library/styles';

const Form = createStyledComponent('form', {
  '& > *:not(:last-child)': {
    marginBottom: '1rem'
  }
});

export default function DemoForm(props: Object) {
  const formProps = {
    onSubmit: (event) => event.preventDefault(),
    ...props
  };

  return <Form {...formProps} />;
}
