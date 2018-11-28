/* @flow */
import React, { Children, cloneElement } from 'react';
// import { GridRoot as Root } from './styled';
// import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

import { headerBackButtonPropTypes } from './propTypes';
import type {
  HeaderBackButtonDefaultProps,
  HeaderBackButtonProps
} from './types';

const HeaderBackButton = (props: HeaderBackButtonProps) => <div {...props} />;

HeaderBackButton.displayName = 'HeaderBackButton';
const defaultProps: HeaderBackButtonDefaultProps = {};
HeaderBackButton.defaultProps = defaultProps;
HeaderBackButton.propTypes = headerBackButtonPropTypes;

export default HeaderBackButton;
