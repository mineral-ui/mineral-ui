/* @flow */
import React from 'react';
import styled from '@emotion/styled';

const Root = styled('div')(({ theme }) => ({
  fontFamily: theme.fontFamily
}));

const DemoLayout = (props: Object) => <Root {...props} />;

export default DemoLayout;
