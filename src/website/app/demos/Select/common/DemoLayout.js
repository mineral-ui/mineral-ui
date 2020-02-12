/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')({
  '&[class] > *:not(:last-child)': {
    marginBottom: '1rem'
  }
});

const DemoLayout = (props: Object) => <Root {...props} />;

export default DemoLayout;
