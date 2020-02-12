/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ theme }) => ({
    fontFamily: theme.fontFamily
  })
);

const DemoLayout = (props: Object) => <Root {...props} />;

export default DemoLayout;
