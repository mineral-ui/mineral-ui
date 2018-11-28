/* @flow */
import React, { Children, cloneElement } from 'react';
import { FlexItem } from '../Flex';
import { HeaderRoot } from './styled';
// import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

import { headerPropTypes } from './propTypes';
import type { HeaderDefaultProps, HeaderProps } from './types';

const Header = ({ children, minimal, ...restProps }: HeaderProps) => {
  const rootProps = {
    minimal,
    ...restProps
  };
  const contents = Children.map(children, (child, index) => (
    <FlexItem key={index} grow={index === 1 ? 1 : 0}>
      {cloneElement(child, { minimal })}
    </FlexItem>
  ));

  return <HeaderRoot {...rootProps}>{contents}</HeaderRoot>;
};

Header.displayName = 'Header';
const defaultProps: HeaderDefaultProps = {
  gutterWidth: 'xl'
};
Header.defaultProps = defaultProps;
Header.propTypes = headerPropTypes;

export default Header;
