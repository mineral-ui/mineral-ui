/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('form')({
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
