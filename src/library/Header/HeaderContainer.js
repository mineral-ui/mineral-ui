/* @flow */
import React, { Children, cloneElement } from 'react';
// import { GridRoot as Root } from './styled';
// import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

import { headerContainerPropTypes } from './propTypes';
import type {
  HeaderContainerDefaultProps,
  HeaderContainerProps
} from './types';

const HeaderContainer = (props: HeaderContainerProps) => <div {...props} />;

HeaderContainer.displayName = 'HeaderContainer';
const defaultProps: HeaderContainerDefaultProps = {};
HeaderContainer.defaultProps = defaultProps;
HeaderContainer.propTypes = headerContainerPropTypes;

export default HeaderContainer;
