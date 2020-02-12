/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import { FlexItem as _FlexItem } from '../../../../../library/Flex';
import { boxStyles } from '../../Box/common/DemoBox';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled(_FlexItem)(
  (props) => boxStyles(props)
);

const DemoFlexItem = (props: Object) => <Root {...props} />;

export default DemoFlexItem;
