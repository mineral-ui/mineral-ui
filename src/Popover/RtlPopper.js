/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
