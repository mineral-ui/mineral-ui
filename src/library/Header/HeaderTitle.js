/* @flow */
import React, { Children, cloneElement } from 'react';
// import { GridRoot as Root } from './styled';
// import { ALIGN_ITEMS, GUTTER_WIDTH } from './constants';

import { headerTitlePropTypes } from './propTypes';
import type { HeaderTitleDefaultProps, HeaderTitleProps } from './types';

const HeaderTitle = (props: HeaderTitleProps) => <div {...props} />;

HeaderTitle.displayName = 'HeaderTitle';
const defaultProps: HeaderTitleDefaultProps = {};
HeaderTitle.defaultProps = defaultProps;
HeaderTitle.propTypes = headerTitlePropTypes;

export default HeaderTitle;
