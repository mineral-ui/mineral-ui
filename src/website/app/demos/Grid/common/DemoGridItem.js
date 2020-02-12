/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import { GridItem as _GridItem } from '../../../../../library/Grid';
import { boxStyles } from '../../Box/common/DemoBox';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled(_GridItem)(
  (props) => boxStyles(props)
);

const DemoGridItem = (props: Object) => <Root {...props} />;

export default DemoGridItem;
