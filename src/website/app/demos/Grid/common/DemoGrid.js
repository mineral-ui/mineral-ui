/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import _Grid from '../../../../../library/Grid';
import { containerStyles } from '../../Flex/common/DemoFlex';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled(_Grid)((props) =>
  containerStyles(props)
);

const DemoGrid = (props: Object) => <Root {...props} />;

export default DemoGrid;
