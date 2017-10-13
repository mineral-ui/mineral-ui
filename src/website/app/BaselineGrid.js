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
import { createStyledComponent } from '../../utils';

type Props = {
  fontSize?: number, // px
  lineHeight?: number, // unitless,
  location?: any,
  offset?: number // px
};

const Root = createStyledComponent(
  'div',
  ({ fontSize, lineHeight, offset }) => {
    const rowHeight = `${fontSize * lineHeight}px`;

    return {
      background: `repeating-linear-gradient(
        0deg,
        rgba(255,0,200,0.10),
        rgba(255,0,200,0.10) ${rowHeight},
        transparent ${rowHeight},
        transparent ${parseFloat(rowHeight) * 2}px
      )`,
      height: '500vh',
      pointerEvents: 'none',
      position: 'absolute',
      top: offset,
      width: '100vw'
    };
  }
);

function BaselineGrid({
  fontSize = 16,
  lineHeight = 1.25,
  location,
  offset = 0
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
