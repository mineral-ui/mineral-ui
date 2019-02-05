/* @flow */
import React from 'react';
import { Popper } from 'react-popper';
import { withTheme } from 'emotion-theming';

import type { RtlPopperProps } from './types';

const getRtlPlacement = (placement: string) => {
  const rtlPlacementMap = {
    end: 'start',
    start: 'end'
  };
  const [edge, direction] = placement.split('-');

  if (['bottom', 'top'].indexOf(edge) !== -1) {
    return placement.replace(direction, rtlPlacementMap[direction]);
  }

  return placement;
};

// eslint-disable-next-line react/display-name
function RtlPopper({ placement, theme, ...restProps }: RtlPopperProps) {
  const rootProps = {
    placement:
      placement && theme.direction === 'rtl'
        ? getRtlPlacement(placement)
        : placement,
    ...restProps
  };

  return <Popper {...rootProps} />;
}

export default withTheme(RtlPopper);
