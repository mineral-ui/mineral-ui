/* @flow */
import React from 'react';
import {
  createHeaderTitleLogoNode,
  HeaderTitleRoot,
  HeaderTitleTitle
} from './styled';
// import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

import { headerTitlePropTypes } from './propTypes';
import type { HeaderTitleDefaultProps, HeaderTitleProps } from './types';

const HeaderTitle = ({ children, logo, ...rootProps }: HeaderTitleProps) => {
  const Logo = logo && createHeaderTitleLogoNode(logo);

  return (
    <HeaderTitleRoot {...rootProps}>
      {Logo && <Logo />}
      <HeaderTitleTitle>{children}</HeaderTitleTitle>
    </HeaderTitleRoot>
  );
};

HeaderTitle.displayName = 'HeaderTitle';
const defaultProps: HeaderTitleDefaultProps = {};
HeaderTitle.defaultProps = defaultProps;
HeaderTitle.propTypes = headerTitlePropTypes;

export default HeaderTitle;
