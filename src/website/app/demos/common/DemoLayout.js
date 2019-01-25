/* @flow */
import React from 'react';
import styled from '@emotion/styled';

import type { DemoLayoutProps } from './types';

const Root = styled('div')(
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
