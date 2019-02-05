/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import { pxToEm } from '../../../../../library/styles';

const Root = styled('div')(({ theme, width }) => ({
  overflow: 'hidden',

  '& > div': {
    backgroundColor: theme.color_white,
    float: 'left',
    margin: '0 0.5rem 0.5rem 0',
    // Default width is width of DropdownContent
    width: width || pxToEm(224)
  }
}));

const DemoLayout = (props: Object) => <Root {...props} />;

export default DemoLayout;
