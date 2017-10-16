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
import { createStyledComponent } from '../../../../utils';

type Props = {
  angle?: number,
  backgroundColor?: string,
  children: React$Node,
  clip?: boolean,
  point?: number
};

const commonStyles = {
  bottom: 0,
  position: 'absolute',
  height: '1em'
};

const Root = createStyledComponent('div', ({ clip, theme }) => ({
  overflow: clip ? 'hidden' : null,
  paddingLeft: `${parseFloat(theme.space_inset_sm) * 4}em`,
  paddingRight: `${parseFloat(theme.space_inset_sm) * 4}em`,
  position: 'relative',

  '@media(min-width: 46em)': {
    paddingLeft: `${parseFloat(theme.space_inset_sm) * 16}em`,
    paddingRight: `${parseFloat(theme.space_inset_sm) * 16}em`
  }
}));

const Left = createStyledComponent(
  'span',
  ({ angle, backgroundColor, point }) => ({
    ...commonStyles,
    backgroundColor,
    left: 0,
    transform: `skewY(${angle}deg) translateY(1em) scaleY(30)`,
    transformOrigin: 'top right',
    width: `${point * 100}%`
  })
);

const Right = createStyledComponent(
  'span',
  ({ angle, backgroundColor, point }) => ({
    ...commonStyles,
    backgroundColor,
    right: 0,
    transform: `skewY(-${angle}deg) translateY(1em) scaleY(30)`,
    transformOrigin: 'top left',
    width: `${(1 - point) * 100}%`
  })
);

export default function Section({
  angle = 7,
  backgroundColor = '#fff',
  children,
  clip = true,
  point = 1 / 4,
  ...restProps
}: Props) {
  const props = {
    angle,
    backgroundColor,
    point
  };
  return (
    <Root {...restProps}>
      {children}
      {clip && <Left {...props} />}
      {clip && <Right {...props} />}
    </Root>
  );
}
