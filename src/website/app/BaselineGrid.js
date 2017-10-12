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
import { withRouter } from 'react-router';
import { createStyledComponent } from '../../styles';

type Props = {
  fontSize?: number, // px
  lineHeight?: number, // unitless,
  location?: any,
  offset?: number // px
};

const Root = createStyledComponent(
  'div',
  ({ fontSize, lineHeight, offset }) => {
    const rowHeight = fontSize * lineHeight;

    return {
      backgroundImage: `repeating-linear-gradient(
        0deg,
        rgba(0,255,255,0.07),
        rgba(0,255,255,0.07) ${rowHeight / 2}px,
        rgba(0,255,255,0.14) ${rowHeight / 2}px,
        rgba(0,255,255,0.14) ${rowHeight}px,
        rgba(255,0,255,0.07) ${rowHeight}px,
        rgba(255,0,255,0.07) ${rowHeight * 1.5}px,
        rgba(255,0,255,0.14) ${rowHeight * 1.5}px,
        rgba(255,0,255,0.14) ${rowHeight * 2}px
      )`,
      backgroundPosition: `0 ${offset}px`,
      bottom: 0,
      left: 0,
      pointerEvents: 'none',
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 1000
    };
  }
);

function BaselineGrid({
  fontSize = 16,
  lineHeight = 1.5,
  location,
  offset = -8
}: Props) {
  const rootProps = {
    fontSize,
    lineHeight,
    offset
  };

  return location && location.search === '?grid' ? (
    <Root {...rootProps} />
  ) : null;
}

export default withRouter(BaselineGrid);
