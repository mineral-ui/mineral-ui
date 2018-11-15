/* @flow */
import React from 'react';
import { MenuGroupTitleRoot as Root } from './styled';

import { menuGroupTitlePropTypes } from './propTypes';
import type { MenuGroupTitleProps } from './types';

const MenuGroupTitle = (props: MenuGroupTitleProps) => <Root {...props} />;

MenuGroupTitle.displayName = 'MenuGroupTitle';
MenuGroupTitle.propTypes = menuGroupTitlePropTypes;

export default MenuGroupTitle;
