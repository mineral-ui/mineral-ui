/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import _StartEnd from '../../../../../library/StartEnd';
import { containerStyles } from '../../Flex/common/DemoFlex';

const Root = styled(_StartEnd)((props) => ({
  ...containerStyles(props)
}));

const DemoStartEnd = (props: Object) => <Root {...props} />;

export default DemoStartEnd;
