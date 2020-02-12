/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import _StartEnd from '../../../../../library/StartEnd';
import { containerStyles } from '../../Flex/common/DemoFlex';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled(_StartEnd)(
  (props) => ({
    ...containerStyles(props)
  })
);

const DemoStartEnd = (props: Object) => <Root {...props} />;

export default DemoStartEnd;
