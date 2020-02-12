/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import type { DemoLayoutProps } from './types';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ includeLastChild, marginRight, marginBottom }) => {
    if (includeLastChild) {
      return {
        '&[class] > *': {
          marginRight,
          marginBottom
        }
      };
    } else {
      return {
        '&[class] > *:not(:last-child)': {
          marginRight,
          marginBottom
        }
      };
    }
  }
);

const DemoLayout = (props: DemoLayoutProps) => (
  <Root marginBottom="1rem" {...props} />
);

export default DemoLayout;
