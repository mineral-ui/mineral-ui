/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import _Grid from '../../../../../library/Grid';
import { containerStyles } from '../../Flex/common/DemoFlex';

const Root = styled(_Grid)((props) => containerStyles(props));

const DemoGrid = (props: Object) => <Root {...props} />;

export default DemoGrid;
