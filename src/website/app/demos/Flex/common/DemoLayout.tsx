/* @flow */
import React from 'react';
import { clearFix } from 'polished';
import styled from '@emotion/styled';
import { ignoreSsrWarning } from '../../../../../library/utils/emotion';

const Root = styled('div')(({ lastRowStartsAt }) => {
  const condition = lastRowStartsAt
    ? `:nth-child(n + ${lastRowStartsAt})${ignoreSsrWarning}`
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
