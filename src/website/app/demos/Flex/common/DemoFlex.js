/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import _Flex from '../../../../../library/Flex';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

type Props = {
  gutterWidth?: number | string,
  theme: Object
};

export const containerStyles = ({ theme }: Props) => ({
  outline: `1px dotted ${theme.color_theme_30}`,
  outlineOffset: 4
});

const Root: StyledComponent<{ [key: string]: any }> = styled(_Flex)((props) =>
  containerStyles(props)
);

const DemoFlex = (props: Props) => <Root {...props} />;

export default DemoFlex;
