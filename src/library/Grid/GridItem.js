/* @flow */
import React from 'react';
import { GridItemRoot as Root } from './styled';

import { gridItemPropTypes } from './propTypes';
import type { GridItemProps } from './types';

const GridItem = (props: GridItemProps) => <Root {...props} />;

GridItem.displayName = 'GridItem';
GridItem.propTypes = gridItemPropTypes;

export default GridItem;
