/* @flow */
import React from 'react';
import styled from '@emotion/styled';

const Root = styled('div')({
  '&[class] > *:not(:last-child)': {
    marginBottom: '1rem'
  }
});

const DemoLayout = (props: Object) => <Root {...props} />;

export default DemoLayout;
