/* @flow */
import styled from '@emotion/styled';
import { clearFix } from 'polished';
import React from 'react';
import { ignoreSsrWarning } from '../../../../../library/utils/emotion';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ lastRowStartsAt }) => {
    const condition = lastRowStartsAt
      ? `:nth-child(n + ${lastRowStartsAt})${ignoreSsrWarning}`
      : ':last-child';
    return {
      ...clearFix(),

      [`& > *:not(${condition})`]: {
        marginBottom: '1rem'
      }
    };
  }
);

const DemoLayout = (props: Object) => <Root {...props} />;

export default DemoLayout;
