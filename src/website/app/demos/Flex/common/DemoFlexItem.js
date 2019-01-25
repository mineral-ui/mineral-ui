/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import { FlexItem as _FlexItem } from '../../../../../library/Flex';
import { boxStyles } from '../../Box/common/DemoBox';

const Root = styled(_FlexItem)((props) => boxStyles(props));

const DemoFlexItem = (props: Object) => <Root {...props} />;

export default DemoFlexItem;
