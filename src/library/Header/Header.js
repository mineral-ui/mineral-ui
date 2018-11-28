/* @flow */
import React, { Children, cloneElement } from 'react';
// import { GridRoot as Root } from './styled';
// import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

import { headerPropTypes } from './propTypes';
import type { HeaderDefaultProps, HeaderProps } from './types';

const Header = (props: HeaderProps) => <div {...props} />;

Header.displayName = 'Header';
const defaultProps: HeaderDefaultProps = {};
Header.defaultProps = defaultProps;
Header.propTypes = headerPropTypes;

export default Header;
