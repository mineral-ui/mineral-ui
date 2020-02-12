/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import { pxToEm } from '../../../../../library/styles';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ theme, width }) => ({
    overflow: 'hidden',

    '& > div': {
      backgroundColor: theme.color_white,
      float: 'left',
      margin: '0 0.5rem 0.5rem 0',
      // Default width is width of DropdownContent
      width: width || pxToEm(224)
    }
  })
);

const DemoLayout = (props: Object) => <Root {...props} />;

export default DemoLayout;
