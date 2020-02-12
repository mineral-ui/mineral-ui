/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')({
  width: '13.75em'
});

const DemoLayout = (props: Object) => (
  <Root {...props}>
    Light years star stuff harvesting star light citizens of distant epochs
    encyclopaedia galactica.
  </Root>
);

export default DemoLayout;
