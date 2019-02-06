/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import { GridItem as _GridItem } from '../../../../../library/Grid';
import { boxStyles } from '../../Box/common/DemoBox';

const Root = styled(_GridItem)((props) => boxStyles(props));

const DemoGridItem = (props: Object) => <Root {...props} />;

export default DemoGridItem;
