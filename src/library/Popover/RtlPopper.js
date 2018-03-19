/* @flow */
import React from 'react';
import { Popper } from 'react-popper';
import { withTheme } from 'glamorous';

type Props = {
  /** Placement of the Popover */
  placement?:
    | 'auto'
    | 'auto-end'
    | 'auto-start'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left'
    | 'left-end'
    | 'left-start'
    | 'right'
    | 'right-end'
    | 'right-start'
    | 'top'
    | 'top-end'
    | 'top-start',
  /** Theme */
  theme: Object
};

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

/**
 * Wrapper around react-popper's Popper to respect RTL in placement
 */
function RtlPopper({ placement, theme, ...restProps }: Props) {
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
