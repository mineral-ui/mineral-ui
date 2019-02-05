/* @flow */
import React from 'react';
import { clearFix } from 'polished';
import styled from '@emotion/styled';

const Root = styled('div')(({ lastRowStartsAt }) => {
  const condition = lastRowStartsAt
    ? `:nth-child(n + ${lastRowStartsAt})`
    : ':last-child';
  return {
    ...clearFix(),

    [`& > *:not(${condition})`]: {
      marginBottom: '1rem'
    }
  };
});

const DemoLayout = (props: Object) => <Root {...props} />;

export default DemoLayout;
