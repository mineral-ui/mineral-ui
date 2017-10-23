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
import { Arrow } from 'react-popper';
import { createStyledComponent } from '../styles';
import { componentTheme as popoverContentComponentTheme } from './PopoverContent';

type Props = {
  /** Size of arrow */
  size: string,
  /** Placement of the popper */
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
    | 'top-start'
};

const Root = createStyledComponent(
  Arrow,
  ({ placement, size, theme: baseTheme }) => {
    const theme = popoverContentComponentTheme(baseTheme);
    let arrowShadow = ', 0 3px 1px rgba(0, 0, 0, 0.3)';
    let directionalStyles;
    let offset = `-${parseFloat(size) - 2}px`;
    let rotation = 0;

    switch (true) {
      case placement && placement.startsWith('top'):
        // Magic numbers to optically match theme.boxShadow_2
        arrowShadow = ', 0 4px 2px rgba(0, 0, 0, 0.3)';
        directionalStyles = {
          bottom: offset,
          left: `calc(50% - ${size})`,
          marginBottom: 0,
          marginTop: 0
        };
        break;
      case placement && placement.startsWith('bottom'):
        arrowShadow = '';
        directionalStyles = {
          top: offset,
          left: `calc(50% - ${size})`,
          marginBottom: 0,
          marginTop: 0
        };
        rotation = 180;
        break;
      case placement && placement.startsWith('left'):
        offset = `-${parseFloat(size) - 3}px`;
        directionalStyles = {
          right: offset,
          top: `calc(50% - ${size})`,
          marginLeft: 0,
          marginRight: 0
        };
        rotation = -90;
        break;
      case placement && placement.startsWith('right'):
        offset = `-${parseFloat(size) - 3}px`;
        directionalStyles = {
          left: offset,
          top: `calc(50% - ${size})`,
          marginLeft: 0,
          marginRight: 0
        };
        rotation = 90;
        break;
      default:
        directionalStyles = {
          display: 'none'
        };
    }

    return {
      color: theme.PopoverContent_backgroundColor,
      display: 'inline-block',
      fontSize: size,
      margin: size,
      position: 'absolute',
      textShadow: `0 2px 0 ${theme.PopoverContent_borderColor}${arrowShadow}`,
      transform: `rotate(${rotation}deg) scaleX(2)`,
      ...directionalStyles
    };
  },
  {
    displayName: 'PopoverArrow',
    rootEl: 'span'
  }
);

/**
 * PopoverArrow component
 */
export default function PopoverArrow(props: Props) {
  return (
    <Root {...props} aria-hidden>
      ▼
    </Root>
  );
}
