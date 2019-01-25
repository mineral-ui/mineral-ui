/* @flow */
import React from 'react';
import styled from '@emotion/styled';

const Root = styled('form')({
  '& > *:not(:last-child)': {
    marginBottom: '1rem'
  }
});

const DemoForm = (props: Object) => {
  const rootProps = {
    onSubmit: (event) => event.preventDefault(),
    ...props
  };

  return <Root {...rootProps} />;
};

export default DemoForm;
