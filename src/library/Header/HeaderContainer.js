/* @flow */
import React, { Children, cloneElement } from 'react';
import Flex, { FlexItem } from '../Flex';
// import { GridRoot as Root } from './styled';
// import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

import { headerContainerPropTypes } from './propTypes';
import type {
  HeaderContainerDefaultProps,
  HeaderContainerProps
} from './types';

const HeaderContainer = ({
  children,
  gutterWidth,
  minimal,
  ...restProps
}: HeaderContainerProps) => {
  const rootProps = {
    gutterWidth,
    paddingEnd: gutterWidth,
    ...restProps
  };
  const contents = Children.map(children, (child, index) => (
    <FlexItem key={index}>{cloneElement(child, { minimal })}</FlexItem>
  ));

  return <Flex {...rootProps}>{contents}</Flex>;
};

HeaderContainer.displayName = 'HeaderContainer';
const defaultProps: HeaderContainerDefaultProps = {
  // TODO: How to customize? Forward a prop from Header? Theme?
  gutterWidth: 'md'
};
HeaderContainer.defaultProps = defaultProps;
HeaderContainer.propTypes = headerContainerPropTypes;

export default HeaderContainer;
